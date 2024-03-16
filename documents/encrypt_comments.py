# student_comments.py (Python environment)

from cryptography.fernet import Fernet
from student_comments import student_comments
positive_comments, negative_comments = student_comments()
# Generate a key and instantiate a Fernet object
key = Fernet.generate_key()
cipher_suite = Fernet(key)

# Encrypt the data
encrypted_positive = cipher_suite.encrypt(str(positive_comments).encode())
encrypted_negative = cipher_suite.encrypt(str(negative_comments).encode())

# Save the encrypted data to a file
with open('encrypted_comments.dat', 'wb') as f:
    f.write(encrypted_positive + b'\n' + encrypted_negative)

# Output the key so you can use it for decryption
print(f"Encryption key: {key.decode()}")
