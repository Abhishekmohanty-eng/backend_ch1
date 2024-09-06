const express = require('express');
const app = express();
const port = 3000;

/*
Question 1:
Create an endpoint that takes a name as a query parameter and returns it in lowercase.
Declare an endpoint whisper using the get keyword.
Declare a variable name.
Turn it into lowercase.
Return the result.
API Call: http://localhost:3000/whisper?name=John
Expected Output: john
Answer:
*/

app.get('/whisper', (req, res) => {
    try {
        const name = req.query.name;
        if (!name) {
            throw new Error('Name query parameter is required');
        }
        const lowerCaseName = name.toLowerCase();
        res.send(lowerCaseName);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 2:
Create an endpoint that takes companyName and productName as query parameters and returns the full product name.
Declare an endpoint fullProductname using the get keyword.
Declare two variables companyName and productName to take the inputs.
Declare a variable fullProductName. Assign the full product name to this variable by concatenating the inputs with a space.
Return the result.
API Call: http://localhost:3000/full-product-name?companyName=Apple&productName=iPhone
Expected Output: Apple iPhone
Answer:
*/

app.get('/full-product-name', (req, res) => {
    try {
        const companyName = req.query.companyName;
        const productName = req.query.productName;
        if (!companyName || !productName) {
            throw new Error('Both companyName and productName query parameters are required');
        }
        const fullProductName = `${companyName} ${productName}`;
        res.send(fullProductName);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 3:
Create an endpoint that takes month and year as query parameters and returns a concatenated date in the format 'Month/Year'.
Declare an endpoint date using the get keyword.
Declare two variables month and year to take the inputs.
Declare a variable formattedDate. Assign the formatted date to this variable by concatenating the inputs with a slash (”/”).
Return the result.
API Call: http://localhost:3000/date?month=05&year=2024
Expected Output: 05/2024
Answer:
*/

app.get('/date', (req, res) => {
    try {
        const month = req.query.month;
        const year = req.query.year;
        if (!month || !year) {
            throw new Error('Both month and year query parameters are required');
        }
        const formattedDate = `${month}/${year}`;
        res.send(formattedDate);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Questions 4:
Create an endpoint that takes your home city as a query parameter and returns a greeting in the format 'You live in <city name>'.
Declare an endpoint greet using the get keyword.
Declare a variable city to input the home city.
Declare a variable greeting. Assign the greeting to this variable by concatenating the input home city.
Return the result.
API Call: http://localhost:3000/greet?city=Kolkata
Expected Output: You live in Kolkata
Answers:
*/

app.get('/greet', (req, res) => {
    try {
        const city = req.query.city;
        if (!city) {
            throw new Error('City query parameter is required');
        }
        const greeting = `You live in ${city}`;
        res.send(greeting);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Exercise 5:
Create an endpoint that takes capital, and country as query parameters and returns a formatted sentence in the format “[capital] is the capital of [country].”
Declare an endpoint capital using the get keyword.
Declare two variables capital and country to take the inputs.
Declare a variable countryCapital. Assign the formatted sentence to this variable. Eg., Delhi is the capital of India.
Return the result.
API Call: http://localhost:3000/capital?capital=Delhi&country=India
Expected Output: Delhi is the capital of India.
Answer:
*/

app.get('/capital', (req, res) => {
    try {
        const capital = req.query.capital;
        const country = req.query.country;
        if (!capital || !country) {
            throw new Error('Both capital and country query parameters are required');
        }
        const countryCapital = `${capital} is the capital of ${country}`;
        res.send(countryCapital);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Exercise 6:
Create an endpoint that takes firstName, lastName, and domain as query parameters and returns a formatted office email address.
Declare an endpoint email using the get keyword.
Declare three variables firstName, lastName, and domain to take the inputs.
Declare a variable email. Assign the formatted email to this variable. Eg. amanranjan@company.com.
Return the result.
API Call: http://localhost:3000/email?firstName=aman&lastName=ranjan&domain=company.com
Expected Output: aman.ranjan@company.com
Answer:
*/

app.get('/email', (req, res) => {
    try {
        const firstName = req.query.firstName;
        const lastName = req.query.lastName;
        const domain = req.query.domain;
        if (!firstName || !lastName || !domain) {
            throw new Error('FirstName, lastName, and domain query parameters are required');
        }
        const email = `${firstName}.${lastName}@${domain}`;
        res.send(email);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
