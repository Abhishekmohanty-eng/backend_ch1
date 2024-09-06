let express= require( "express" )
let app=express()
let port=3000

/**
Question 1:

Calculate a person’s BMI category given weight (kilograms) and height(meters)

Write an Express code snippet.

Declare an endpoint /check-bmi using the get keyword.

Declare 2 variables height & weight to take the inputs.

Use the formula to calculate the BMI and return the result in the expected format

API Call: http://localhost:3000/check-bmi?weight=70&height=1.75

Expected Output: BMI category is normal weight
*/
app.get('/check-bmi',(req,res)=>{
  let weight=parseFloat(req.query.weight)
  let height=parseFloat(req.query.height)
  let bmi=weight/(height*height)
  let result;
  if(bmi < 18.5){
    result="underweight"
  }else if(bmi >= 18.5 && bmi <= 24.9){
    result="normal weight"
  }else if(bmi >= 25 && bmi <= 29.9){
    result="overweight"
  }else{
    result="obese"
  }
  res.send("BMI category is "+result)
})
/*
Question 2:

Calculate a student’s academic performance based on their grade

Write an Express code snippet.

Declare an endpoint /check-performance using the get keyword.

Declare a variable grade to take the input.

Check their performance based on 3 categories

grade >= 90 = 'excellent'

grade >= 75 = 'good'

grade ≥ 50 = 'average'

other wise 'poor'

API Call: http://localhost:3000/check-performance?grade=91

Expected Output: Academic performance is excellent
*/
app.get('/check-performance',(req,res)=>{
  let grade=parseFloat(req.query.grade)
  let result;
  if(grade >= 90){
    result="excellent"
  }else if(grade >= 75){
    result="good"
  }else if(grade >= 50){
    result="average"
  }else{
    result="poor"
  }
  res.send("Academic performance is "+result)
})
/**
Question 3:

Calculate a person’s age group given their age

Write an Express code snippet.

Declare an endpoint /check-age-group using the get keyword.

Declare a variable age to take the input.

Based on their age calculate the age group they belong in

age <= 12 = 'child'

age <=17 = 'teenager'

age <= 64 = 'adult'

otherwise 'senior'

API Call: <http://localhost:3000/check-age-group?age=25>

Expected Output: Age group is adult

Answer:
*/
app.get('/check-age-group',(req,res)=>{
  let age=parseFloat(req.query.age)
  let result;
  if(age <= 12){
    result="child"
  }else if(age <= 17){
    result="teenager"
  }else if(age <= 64){
    result="adult"
  }else{
    result="senior"
  }
  res.send("Age group is "+result)
})
/*
Question 4:

Calculate a person’s loan eligibility given creditScore

Write an Express code snippet.

Declare an endpoint /check-loan-eligibility using the get keyword.

Declare a variable creditScore to take the input.

Use the creditScore to determine loan eligibility

creditScore >= 750 = 'high'

creditScore >= 650 = 'medium'

Otherwise 'low'

API Call: http://localhost:3000/check-loan-eligibility?creditScore=670

Expected Output: Loan eligibility is medium

Answer:
*/
app.get( '/check-loan-eligibility',(req,res)=>{
  let creditScore=parseFloat(req.query.creditScore)
  let result;
  if(creditScore >= 750){
    result="high"
  }else if(creditScore >= 650){
    result="medium"
  }else{
    result="low"
  }
  res.send("Loan eligibility is "+result)
})
/**
Question 5:

Given a person’s income calculate the tax bracket they fall in

Write an Express code snippet.

Declare an endpoint /check-tax-bracket using the get keyword.

Declare a variable income to take the input

Use the income to calculate the tax bracket

income <= 500000 = '10% tax bracket'

income <= 1000000 = '15% tax bracket'

income <= 1500000 = '20% tax bracket'

otherwise '30% tax bracket'

API Call: <http://localhost:3000/check-tax-bracket?income=720000>

Expected Output: You fall under the 15% tax bracket
*/
/**
*/
/**
*/
app.get( '/check-tax-bracket',(req,res)=>{
  let income=parseFloat(req.query.income)
  let result;
  if(income <= 500000){
    result="10% tax bracket"
  }else if(income <= 1000000){
    result="15% tax bracket"
  }else if(income <= 1500000){
    result="20% tax bracket"
  }else{
    result="30% tax bracket"
  }
  res.send("You fall under the "+result)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})