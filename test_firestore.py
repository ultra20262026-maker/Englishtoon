import urllib.request
import json

API_KEY = "AIzaSyA1_kx4HmDWZF_T_EnZDKgq5yssYlOMaWM"
PROJECT_ID = "english-toon-14072"
BASE_URL = f"https://firestore.googleapis.com/v1/projects/{PROJECT_ID}/databases/(default)/documents/codes?key={API_KEY}"

req = urllib.request.Request(BASE_URL)
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        docs = data.get('documents', [])
        print(f"Found {len(docs)} documents.")
        if docs:
            print("First doc:", json.dumps(docs[0], ensure_ascii=False, indent=2))
except Exception as e:
    print("Error:", e)
