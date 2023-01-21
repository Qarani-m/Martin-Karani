from cryptography.fernet import Fernet


key = Fernet.generate_key()

print(key)


text = "This is text"


print(text)