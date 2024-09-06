const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;

// Sample data
let users = [
  { id: 1, username: 'ankit', fullName: 'Ankit Kumar', email: 'ankit@gmail.com' },
  { id: 2, username: 'dhananjit', fullName: 'Dhananjit Singh', email: 'dhananjit.singh@gmail.com' }
];

let creditCards = [
  { number: '1234567890123456', holder: 'John Doe', expiry: '12/24' },
  { number: '9876543210987654', holder: 'Jane Smith', expiry: '06/23' }
];

let books = [
  { isbn: '9783161484100', title: 'Example Book', author: 'John Author' },
  { isbn: '9781234567897', title: 'Another Book', author: 'Jane Writer' }
];

let people = [
  { ssn: '123-45-6789', name: 'John Doe', birthDate: '1990-01-01' },
  { ssn: '987-65-4321', name: 'Jane Smith', birthDate: '1985-05-05' }
];

// Exercise 1: Check Username Availability
app.get('/username/find/:username', (req, res) => {
  const username = req.params.username;
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    res.json({ result: 'Username is not available' });
  } else {
    res.json({ result: 'Username is available' });
  }
});

// Exercise 2: Find Credit Card Number
app.get('/credit-cards/find', (req, res) => {
  const cardNumber = req.query.cardNumber;
  const foundCard = creditCards.find(card => card.number === cardNumber);
  res.json({ creditCard: foundCard });
});

// Exercise 3: Find Email Address
app.get('/emails/find', (req, res) => {
  const email = req.query.email;
  const foundUser = users.find(user => user.email === email);
  res.json({ user: foundUser });
});

// Exercise 4: Find ISBN Number (for books)
app.get('/books/find', (req, res) => {
  const isbn = req.query.isbn;
  const foundBook = books.find(book => book.isbn === isbn);
  res.json({ book: foundBook });
});



// Exercise 5: Find Social Security Number (SSN)
app.get('/ssn/find', (req, res) => {
  const ssn = req.query.ssn;
  const foundPerson = people.find(person => person.ssn === ssn);
  res.json({ person: foundPerson });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
