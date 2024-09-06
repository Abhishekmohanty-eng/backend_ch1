const express = require('express');
const app = express();
const port = 3000;

/*
Question 1:
Create an endpoint that takes a name as a query parameter and returns it in uppercase.
Declare an endpoint /shout using the get keyword.
Declare a variable name to take the input.
Convert the name to uppercase using the .toUpperCase() method.
Return the uppercase name as the result.
API Call: http://localhost:3000/shout?name=John
Expected Output: JOHN
Answer:
*/

app.get('/shout', (req, res) => {
    try {
        const name = req.query.name;
        if (!name) {
            throw new Error('Name query parameter is required');
        }
        const upperCaseName = name.toUpperCase();
        res.send(upperCaseName);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 2:
Create an endpoint that takes firstName and lastName as query parameters and returns the full name.
Declare an endpoint fullname using the get keyword.
Declare two variables firstName and lastName to take the inputs.
Declare a variable fullName. Assign the full name to this variable by concatenating the inputs with a space.
Return the result.
API Call: http://localhost:3000/fullname?firstName=John&lastName=Doe
Expected Output: John Doe
Answer:
*/

app.get('/fullname', (req, res) => {
    try {
        const firstName = req.query.firstName;
        const lastName = req.query.lastName;
        if (!firstName || !lastName) {
            throw new Error('Both firstName and lastName query parameters are required');
        }
        const fullName = `${firstName} ${lastName}`;
        res.send(fullName);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 3:
Create an endpoint that takes month and year as query parameters and returns a formatted date in the format 'Month, Year'.
Declare an endpoint date using the get keyword.
Declare two variables month and year to take the inputs.
Declare a variable formattedDate. Assign the formatted date to this variable by concatenating the inputs with a comma.
Return the result.
API Call: http://localhost:3000/date?month=Jan&year=2024
Expected Output: Jan, 2024
Answer:
*/

app.get('/date', (req, res) => {
    try {
        const month = req.query.month;
        const year = req.query.year;
        if (!month || !year) {
            throw new Error('Both month and year query parameters are required');
        }
        const formattedDate = `${month}, ${year}`;
        res.send(formattedDate);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 4:
Create an endpoint that takes a name as a query parameter and returns a greeting in the format 'Namaste, Name!'.
Declare an endpoint greet using the get keyword.
Declare a variable name to input the name.
Declare a variable greeting. Assign the greeting to this variable by concatenating the input name.
Return the result.
API Call: http://localhost:3000/greet?name=Tanay
Expected Output: Namaste, Tanay!
Answer:
*/

app.get('/greet', (req, res) => {
    try {
        const name = req.query.name;
        if (!name) {
            throw new Error('Name query parameter is required');
        }
        const greeting = `Namaste, ${name}!`;
        res.send(greeting);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 5:
Create an endpoint that takes street, city, and state as query parameters and returns a formatted address.
Declare an endpoint address using the get keyword.
Declare three variables street, city, and state to take the inputs.
Declare a variable address. Assign the formatted address to this variable by concatenating the inputs with commas.
Return the result.
API Call: http://localhost:3000/address?street=123%20Main%20St&city=Springfield&state=IL
Expected Output: 123 Main St, Springfield, IL
Answer:
*/

app.get('/address', (req, res) => {
    try {
        const street = req.query.street;
        const city = req.query.city;
        const state = req.query.state;
        if (!street || !city || !state) {
            throw new Error('Street, city, and state query parameters are required');
        }
        const address = `${street}, ${city}, ${state}`;
        res.send(address);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 6:
Create an endpoint that takes username and domain as query parameters and returns a formatted email address.
Declare an endpoint email using the get keyword.
Declare two variables username and domain to take the inputs.
Declare a variable email. Assign the formatted email to this variable by concatenating the inputs with '@'.
Return the result.
API Call: http://localhost:3000/email?username=johndoe&domain=example.com
Expected Output: johndoe@example.com
Answer:
*/

app.get('/email', (req, res) => {
    try {
        const username = req.query.username;
        const domain = req.query.domain;
        if (!username || !domain) {
            throw new Error('Username and domain query parameters are required');
        }
        const email = `${username}@${domain}`;
        res.send(email);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
