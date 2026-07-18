text = "Ø§Ù„Ø¯Ù Ø§Ø¹ Ø¹Ù† Ø§Ù„Ù‚Ù„Ø¹Ø©"

print("Trying latin1 -> utf8:")
try:
    print(text.encode('latin1').decode('utf-8'))
except Exception as e:
    print(e)

print("\nTrying cp1252 -> utf8:")
try:
    print(text.encode('cp1252').decode('utf-8'))
except Exception as e:
    print(e)
