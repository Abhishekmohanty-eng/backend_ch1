const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

let cart = [
  { productId: 1, name: 'Laptop', price: 50000, quantity: 1 },
  { productId: 2, name: 'Mobile', price: 20000, quantity: 2 }
];

// Endpoint 1: Add an Item to the Cart
app.get('/cart/add', (req, res) => {
  const { productId, name, price, quantity } = req.query;
  const newItem = {
    productId: parseInt(productId, 10),
    name: name,
    price: parseFloat(price),
    quantity: parseInt(quantity, 10)
  };
  cart.push(newItem);
  res.json({ cartItems: cart });
});

// Endpoint 2: Edit Quantity of an Item in the Cart
app.get('/cart/edit', (req, res) => {
  const { productId, quantity } = req.query;
  const productID = parseInt(productId, 10);
  const newQuantity = parseInt(quantity, 10);

  cart = cart.map(item => {
    if (item.productId === productID) {
      item.quantity = newQuantity;
    }
    return item;
  });

  res.json({ cartItems: cart });
});

// Endpoint 3: Delete an Item from the Cart
app.get('/cart/delete', (req, res) => {
  const { productId } = req.query;
  const productID = parseInt(productId, 10);

  cart = cart.filter(item => item.productId !== productID);
  res.json({ cartItems: cart });
});

// Endpoint 4: Read Items in the Cart
app.get('/cart', (req, res) => {
  res.json({ cartItems: cart });
});

// Endpoint 5: Calculate Total Quantity of Items in the Cart
app.get('/cart/total-quantity', (req, res) => {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  res.json({ totalQuantity: totalQuantity });
});

// Endpoint 6: Calculate Total Price of Items in the Cart
app.get('/cart/total-price', (req, res) => {
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  res.json({ totalPrice: totalPrice });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
