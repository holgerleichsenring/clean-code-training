def calculate_total_price(items):
    total = 0
    for item in items:
        if item['type'] == 'regular':
            total += item['price'] * 1.1  # Adding unnecessary logic for future use
        elif item['type'] == 'discounted':
            total += item['price'] * 0.9
        else:
            total += item['price']  # Over-complicating the simple logic
    return total
