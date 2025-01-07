class User:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.address = None  # Adding address, though it's not required
        self.phone = None    # Adding phone, though it's not required

    def update_address(self, address):
        self.address = address  # Unused feature
