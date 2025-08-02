const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let orders = [];

app.post('/api/orders', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json({ success: true, message: 'Order recorded', order });
});

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.listen(3000, () => console.log('Server running on port 3000'));
