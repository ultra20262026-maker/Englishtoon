import urllib.request
import json

url = 'https://firestore.googleapis.com/v1/projects/english-toon-14072/databases/(default)/documents/codes'
try:
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        if 'documents' in data:
            print(f"Found {len(data['documents'])} users.")
        else:
            print('No documents found or empty collection.')
except urllib.error.HTTPError as e:
    print('HTTP Error:', e.code)
    print('Body:', e.read().decode())
except Exception as e:
    print('Error:', e)
