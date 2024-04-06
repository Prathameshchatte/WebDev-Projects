// script.js

// Menu item prices
const menuItemPrices = {
    'Vegetable Curry': 10,
    'Quinoa Salad': 8,
    'Veggie Burger': 12
};

let orderDetails = [];

// Add item to order
document.getElementById('add-item').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const menuItem = document.getElementById('menu-items').value;
    const quantity = parseInt(document.getElementById('quantity').value);

    if (name && mobile && address && menuItem && quantity > 0) {
        orderDetails.push({ name: name, mobile: mobile, address: address, item: menuItem, quantity: quantity });
        updateTotalPrice();
    }
});

// Show bill
document.getElementById('show-bill').addEventListener('click', function () {
    let billContent = '<h3>Bill</h3>';
    let totalPrice = 0;
    orderDetails.forEach(item => {
        const itemTotal = menuItemPrices[item.item] * item.quantity;
        billContent += `<p>${item.item} - Quantity: ${item.quantity} - Price: $${itemTotal.toFixed(2)}</p>`;
        totalPrice += itemTotal;
    });
    document.getElementById('bill-details').innerHTML = billContent;
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
});

// Update total price
function updateTotalPrice() {
    let totalPrice = 0;
    orderDetails.forEach(item => {
        totalPrice += menuItemPrices[item.item] * item.quantity;
    });
    document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Proceed to payment
document.getElementById('payment-button').addEventListener('click', function() {
    const totalPrice = parseFloat(document.getElementById('total-price').textContent.substring(8));
    // Simulate a successful payment
    alert('Payment successful! Your order is placed.');
    
    // Simulate sending a message to the user's phone number
    const userMobile = document.getElementById('mobile').value;
    console.log(`Payment successful. Message sent to ${userMobile}: "Payment is successful and your order is placed."`);
});



// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Retrieve form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Example: Send data to backend for processing (simulated with console log)
    console.log('Contact Form Details:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form fields
    event.target.reset();

    // Show success message
    alert('Your message has been sent!');
});


