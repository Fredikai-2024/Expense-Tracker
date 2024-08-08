// test/integration.test.js
const request = require('supertest');
const app = require('../server');
const chai = require('chai');
const expect = chai.expect;

describe('POST /api/cart/total', function() {
    it('should return the total price of items', function(done) {
        const cartItems = [
            { name: 'Item 1', price: 10 },
            { name: 'Item 2', price: 20 }
        ];
        
        request(app)
            .post('/api/cart/total')
            .send({ cartItems })
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.total).to.equal(30);
                done();
            });
    });
});