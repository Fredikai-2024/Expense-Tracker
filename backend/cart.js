// cart.js
function calculateTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.price, 0);
}

module.exports = calculateTotal;