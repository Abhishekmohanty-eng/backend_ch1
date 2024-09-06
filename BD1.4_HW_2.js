let express=require('express')
let app=express()
let port=3000
/**
Question 1:

Given username generate a GitHub profile URL for the user

Declare a variable username

Make an endpoint /github-profile to process the requests

Generate a Github profile URL by using the provided username

For Example: https://github.com/ankitkumar123

Write a function generateProfileUrl() which takes the above variable and returns the profile url as expected

API Call: http://localhost:3000/github-profile?username=ankitkumar123

Expected Output: https://github.com/ankitkumar123
*/

function generateProfileUrl(username){
  return "https://github.com/"+username
}
app.get( '/github-profile',(req,res)=>{
  let username=req.query.username
  res.send(generateProfileUrl(username))
})

/**
Question 2:

Declare 3 variables named firstName , lastName & courseName

To process requests, create an endpoint /certificate

Use the values to generate a certificate for the student

Write a function generateCertificate() which takes the above variables and returns the certificate as expected

API Call: http://localhost:3000/certificate?firstName=Amit&lastName=Ranjan&courseName=BytR

Expected Output: This certification is awarded to Amit Ranjan for completing the course BYTR
*/

function generateCertificate(firstName,lastName,courseName){
  return "This certification is awarded to "+firstName+" "+lastName+" for completing the course "+courseName
}
app.get( '/certificate',(req,res)=>{
  let firstName=req.query.firstName
  let lastName=req.query.lastName
  let courseName=req.query.courseName
  res.send(generateCertificate(firstName,lastName,courseName))
})

/**
Question 3:

Create an endpoint that takes maths, science & english as query parameters and returns grade in percentage

Write an Express code snippet.

Declare an endpoint /grade using the get keyword.

Declare 3 variables math, science & english to take the inputs.

Create a function calculateGrade() which takes the above variables & returns the result.

Calculate the students grade in percentage ( Considering the maximum marks a student can get in a subject is 100 )

Add the 3 values & divide the result by 300

Now multiply the result with 100

For example: gradeInPercentage = ((subject1 + subject2 + subject3) / 300 ) * 100

Make sure you return the percentage as Integer.

In the end, concatenate the values to return the result in the expected format.

API Call: <http://localhost:3000/grade?maths=70&science=82&english=75>

Expected Output: Your grade in percentage is 76%
*/

function calculateGrade(math,science,english){
  let grade=((math+science+english)/300)*100
  return grade.toFixed(0)+"%"
}

app.get( '/grade',(req,res)=>{
  let math=parseFloat(req.query.maths)
  let science=parseFloat(req.query.science)
  let english=parseFloat(req.query.english)
  res.send("Your grade in percentage is "+calculateGrade(math,science,english))
})

/**
Question 4:

Create an endpoint that takes billAmount & numberOfFriends as query parameters and returns the result

Write an Express code snippet.

Declare an endpoint /split-bill using the get keyword.

Declare 2 variables billAmount & numberOfFriends to take the input.

Create a function splitBill() which takes the above variables & splits the bill accordingly

Calculate the split amount among all the friends

let splitAmount = billAmount / numberOfFriends

In the end, concatenate the values to return the result in the expected format.

Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.

API Call: http://localhost:3000/split-bill?billAmount=150&numberOfFriends=3

Expected Output: Result: Each friend owes Rs. 50 against the bill
*/

function splitBill(billAmount,numberOfFriends){
  let splitAmount=billAmount/numberOfFriends
  return "Result: Each friend owes Rs. "+splitAmount.toFixed(2)+" against the bill"

}
app.get( '/split-bill',(req,res)=>{
  let billAmount=parseFloat(req.query.billAmount)
  let numberOfFriends=parseFloat(req.query.numberOfFriends)
  res.send(splitBill(billAmount,numberOfFriends))
})

/**

Question 5:

Create an endpoint that takes a totalHours & hourlyWage and returns the monthly salary.

Write an Express code snippet.

Declare an endpoint /monthly-salary using the get keyword.

Declare 2 variables totalHours & hourlyWage to take the input.

Create a function calculateSalary which takes the above variables & returns the result in expected format

Calculate the employee’s monthly salary

monthlySalary = hourlyWage * totalHours

In the end, concatenate the values to return the result in the expected format.

Hint: To get the Rupee sign, press Ctrl+Alt+Key4. Press them together to get the rupee sign.

API Call:http://localhost:3000/ 

Expected Output: Result: Your monthly salary is ₹320000*/

function calculateSalary(hourlyWage,totalHours){
  let monthlySalary=hourlyWage*totalHours
  return "Result: Your monthly salary is ₹"+monthlySalary.toFixed(0)
}
app.get( '/monthly-salary',(req,res)=>{
  let hourlyWage=parseFloat(req.query.hourlyWage)
  let totalHours=parseFloat(req.query.totalHours)
  res.send(calculateSalary(hourlyWage,totalHours))
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})