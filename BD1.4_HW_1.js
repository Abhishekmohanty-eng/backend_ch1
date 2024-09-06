let express=require('express')
let app=express()
let port=3000

/**
Question 1:

Create an endpoint that returns a welcome message to a student who wants to learn functions.

Eg., We will learn functions!

Write an Express code snippet.

Declare an endpoint welcome using the get keyword.

Use a function getWelcomeMessage to return the welcome message.

Return the welcome message as a response.

API Call: <http://localhost:3000/welcome>

Expected Output: We will now learn functions!*/

function getWelcomeMessage(){
  return "We will now learn functions!"
}
app.get('/welcome',(req,res)=>{
  res.send(getWelcomeMessage())
})

/**
Question 2:

Create an endpoint that takes a username as a query parameter and returns a greeting message.

Write an Express code snippet.

Declare an endpoint greet using the get keyword.

Declare a variable username to take the input.

Use a function getGreetingMessage to return the greeting message.

Return the greeting message as a response.

API Call: <http://localhost:3000/greet?username=John>

Expected Output: Hey, John! Are you ready to learn functions with us?
*/

function getGreetingMessage(username){
  return "Hey, "+username+"! Are you ready to learn functions with us?"
}
app.get('/greet',(req,res)=>{
  let username=req.query.username
  res.send(getGreetingMessage(username))
})

/**
Question 3:

Create an endpoint that takes the number of yearsOfExp in functions as a query parameter and returns a message indicating the person's experience.

Write an Express code snippet.

Declare an endpoint message using the get keyword.

Declare a variable yearsOfExp to take the input.

Use a function checkYearsOfExp to determine the person's experience.

If the years of experience are more than 0, the output will be “You have some experience with functions. Great!” Otherwise, the output will be 'No worries. You will start writing functions in no time!'

Return the experience message as a response.

API Call: <http://localhost:3000/message?yearsOfExp=3>

Expected Output: You have some experience with functions. Great!*/

function checkYearsOfExp(yearsOfExp){
  if(yearsOfExp > 0){
    return "You have some experience with functions. Great!"
  }else{
    return "No worries. You will start writing functions in no time!"
  }
}
app.get('/message',(req,res)=>{
  let yearsOfExp=parseFloat(req.query.yearsOfExp)
  res.send(checkYearsOfExp(yearsOfExp))
})

/**
Question 4:

Create an endpoint that takes the number of days and hours a student can dedicate to learn functions per week and returns the total hours available per week.

Write an Express code snippet.

Declare an endpoint hours using the get keyword.

Declare variables days and hours to take the inputs.

Use a function getTime to calculate the total hours available per week.

Return the total hours as a response.

API Call: <http://localhost:3000/hours?days=5&hours=2>

Expected Output: 10
*/

function getTime(days,hours){
  return days*hours
}
app.get('/hours',(req,res)=>{
  let days=parseFloat(req.query.days)
  let hours=parseFloat(req.query.hours)
  res.send(getTime(days,hours).toString())
})

/* 
Question 5:

Create an endpoint that takes a username and a boolean hasCompleted indicating module completion status, and returns a message indicating if the student has completed the modules or not.

Write an Express code snippet.

Declare an endpoint module-completion-status using the get keyword.

Declare variables username and hasCompleted to take the inputs.

Use a function getModuleCompletion to determine if the student has completed the modules.

Return the completion status message as a response.

API Call: <http://localhost:3000/module-completion-status?username=John&hasCompleted=true>

Expected Output: John has completed the modules

Answer:
*/

function getModuleCompletion(username,hasCompleted){
  if(hasCompleted){
    return username+" has completed the modules"
  }else{
    return username+" has not completed the modules"
  }
}

app.get('/module-completion-status',(req,res)=>{
  let username=req.query.username
  let hasCompleted=req.query.hasCompleted==="true"
  res.send(getModuleCompletion(username,hasCompleted))
})

/**
Question 6:

Create an endpoint that takes a student's city and name, and returns a personalized greeting message.

Write an Express code snippet.

Declare an endpoint personalized-greeting using the get keyword.

Declare variables city and name to take the inputs.

Use a function getPersonalizedGreeting to return the personalized greeting message.

Return the personalized greeting message as a response.

API Call: <http://localhost:3000/personalized-greeting?city=New%20York&name=John>

Expected Output: Hey, John! What's famous about New York?
*/

function getPersonalizedGreeting(city,name){
  return "Hey, "+name+"! What's famous about "+city+"?"
}

app.get('/personalized-greeting',(req,res)=>{
  let city=req.query.city
  let name=req.query.name
  res.send(getPersonalizedGreeting(city,name))
})

/*
Question 7:

Create an endpoint that takes a student's birthyear and returns the age.

Write an Express code snippet.

Declare an endpoint find-age using the get keyword.

Declare a variable birthyear to take the input.

Use a function findAge to calculate the age from the birth year.

You need to subtract the birth year from the current year (2024).

Return the age as a response.

API Call: <http://localhost:3000/find-age?birthyear=1990>

Expected Output: 34
*/

function findAge(birthyear){
  return 2024-birthyear
}
app.get('/find-age',(req,res)=>{
  let birthyear=parseFloat(req.query.birthyear)
  res.send(findAge(birthyear).toString())
})

/**
Question 8:

Create an endpoint that takes the number of days per week and hours per day a student can dedicate to learning functions and returns whether it is sufficient (>= 30 hours per week) or not.

Write an Express code snippet.

Declare an endpoint is-time-sufficient using the get keyword.

Declare variables days and hours to take the inputs.

Use a function findRequiredTime to calculate the total time available for learning functions.

Return a message indicating whether the time is sufficient or not.

Sample API Call: <http://localhost:3000/is-time-sufficient?days=5&hours=6>

Expected Output: The time being dedicated is sufficient for learning functions
*/

function findRequiredTime(days,hours){
  return days*hours
}
app.get('/is-time-sufficient',(req,res)=>{
  let days=parseFloat(req.query.days)
  let hours=parseFloat(req.query.hours)
  let requiredTime=findRequiredTime(days,hours)
  if(requiredTime >= 30){
    res.send("The time being dedicated is sufficient for learning functions")
  }else{
    res.send("The time being dedicated is not sufficient for learning functions")
  }
})

app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})
