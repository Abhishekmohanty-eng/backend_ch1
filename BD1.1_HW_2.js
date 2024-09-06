const express = require('express');
const app = express();
const port = 3000;

/*
Question 1: Send a custom commit message
Declare 2 variables named type & message
type: Will represent the kind of commit. For example, feat, setup, docs, fix, etc
message: Will be a brief description summarising all the changes
To process requests, create an endpoint /custom-commit
Concatenate these variables in a format that will be later used as a standard for committing messages
API Call: http://localhost:3000/custom-commit?type=feat&message=Added%20new%20API%20endpoint
Expected Output: feat: Added new API endpoint
Answer:
*/

app.get('/custom-commit', (req, res) => {
    try {
        const type = req.query.type;
        const message = req.query.message;
        if (!type || !message) {
            throw new Error('Both type and message query parameters are required');
        }
        const commitMessage = `${type}: ${message}`;
        res.send(commitMessage);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 2: Generate certificate for students
Declare 3 variables named firstName, lastName & courseName
To process requests, create an endpoint /certificate
Use the values to generate a certificate for the student
API Call: http://localhost:3000/certificate?firstName=Amit&lastName=Ranjan&courseName=BytR
Expected Output: This certification is awarded to Amit Ranjan for completing the course BytR
Answer:
*/

app.get('/certificate', (req, res) => {
    try {
        const firstName = req.query.firstName;
        const lastName = req.query.lastName;
        const courseName = req.query.courseName;
        if (!firstName || !lastName || !courseName) {
            throw new Error('FirstName, lastName, and courseName query parameters are required');
        }
        const certificate = `This certification is awarded to ${firstName} ${lastName} for completing the course ${courseName}`;
        res.send(certificate);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 3: Configure a custom out-of-office message
Declare 2 variables named startMonth & endMonth
To process requests, create an endpoint /autoreply
Use the values to send an automated message to anyone trying to get in touch with you
API Call: http://localhost:3000/autoreply?startMonth=May&endMonth=June
Expected Output: Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from May till June. Your enquiry will be resolved by another colleague.
Answer:
*/

app.get('/autoreply', (req, res) => {
    try {
        const startMonth = req.query.startMonth;
        const endMonth = req.query.endMonth;
        if (!startMonth || !endMonth) {
            throw new Error('StartMonth and endMonth query parameters are required');
        }
        const autoReplyMessage = `Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from ${startMonth} till ${endMonth}. Your enquiry will be resolved by another colleague.`;
        res.send(autoReplyMessage);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 4: Send a secure URL
Declare a variable domain
To process requests, create an endpoint /secureurl
Use the value to send a secure URL back to the user.
API Call: http://localhost:3000/secureurl?domain=app.invact.com
Expected Output: https://app.invact.com
Answer:
*/

app.get('/secureurl', (req, res) => {
    try {
        const domain = req.query.domain;
        if (!domain) {
            throw new Error('Domain query parameter is required');
        }
        const secureURL = `https://${domain}`;
        res.send(secureURL);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 5: Send a verification OTP
Declare a variable otpCode
To process requests, create an endpoint /sendotp
Use the value to send a verification OTP message
API Call: http://localhost:3000/sendotp?otpCode=1234
Expected Output: Your OTP for account verification is 1234. Do not share this with anyone
Answer:
*/

app.get('/sendotp', (req, res) => {
    try {
        const otpCode = req.query.otpCode;
        if (!otpCode) {
            throw new Error('OTP code query parameter is required');
        }
        const otpMessage = `Your OTP for account verification is ${otpCode}. Do not share this with anyone`;
        res.send(otpMessage);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 6: Send a welcome mail to new user
Declare 2 variables firstName & email
Make an endpoint /welcome to process the requests
Use the values to send a welcome text to the user
API Call: http://localhost:3000/welcome?firstName=Amit&email=amit@gmail.com
Expected Output: Hey Amit. We're excited to have you here, we'll send future notifications to your registered mail (amit@gmail.com)
Answer:
*/

app.get('/welcome', (req, res) => {
    try {
        const firstName = req.query.firstName;
        const email = req.query.email;
        if (!firstName || !email) {
            throw new Error('FirstName and email query parameters are required');
        }
        const welcomeMessage = `Hey ${firstName}. We're excited to have you here, we'll send future notifications to your registered mail (${email})`;
        res.send(welcomeMessage);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 7: Generate Github profile URL
Declare a variable username
Make an endpoint /github-profile to process the requests
Generate a Github profile URL by using the provided username
API Call: http://localhost:3000/github-profile?userName=ankitkumar123
Expected Output: https://github.com/ankitkumar123
Answer:
*/

app.get('/github-profile', (req, res) => {
    try {
        const username = req.query.username;
        if (!username) {
            throw new Error('Username query parameter is required');
        }
        const githubProfileURL = `https://github.com/${username}`;
        res.send(githubProfileURL);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

/*
Question 8: Convert text into CSV row format
Declare variables named id, email, rollNumber
Make an endpoint /text-to-csv to process the requests
Using the provided values return a valid CSV row
API Call: http://localhost:3000/text-to-csv?id=1254&email=example@gmail.com&rollNumber=24
Expected Output: 1254, example@gmail.com, 24
Answer:
*/

app.get('/text-to-csv', (req, res) => {
    try {
        const id = req.query.id;
        const email = req.query.email;
        const rollNumber = req.query.rollNumber;
        if (!id || !email || !rollNumber) {
            throw new Error('Id, email, and rollNumber query parameters are required');
        }
        const csvRow = `${id}, ${email}, ${rollNumber}`;
        res.send(csvRow);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
