let express=require("express")
let app=express()
let port=3000
/**
Question 1:

Create an endpoint that takes the marks in two subjects and returns the total marks.

Write an Express code snippet.

Declare an endpoint total-marks using the get keyword.

Declare two variables marks1 and marks2 to take the inputs.

Declare a variable totalMarks. Assign the sum of the two marks to this variable.

Return the result.

API Call: <http://localhost:3000/total-marks?marks1=70&marks2=80>

Expected Output: 150
*/

app.get('/total-marks',(req,res)=>{
  try{
    let marks1=parseFloat(req.query.marks1)
    let marks2=parseFloat(req.query.marks2)
    let totalMarks=marks1+marks2
    res.send(totalMarks.toString())
  }catch(error){
    res.status(400).send({error:error.message})
  }
})

/* Create an endpoint that takes the weight of 3 items in a shipment and returns the total weight of the shipment.

Write an Express code snippet.

Declare an endpoint total-weight using the get keyword.

Declare three variables weight1, weight2, and weight3 to take the inputs.

Declare a variable totalWeight. Assign the sum of the weights of the 3 shipments to this variable.

Return the result.

API Call: <http://localhost:3000/total-weight?weight1=3&weight2=3&weight3=5>

Expected Output: 11*/

app.get('/total-weight',(req,res)=>{
  try{
    let weight1=parseFloat(req.query.weight1)
    let weight2=parseFloat(req.query.weight2)
    let weight3=parseFloat(req.query.weight3)
    let totalWeight=weight1+weight2+weight3
    res.send(totalWeight.toString())
    
  }catch(error){
    res.status(400).send({error:error.message})
  }
})
/*
Question 3:

Create an endpoint that takes the annual salary and returns the monthly salary.

Write an Express code snippet.

Declare an endpoint monthly-salary using the get keyword.

Declare a variable annualSalary to take the inputs.

Declare a variable monthlySalary. Calculate the value by dividing the annual salary by 12 and assign it to this variable.

Return the result.

API Call: <http://localhost:3000/monthly-salary?annualSalary=1200000>

Expected Output: 100000
*/ 
app.get('/monthly-salary',(req,res)=>{
  try{
  let annualSalary=parseFloat(req.query.annualSalary)
  let monthlySalary=annualSalary/12
  res.send(monthlySalary.toString())
  }catch{
    res.ststus(400).send({error:error.message})
  }
})

/**
Question 4:

Create an endpoint to calculate the total number of pages read given pages per day and number of days.

Write an Express code snippet.

Declare an endpoint total-pages using the get keyword.

Declare two variables pagesPerDay and days to take the inputs.

Declare a variable totalPages. Calculate the value by multiplying the pages read per day by the number of pages and assign it to this variable.

Return the result.

API Call: <http://localhost:3000/total-pages?pagesPerDay=20&days=6>

Expected Output: 120
*/
app.get('/total-pages',(req,res)=>{
  try{
    let pagesPerDay=parseFloat(req.query.pagesPerDay)
    let days=parseFloat(req.query.days)
    let totalPages=pagesPerDay*days
    res.send(totalPages.toString())
    
  
  }catch(error){
  res.status(400).send({error:error.message})
}
})

/**
Question 5:

Create an endpoint to calculate the conversion from one currency to another given the exchange rate.

Write an Express code snippet.

Declare an endpoint currency-conversion using the get keyword.

Declare two variables amount and exchangeRate to take the inputs.

Declare a variable convertedAmount. Calculate the value by multiplying the input amount with the exchange rate and assign it to this variable.

Return the result.

API Call: <http://localhost:3000/currency-conversion?amount=2000&exchangeRate=0.0125>

Expected Output: 25
*/

app.get('/currency-conversion',(req,res)=>{
  try{
    let amount=parseFloat(req.query.amount)
    let exchangeRate=parseFloat(req.query.exchangeRate)
    let convertedAmount=amount*exchangeRate
    res.send(convertedAmount.toString())
    
  }catch{
    res.status(400).send({error:error.message})
  }
})

/**
Question 6:

Create an endpoint to calculate the average sales of a product, given the sales on 3 days.

Write an Express code snippet.

Declare an endpoint average-sales using the get keyword.

Declare three variables sales1, sales2, and sales3 to take the inputs.

Declare a variable avgSales. Assign the average of the sales on the 3 days to this variable.

Return the result.

API Call: <http://localhost:3000/average-sales?sales1=30&sales2=35&sales3=50>

Expected Output: 38.33
*/

app.get('/average-sales',(req,res)=>{
  try{
    let sales1=parseFloat(req.query.sales1)
    let sales2=parseFloat(req.query.sales2)
    let sales3=parseFloat(req.query.sales3)
    let avgSales= (sales1+sales2+sales3)/3
    res.send(avgSales.toFixed(2).toString())
  }catch{
    res.status(400).send({error:error.message})
  }
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})

