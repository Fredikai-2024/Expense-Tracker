const express = require('express');
const session = require('express-session');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const transactionRoutes = require('./routes/transactions');

const app = express();
app.use(express.json());
app.use(cors());
app.use(session({ secret: 'secret_key', resave: false, saveUninitialized: true }));
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);

require('./config/db');

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
  