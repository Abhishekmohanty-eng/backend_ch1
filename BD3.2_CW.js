const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;

// Sample data
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let names = ['Rahul', 'Sita', 'Amit', 'Vikram', 'Priya'];
let employees = [
  { employeeId: 1, name: 'Rahul' },
  { employeeId: 2, name: 'Sita' },
  { employeeId: 3, name: 'Amit' }
];

let contacts = [
  { phoneNumber: '1234567890', name: 'Rahul', address: '123 Street, City' },
  { phoneNumber: '0987654321', name: 'Sita', address: '456 Avenue, City' },
  { phoneNumber: '1112223334', name: 'Amit', address: '789 Boulevard, City' }
];
/**
Exercise 1: Find a Number in the Array

Create an endpoint numbers/find that finds a specific number in an array of unique numbers.

API Call:

<http://localhost:3000/numbers/find/5>

Expected Output:

5
*/

app.get('/numbers/find/:number', (req, res) => {
  const number = parseInt(req.params.number);
  const foundNumber = numbers.find(num => num === number);
  res.json(foundNumber);
});

/**
Exercise 2:Find a Name in the Array

Create an endpoint names/find/:name that finds a specific name in an array of unique names.

API Call:

<http://localhost:3000/names/find/Sita>

Expected Output:

'Sita
*/

app.get('/names/find/:name', (req, res) => {
  const name = req.params.name;
  const foundName = names.find(n => n === name);
  res.json(foundName);
});

/**
Exercise 3: Find an Employee by ID

Create an endpoint employees/find/:id that finds an employee by their unique employee ID.

API Call:

<http://localhost:3000/employees/find/2>

Expected Output:

{ 'employeeId': 2, 'name': 'Sita' }
*/

app.get('/employees/find/:id', (req, res) =>{
  const id=parseInt(req.params.id)
  const foundEmployee=employees.find(emp=>emp.employeeId===id)
  res.json(foundEmployee)
})

/**
Exercise 4: Find a Contact by Phone Number

Create an endpoint /contacts/find/:phoneNumber that finds a contact by their unique phone number.

API Call:

<http://localhost:3000/contacts/find/1234567890>

Expected Output:

{ 'phoneNumber': '1234567890', 'name': 'Rahul', 'address': '123 Street, City' }
*/
app.get("contacts/find/:phoneNumber",(req,res)=>{
  const phoneNumber=req.params.phoneNumber
  const foundContact=contacts.find(contact=>contact.phoneNumber===phoneNumber)
  res.json(foundContact)
})
/**
Exercise 5: Find a Contact by Name

*/

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});