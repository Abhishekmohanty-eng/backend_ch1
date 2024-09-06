const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;

// Sample data
let phones = [
  { number: '123-456-7890', owner: 'Alice', type: 'mobile' },
  { number: '987-654-3210', owner: 'Bob', type: 'home' }
];

let accounts = [
  { number: '111122223333', holder: 'Charlie', balance: 5000 },
  { number: '444455556666', holder: 'Dave', balance: 3000 }
];

let licenses = [
  { number: 'D1234567', name: 'Eve', expiryDate: '2026-04-01' },
  { number: 'D7654321', name: 'Frank', expiryDate: '2024-11-15' }
];

let employees = [
  { id: 'E1234', name: 'Grace', department: 'Engineering' },
  { id: 'E5678', name: 'Hank', department: 'Marketing' }
];

let orders = [
  { id: 'ORD12345', customerName: 'Ivy', totalAmount: 150 },
  { id: 'ORD67890', customerName: 'Jake', totalAmount: 200 }
];

// Functions to find items
function findPhoneNumber(phoneNumber) {
  return phones.find(phone => phone.number === phoneNumber);
}

function findAccountNumber(accountNumber) {
  return accounts.find(account => account.number === accountNumber);
}

function findLicenseNumber(licenseNumber) {
  return licenses.find(license => license.number === licenseNumber);
}

function findEmployeeById(employeeId) {
  return employees.find(employee => employee.id === employeeId);
}

function findOrderById(orderId) {
  return orders.find(order => order.id === orderId);
}

// Endpoints
app.get('/phones/find', (req, res) => {
  const phoneNumber = req.query.phoneNumber;
  const phone = findPhoneNumber(phoneNumber);
  if (phone) {
    res.json({ phone });
  } else {
    res.status(404).json({ message: 'Phone number not found' });
  }
});

app.get('/accounts/find', (req, res) => {
  const accountNumber = req.query.accountNumber;
  const account = findAccountNumber(accountNumber);
  if (account) {
    res.json({ account });
  } else {
    res.status(404).json({ message: 'Account number not found' });
  }
});

app.get('/licenses/find', (req, res) => {
  const licenseNumber = req.query.licenseNumber;
  const license = findLicenseNumber(licenseNumber);
  if (license) {
    res.json({ license });
  } else {
    res.status(404).json({ message: 'License number not found' });
  }
});

app.get('/employees/find', (req, res) => {
  const employeeId = req.query.employeeId;
  const employee = findEmployeeById(employeeId);
  if (employee) {
    res.json({ employee });
  } else {
    res.status(404).json({ message: 'Employee ID not found' });
  }
});

app.get('/orders/find', (req, res) => {
  const orderId = req.query.orderId;
  const order = findOrderById(orderId);
  if (order) {
    res.json({ order });
  } else {
    res.status(404).json({ message: 'Order ID not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
