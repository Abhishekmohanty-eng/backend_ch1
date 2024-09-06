const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;

// Sample data
let products = [
  { productId: 1, name: 'Laptop', inStock: true },
  { productId: 2, name: 'Phone', inStock: true },
  { productId: 3, name: 'Tablet', inStock: false }
];

let employees = [
  { employeeId: 1, name: 'Alice', active: true },
  { employeeId: 2, name: 'Bob', active: true },
  { employeeId: 3, name: 'Charlie', active: false }
];

let orders = [
  { orderId: 1, product: 'Laptop', delivered: false },
  { orderId: 2, product: 'Phone', delivered: true },
  { orderId: 3, product: 'Tablet', delivered: false }
];

let reservations = [
  { reservationId: 1, name: 'John', confirmed: false },
  { reservationId: 2, name: 'Jane', confirmed: true },
  { reservationId: 3, name: 'Jack', confirmed: false }
];

let subscriptions = [
  { subscriptionId: 1, service: 'Netflix', active: false },
  { subscriptionId: 2, service: 'Spotify', active: true },
  { subscriptionId: 3, service: 'Amazon Prime', active: false }
];

// Function to remove out of stock products
function removeOutOfStockProducts() {
  products = products.filter(product => product.inStock);
  return products;
}

// Endpoint to remove out of stock products
app.get('/products/remove-out-of-stock', (req, res) => {
  const updatedProducts = removeOutOfStockProducts();
  res.json(updatedProducts);
});

// Function to update employee status by ID
function updateEmployeeStatusById(employeeId, active) {
  const employee = employees.find(employee => employee.employeeId === parseInt(employeeId));
  if (employee) {
    employee.active = active === 'true';
  }
  return employees;
}

// Endpoint to update employee status by ID
app.get('/employees/update', (req, res) => {
  const { employeeId, active } = req.query;
  const updatedEmployees = updateEmployeeStatusById(employeeId, active);
  res.json(updatedEmployees);
});

// Function to update order status by ID
function updateOrderStatusById(orderId, delivered) {
  const order = orders.find(order => order.orderId === parseInt(orderId));
  if (order) {
    order.delivered = delivered === 'true';
  }
  return orders;
}

// Endpoint to update order status by ID
app.get('/orders/update', (req, res) => {
  const { orderId, delivered } = req.query;
  const updatedOrders = updateOrderStatusById(orderId, delivered);
  res.json(updatedOrders);
});

// Function to remove unconfirmed reservations
function removeUnconfirmedReservations() {
  reservations = reservations.filter(reservation => reservation.confirmed);
  return reservations;
}

// Endpoint to remove unconfirmed reservations
app.get('/reservations/remove-unconfirmed', (req, res) => {
  const updatedReservations = removeUnconfirmedReservations();
  res.json(updatedReservations);
});

// Function to update subscription status by ID
function updateSubscriptionStatusById(subscriptionId, active) {
  const subscription = subscriptions.find(subscription => subscription.subscriptionId === parseInt(subscriptionId));
  if (subscription) {
    subscription.active = active === 'true';
  }
  return subscriptions;
}

// Endpoint to update subscription status by ID
app.get('/subscriptions/update', (req, res) => {
  const { subscriptionId, active } = req.query;
  const updatedSubscriptions = updateSubscriptionStatusById(subscriptionId, active);
  res.json(updatedSubscriptions);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
