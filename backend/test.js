// test/cart.test.js
const calculateTotal = require('../cart');
const chai = require('chai');
const expect = chai.expect;

describe('calculateTotal', function() {
    it('should return the correct total price', function() {
        const cartItems = [
            { name: 'Item 1', price: 10 },
            { name: 'Item 2', price: 20 }
        ];
        const result = calculateTotal(cartItems);
        expect(result).to.equal(30);
    });
});