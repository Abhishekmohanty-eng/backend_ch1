let express = require("express")
let app=express()
let port=3000

// Question 1:

// Create an endpoint that takes a number as a query parameter and returns if the number is positive or negative.

// Write an Express code snippet.

// Declare an endpoint check-number using the get keyword.

// Declare a variable number to take the input.

// Parse the input as a float and check if the number is positive or negative.

// Return the result as a string.

// API Call: <http://localhost:3000/check-number?number=-5>

// Expected Output: Number is negative

app.get('/check-number',(req,res)=>{
  let number=parseFloat(req.query.number)
  let result;
  if(number >= 0){
    result= "Number is positive"
  }else{
    result="numbe is negative"
    }
  
  res.send("Nuumber is " + result)
})
// Question 2:

// Create an endpoint that takes a number as a query parameter and returns if the number is even or odd.

// Write an Express code snippet.

// Declare an endpoint check-even-odd using the get keyword.

// Declare a variable number to take the input.

// Parse the input as an integer and check if the number is even or odd.

// Return the result as a string.

// API Call: <http://localhost:3000/check-even-odd?number=4>

// Expected Output: Number is even

app.get('/check-even-odd',(req,res)=>{
  let number=parseFloat(req.query.number)
  let result;
  if(number % 2 === 0){
    result= "Number is even"
  }else{
    result="numbe is odd"
    }
  
  res.send("Nuumber is " + result)
})

// Question 3:

// Create an endpoint that takes a boolean query parameter isLoggedIn and returns if the user is logged in.

// Write an Express code snippet.

// Declare an endpoint check-login using the get keyword.

// Declare a variable isLoggedIn to take the input.

// Parse the input as a boolean and check if the user is logged in.

// Return the result as a string.

// API Call: <http://localhost:3000/check-login?isLoggedIn=true>

// Expected Output: User is logged in

app.get('/check-login',(req,res)=>{
  let isLoggedIn=req.query.isLoggedIn
  let result;
  if(isLoggedIn === "true"){
    result= "User is logged in"
  }else{
    result="User is not logged in"
    }
  
  res.send("User is " + result)
})

// Question 4:

// Create an endpoint that takes an age as a query parameter and returns if the user is eligible for a discount (age over 65).

// Write an Express code snippet.

// Declare an endpoint check-discount using the get keyword.

// Declare a variable age to take the input.

// Parse the input as an integer and check if the user is eligible for a discount.

// Return the result as a string.

// API Call: <http://localhost:3000/check-discount?age=70>

// Expected Output: User is eligible for a discount

app.get('/check-discount',(req,res)=>{
  let age=parseFloat(req.query.age)
  let result;
  if(age > 65){
    result="User is eligible for a discount"
    
  }else{
    result="User is not eligible for a discount"
  }
  res.send(result)
})


// Question 5:

// Create an endpoint that takes a number as a query parameter and returns if the number is positive, negative, or zero.

// Write an Express code snippet.

// Declare an endpoint check-number-type using the get keyword.

// Declare a variable number to take the input.

// Parse the input as a float and check if the number is positive, negative, or zero.

// Return the result as a string.

// API Call: <http://localhost:3000/check-number-type?number=0>

// Expected Output: Number is zero


app.get('/check-number-type',(req,res)=>{
  let number=parseFloat(req.query.number)
  let result;
  if(number > 0){
    result= "Number is positive"
  }else if(number < 0){
    result="numbe is negative"
    }else{
    result="Number is zero"
    }
  
  res.send("Nuumber is " + result)
})
/*Question 5:

Create an endpoint that takes a number as a query parameter and returns if the number is positive, negative, or zero.

Write an Express code snippet.

Declare an endpoint check-number-type using the get keyword.

Declare a variable number to take the input.

Parse the input as a float and check if the number is positive, negative, or zero.

Return the result as a string.

API Call: <http://localhost:3000/check-number-type?number=0>

Expected Output: Number is zero
*/

app.get('/check-number-type',(req,res)=>{
  let number=parseFloat(req.query.number)
  let result;
  if(number > 0){
    result="positive"
  }else if (number < 0){
    result= "negative"
  }else{
    result= "zero"
  }
  res.send("Number is "+result)
})

// Question 6:

// Create an endpoint that takes a temperature as a query parameter and returns if the temperature is cold (below 15°C), warm (15°C to 25°C), or hot (above 25°C).

// Write an Express code snippet.

// Declare an endpoint check-temperature using the get keyword.

// Declare a variable temperature to take the input.

// Parse the input as a float and check if the temperature is cold, warm, or hot.

// Return the result as a string.

// API Call: <http://localhost:3000/check-temperature?temperature=20>

// Expected Output: Temperature is warm

app.get('/check-temperature',(req,res)=>{
  let temperature=parseFloat(req.query.temperature)
  let result;
  if(temperature < 15){
    result="cold"
  }else if(temperature >= 15 && temperature <= 25){
    result="warm"
  }else{
    result="hot"
  }
  res.send("Temperature is "+result)
})
/**
Question 7:

Create an endpoint that takes a steps as a query parameter and returns if the user's activity level is low (below 5000), moderate (5000 to 10000), or high (above 10000).

Write an Express code snippet.

Declare an endpoint check-activity-level using the get keyword.

Declare a variable steps to take the input.

Parse the input as an integer and check if the activity level is low, moderate, or high.

Return the result as a string.

API Call: <http://localhost:3000/check-activity-level?steps=7500>

Expected Output: Activity level is moderate*/
app.get('/check-activity-level',(req,res)=>{
  let steps=parseFloat(req.query.steps)
  let result;
  if(steps < 5000){
    result="low"
  }else if(steps >= 5000 && steps <= 10000){
    result="moderate"
  }else{
    result="high"
  }
  res.send("Activity level is "+result)
})

// Question 8:

// Create an endpoint that takes likes as a query parameter and returns if a social media post has low (below 100), medium (100 to 500), or high engagement (above 500).

// Write an Express code snippet.

// Declare an endpoint check-engagement using the get keyword.

// Declare a variable likes to take the input.

// Parse the input as an integer and check if the engagement level is low, medium, or high.

// Return the result as a string.

// API Call: <http://localhost:3000/check-engagement?likes=250>

// Expected Output: Engagement level is medium

app.get('/check-engagement',(req,res)=>{
  let likes=parseFloat(req.query.likes)
  let result;
  if(likes < 100){
    result="low"
  }else if(likes >= 100 && likes <= 500){
    result="medium"
  }else{
    result="high"
  }
  res.send("Engagement level is "+result)
})


app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})

