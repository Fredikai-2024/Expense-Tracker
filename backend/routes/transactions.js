const express = require('express');
const Transaction = require('../models/transaction');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { amount, description } = req.body;
    const transaction = new Transaction({ amount, description });
    await transaction.save();
    res.status(201).send('Transaction added');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
