let express= require( "express" )
let app=express()
let port=3000
/**
Question 1:

Create an endpoint that takes a number as a query parameter and returns whether the number is a whole number or not.

Write an Express code snippet.

Declare an endpoint check-whole-number using the get keyword.

Declare a variable number to take the input.

Declare a variable result. If the number is whole (≥0), assign “whole” to the result. Else, assign “not whole”.

API Call: <http://localhost:3000/check-whole-number?number=10>

Expected Output: Number is whole number
*/

app.get("/check-whole-number", (req, res) =>{
  let number=parseFloat(req.query.number)
  let result;
  if(number >= 0){
    result="whole a number"
  }else{
    result="not whole number"
  }
  res.send("Number is "+result)
});
/**
Question 2:

Create an endpoint that takes two numbers as a query parameter and returns whether the numbers are equal or not.

Write an Express code snippet.

Declare an endpoint check-equal using the get keyword.

Declare two variables num1 and num2 to take the input.

Declare a variable result. If the two numbers are equal, assign “equal” to the result. Else, assign “not equal”.

Return the result. Eg., Number is equal

API Call: <http://localhost:3000/check-equal?num1=40&num2=45>

Expected Output: Numbers are not equal*/
app.get('/check-equal',(req,res)=>{
  let num1=parseFloat(req.query.num1)
  let num2=parseFloat(req.query.num2)
  let result;
  if(num1 === num2){
    result="equal"
  }else{
    result="not equal"
  }
  res.send("Numbers are "+result)
})

/**
Question 3:

Create an endpoint that takes a boolean query parameter indicating if a user is active and returns 'User is Active' or 'User is not Active'.

Write an Express code snippet.

Declare an endpoint check-active using the get keyword.

Declare a variable isActive to take the input.

Declare a variable result. If the user is active, assign “User is Active” to the result. Else, assign “User is not Active”.

Return the result. Eg., User is Active

API Call: <http://localhost:3000/check-active?isActive=true>

Expected Output: User is Active
*/

app.get('/check-active',(req,res)=>{
  let isActive=req.query.isActive
  let result;
  if(isActive === "true"){
    result="User is Active"
  }else{
    result="User is not Active"
  }
  res.send("User is "+result)
})


/**
Question 4:

Create an endpoint that takes a user's cost of goods bought as a query parameter and returns 'User is eligible for a discount' if the cost is over 1000, otherwise 'User is not eligible for a discount'.

Write an Express code snippet.

Declare an endpoint check-discount using the get keyword.

Declare a variable cost to take the input.

Declare a variable result. If the cost is more than 1000, assign “User is eligible for a discount” to the result. Else, assign “User is not eligible for a discount”.

Return the result.

API Call: <http://localhost:3000/check-discount?cost=1700>

Expected Output: User is eligible for a discount*/

app.get('/check-discount',(req,res)=>{
  let cost=parseFloat(req.query.cost)
  let result;
  if(cost > 1000){
    result="User is eligible for a discount"
  }else{
    result="User is not eligible for a discount"
  }
  res.send(result)
})
// Question 5:

// Create an endpoint that takes work experience (in years) as a query parameter and returns whether the person is experienced, fresher, or non-working.

// Write an Express code snippet.

// Declare an endpoint check-experience using the get keyword.

// Declare a variable workExperience to take the input.

// Declare a variable result. If the workExperience are more than 0, assign “experienced” to the result. Else if the workExperience are less than 0, assign “non-working” to the result. Else, assign “fresher”.

// Return the result. Eg., Person is experienced

// API Call: <http://localhost:3000/check-experience?workExperience=5>

// Expected Output: Person is experienced

app.get('/check-experience',(req,res)=>{
  let workExperience=parseFloat(req.query.workExperience)
  let result;
  if(workExperience > 0){
    result="experienced"
  }else if(workExperience < 0){
    result="non-working"
  }else{
    result="fresher"
  }
  res.send("Person is "+result)
})
/**
Question 6:

Create an endpoint that takes the result as a query parameter and returns whether the grade is Grade A (above 80), B (between 50 to 80), or Fail (below 50).

Write an Express code snippet.

Declare an endpoint check-result using the get keyword.

Declare a variable result to take the input.

Declare a variable grade. If the result is more than 80, assign “A” to the grade. Else if the result is more than 50 but less than 80, assign “B” to the result. Else, assign “Fail”.

Return the result. Eg., The grade is A

API Call: <http://localhost:3000/check-result?result=70>

Expected Output: The grade is B
*/

app.get('/check-result',(req,res)=>{
  let result=parseFloat(req.query.result)
  let grade;
  if(result > 80){
    grade="A"
  }else if(result > 50 && result < 80){
    grade="B"
  }else{
    grade="Fail"
  }
  res.send("The grade is "+grade)
})

/**
Question 7:

Create an endpoint that takes the number of steps as a query parameter and returns whether the student’s attendance is low (less than 50 classes), moderate (50 to 90 classes), or high (more than 90 classes).

Write an Express code snippet.

Declare an endpoint check-attendance using the get keyword.

Declare a variable attendance to take the input.

Declare a variable result. If the attendance is less than 50 classes, assign “low” to the result. Else if the attendance is less than 90, assign “moderate” to the result. Else, assign “high”.

Return the result. Eg., Attendance is high

API Call: <http://localhost:3000/check-attendance?attendance=95>

Expected Output: Attendance is high
*/

app.get('/check-attendance',(req,res)=>{
  let attendance=parseFloat(req.query.attendance)
  let result;
  if(attendance < 50){
    result="low"
  }else if(attendance < 90){
    result="moderate"
  }else{
    result="high"
  }
  res.send("Attendance is "+result)
})

/*
Question 8:

Create an endpoint that takes the number of stars a restaurant has as a query parameter and returns whether the restaurant rating is low (less than 3 stars), medium (3 or 4 stars), or high (5 stars).

Write an Express code snippet.

Declare an endpoint check-rating using the get keyword.

Declare a variable stars to take the input.

Declare a variable result. If the rating is less than 3 stars, assign “low” to the result. Else if the rating is less than or equal to 4 stars, assign “moderate” to the result. Else, assign “high”.

Return the result. Eg., Restaurant rating is high

API Call: <http://localhost:3000/check-rating?stars=4>

Expected Output: Restaurant rating is medium

Answer:


*/

app.get('/check-rating',(req,res)=>{
  let stars=parseFloat(req.query.stars)
  let result;
  if(stars < 3){
    result="low"
  }else if(stars <= 4){
    result="medium"
  }else{
    result="high"
  }
  res.send("Restaurant rating is "+result)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})