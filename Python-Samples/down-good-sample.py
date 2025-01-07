def validate_payment_info(payment_info):
    if not payment_info.get("card_number"):
        raise ValueError("Card number is missing")
    if not payment_info.get("expiry_date"):
        raise ValueError("Expiry date is missing")

def process_payment_transaction(amount):
    print(f"Processing payment for {amount}...")

def send_payment_receipt(email):
    print(f"Sending receipt to {email}...")

def process_payment(payment_info):
    validate_payment_info(payment_info)
    process_payment_transaction(payment_info["amount"])
    send_payment_receipt(payment_info["email"])
