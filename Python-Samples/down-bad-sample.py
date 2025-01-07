def process_payment(payment_info):
    # Validate payment details
    if not payment_info.get("card_number"):
        raise ValueError("Card number is missing")
    if not payment_info.get("expiry_date"):
        raise ValueError("Expiry date is missing")

    # Process payment
    print(f"Processing payment for {payment_info['amount']}...")

    # Send receipt
    print(f"Sending receipt to {payment_info['email']}...")
