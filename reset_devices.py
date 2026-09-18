import urllib.request
import urllib.parse
import json
import time

API_KEY = "AIzaSyA1_kx4HmDWZF_T_EnZDKgq5yssYlOMaWM"
PROJECT_ID = "english-toon-14072"
BASE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents"

def get_all_docs(collection_id):
    docs = []
    page_token = None
    while True:
        url = f"{BASE_URL}/{urllib.parse.quote(collection_id)}?key={API_KEY}&pageSize=300"
        if page_token:
            url += f"&pageToken={page_token}"
            
        req = urllib.request.Request(url)
        try:
            with urllib.request.urlopen(req) as response:
                data = json.loads(response.read().decode())
                docs.extend(data.get('documents', []))
                page_token = data.get('nextPageToken')
                if not page_token:
                    break
        except Exception as e:
            print(f"Error fetching {collection_id}: {e}")
            break
    return docs

def reset_user(doc):
    name = doc['name']
    fields = doc.get('fields', {})
    
    needs_update = False
    
    if 'used' in fields and fields['used'].get('booleanValue') == True:
        needs_update = True
        
    if 'deviceIds' in fields:
        arr = fields['deviceIds'].get('arrayValue', {})
        if 'values' in arr and len(arr['values']) > 0:
            needs_update = True
            
    if 'deviceId' in fields and fields['deviceId'].get('stringValue') != "":
        needs_update = True

    if not needs_update:
        return False

    update_mask = []
    new_fields = fields.copy()
    
    if 'used' in new_fields:
        new_fields['used'] = {"booleanValue": False}
        update_mask.append("used")
        
    if 'deviceIds' in new_fields:
        new_fields['deviceIds'] = {"arrayValue": {}}
        update_mask.append("deviceIds")
        
    if 'deviceId' in new_fields:
        new_fields['deviceId'] = {"stringValue": ""}
        update_mask.append("deviceId")
        
    payload = {"fields": new_fields}
    
    # URL encode the document path correctly
    parts = name.split('/')
    encoded_parts = [urllib.parse.quote(p) for p in parts]
    encoded_name = '/'.join(encoded_parts)
    
    url = f"https://firestore.googleapis.com/v1/{encoded_name}?key={API_KEY}"
    for mask in update_mask:
        url += f"&updateMask.fieldPaths={mask}"
        
    data = json.dumps(payload).encode('utf-8')
    req = urllib.request.Request(url, data=data, method='PATCH')
    req.add_header('Content-Type', 'application/json')
    
    try:
        with urllib.request.urlopen(req) as response:
            return True
    except Exception as e:
        # Avoid charmap encoding errors by printing safely
        safe_name = name.split('/')[-1].encode('ascii', 'ignore').decode('ascii')
        print(f"Failed to update {safe_name}: {e}")
        return False

print("Fetching all users...")
all_users = get_all_docs("codes")
print(f"Found {len(all_users)} users in 'codes'.")

all_users_legacy = get_all_docs("codes ")
if all_users_legacy:
    print(f"Found {len(all_users_legacy)} users in 'codes '.")
    all_users.extend(all_users_legacy)

updated_count = 0
for doc in all_users:
    if reset_user(doc):
        updated_count += 1
        safe_name = doc['name'].split('/')[-1].encode('ascii', 'ignore').decode('ascii')
        print(f"Reset {safe_name}")
    time.sleep(0.05) 

print(f"Successfully reset {updated_count} accounts.")
