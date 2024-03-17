import json
from cryptography.fernet import Fernet
from student_comments import student_comments
positive_comments, negative_comments = student_comments()
# Generate a new key
key = Fernet.generate_key()
# Save this key securely; you'll need it for decryption

# Create a Fernet object
cipher_suite = Fernet(key)

# Example data to encrypt
positive_comments, negative_comments = student_comments()
json_data = json.dumps(positive_comments + negative_comments)
encrypted_data = cipher_suite.encrypt(json_data.encode())
# print(f"Encrypted data: {encrypted_data}")

# Save the encrypted data to a file if you wish
with open('documents/encrypted_comments.dat', 'wb') as file:
    file.write(encrypted_data)

# Output the key so you can use it for decryption
print(f"Encryption key: {key.decode()}")
