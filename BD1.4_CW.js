let express=require('express')
let app=express()
let port=3000
/**
Question 1:

Create an endpoint that returns a welcome message.

Write an Express code snippet.

Declare an endpoint welcome using the get keyword.

Use a function getWelcomeMessage to return the welcome message.

Return the welcome message as a response.

API Call: <http://localhost:3000/welcome>

Expected Output: Welcome to our service!
*/
function getWelcomeMessage(){
  return "Welcome to our service!"
}
app.get('/welcome',(req,res)=>{
  res.send(getWelcomeMessage())
})

/****
Question 2:

Create an endpoint that takes a username as a query parameter and returns a greeting message.

Write an Express code snippet.

Declare an endpoint greet using the get keyword.

Declare a variable username to take the input.

Use a function getGreetingMessage to return the greeting message.

Concatenate the user name to return the greeting as “Hello, <name>!”.

Return the greeting message as a response.

API Call: <http://localhost:3000/greet?username=John>

Expected Output: Hello, John!
***/
function getGreetingMessage(username){
  return "Hello, "+username+"!"
}
app.get(`/greet`, (req,res)=>{
  let username=req.query.username
  res.send(getGreetingMessage(username))

})
/*
Question 3:

Create an endpoint that takes a password as a query parameter and returns if it is strong (length > 15) or weak.

Write an Express code snippet.

Declare an endpoint check-password using the get keyword.

Declare a variable password to take the input.

Use the function checkPasswordStrength to check the password strength.

A password is considered strong if its length is greater than 15.

Return the result as a response.

API Call: <http://localhost:3000/check-password?password=myverystrongpassword>

Expected Output: Password is strong
*/
function checkPasswordStrength(password){
  if(password.length > 15){
    return "Password is strong"
  }else{
    return "Password is weak"
  }
}

app.get( '/check-password',(req,res)=>{
  let password=req.query.password
  res.send(checkPasswordStrength(password))
})

/*
Question 4:

Create an endpoint that takes two numbers as query parameters and returns their sum.

Write an Express code snippet.

Declare an endpoint sum using the get keyword.

Declare variables num1 and num2 to take the inputs.

Use a function getSum to calculate the sum.

Return the sum as a response.

API Call: <http://localhost:3000/sum?num1=5&num2=10>

Expected Output: 15
*/
function getSum(num1,num2){
  return num1+num2
}
app.get('/sum',(req,res)=>{
  let num1=parseFloat(req.query.num1)
  let num2=parseFloat(req.query.num2)
  res.send(getSum(num1,num2).toString());
})

/*
Question 5:

Create an endpoint that takes a username and a boolean isSubscribed indicating subscription status, and returns a message if the user is subscribed or not.

Write an Express code snippet.

Declare an endpoint subscription-status using the get keyword.

Declare variables username and isSubscribed to take the inputs.

Use a function getSubscriptionStatus to check the subscription status.

Return the result as a response.

API Call: <http://localhost:3000/subscription-status?username=John&isSubscribed=true>

Expected Output: John is subscribed
*/ 
function getSubscriptionStatus(username,isSubscribed){
  if(isSubscribed){
    return username+" is subscribed"
  }else{
    return username+" is not subscribed"
  }
}
app.get( '/subscription-status',(req,res)=>{
  let username=req.query.username
  let isSubscribed=req.query.isSubscribed=== "true"
  res.send(getSubscriptionStatus(username,isSubscribed))
})

/**
Question 6:

Create an endpoint that takes a product price and a discount percentage, and returns the final price after discount.

Write an Express code snippet.

Declare an endpoint discounted-price using the get keyword.

Declare variables price and discount to take the inputs.

Use a function getDiscountedPrice to calculate the final price after the discount.

Return the final price as a response.

API Call: <http://localhost:3000/discounted-price?price=100&discount=10>

Expected Output: 90
*/

function getDiscountedPrice(price,discount){
  return price - (price * discount/100)
}

app.get( '/discounted-price',(req,res)=>{
  let price=parseFloat(req.query.price)
  let discount=parseFloat(req.query.discount)
  res.send(getDiscountedPrice(price,discount).toString())
})

/**
Question 7:

Create an endpoint that takes a user's age, gender, and name, and returns a personalized greeting message.

Write an Express code snippet.

Declare an endpoint personalized-greeting using the get keyword.

Declare variables age, gender, and name to take the inputs.

Use a function getPersonalizedGreeting to return the personalized greeting message.

Return the personalized greeting message as a response.

API Call: <http://localhost:3000/personalized-greeting?age=25&gender=male&name=John>

Expected Output: Hello, John! You are a 25 year old male.
*/
function getPersonalizedGreeting(age,gender,name){
  return "Hello, "+name+"! You are a "+age+" year old "+gender+"."
}
app.get("/personalized-greeting",(req,res)=>{
  let age=req.query.age
  let gender=req.query.gender
  let name=req.query.name
  res.send(getPersonalizedGreeting(age,gender,name))
})

/**
Question 8:

Create an endpoint that takes a product price, discount percentage, and tax rate, and returns the final price after applying discount and tax.

Write an Express code snippet.

Declare an endpoint final-price using the get keyword.

Declare variables price, discount, and tax to take the inputs.

Use a function getFinalPrice to calculate the final price after discount and tax.

First, calculate the discounted price.

Then apply tax on the discounted price to calculate the final price.

Return the final price as a response.

API Call: <http://localhost:3000/final-price?price=100&discount=10&tax=5>

Expected Output: 94.5
*/
function getFinalPrice(price,discount,tax){
  let discountedPrice=price - (price * discount/100)
  return discountedPrice + (discountedPrice * tax/100)
}

app.get( '/final-price',(req,res)=>{
  let price=parseFloat(req.query.price)
  let discount=parseFloat(req.query.discount)
  let tax=parseFloat(req.query.tax)
  res.send(getFinalPrice(price,discount,tax).toString())
})

/**
Question 9:

Create an endpoint that takes three fitness activity durations (running, cycling, swimming) and returns the total exercise time.

Write an Express code snippet.

Declare an endpoint total-exercise-time using the get keyword.

Declare variables running, cycling, and swimming to take the inputs.

Use a function getTotalExerciseTime to calculate the total exercise time.

Return the total exercise time as a response.

API Call: <http://localhost:3000/total-exercise-time?running=30&cycling=40&swimming=50>

Expected Output: 120
*/

function getTotalExerciseTime(running,cycling,swimming){
  return running+cycling+swimming
}
app.get( '/total-exercise-time',(req,res)=>{
  let running=parseFloat(req.query.running)
  let cycling=parseFloat(req.query.cycling)
  let swimming=parseFloat(req.query.swimming)
  res.send(getTotalExerciseTime(running,cycling,swimming).toString())
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})

