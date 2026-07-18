import glob

files = glob.glob(r'C:\Users\Mr Mahmoud Elziadi\.gemini\antigravity\scratch\GAMES 2027\grade 1 تم\unit 1\*.html')
with open(files[0], 'rb') as f:
    raw_bytes = f.read()

# Let's see the first 250 bytes
print("RAW BYTES:", raw_bytes[:250])

# Can it be decoded as utf-8?
try:
    print("UTF-8 DECODE:", raw_bytes[:250].decode('utf-8'))
except Exception as e:
    print("UTF-8 fail:", e)

# Can it be decoded as windows-1256?
try:
    print("WIN-1256 DECODE:", raw_bytes[:250].decode('windows-1256'))
except Exception as e:
    print("WIN-1256 fail:", e)
