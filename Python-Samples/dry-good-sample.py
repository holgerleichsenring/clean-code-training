def calculate_discount(price, discount_rate):
    return price * (1 - discount_rate)

def calculate_regular_customer_discount(price):
    return calculate_discount(price, 0.1)

def calculate_vip_customer_discount(price):
    return calculate_discount(price, 0.2)

def calculate_employee_discount(price):
    return calculate_discount(price, 0.3)
