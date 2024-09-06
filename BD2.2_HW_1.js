let express= require("express")
let app=express()
let port=3000

/**
Question 1:

Write an Express code snippet to filter temperatures above 25 degrees Celsius.

Define an endpoint /high-temperatures using the get method.

Implement a function filterHighTemperatures that returns true if the temperature is above 25 degrees Celsius.

Inside the endpoint, use the filter method to filter temperatures above 25 degrees Celsius.

Send the filtered temperatures as a JSON response.

Given Data: [22, 26, 19, 30, 23, 28, 17, 31]

API Call: <http://localhost:3000/high-temperatures>

Expected Output: [26, 30, 28, 31]
*/
let data=[22, 26, 19, 30, 23, 28, 17, 31]
function filterHighTemperatures(temp){
  return temp > 25
}
app.get('/high-temperatures',(req,res)=>{
  let filteredTemperatures=data.filter(filterHighTemperatures)
  res.send(filteredTemperatures)
})
/**
Question 2:

Write an Express code snippet to filter prices less than or equal to 100 rupees.

Instructions:

Define an endpoint /low-prices using the get method.

Implement a function filterLowPrices that returns true if the price is less than or equal to 100.

Inside the endpoint, use the filter method to filter prices less than or equal to 100.

Send the filtered prices as a JSON response.

Given Data: [80, 120, 95, 150, 60, 110]

API Call: <http://localhost:3000/low-prices>

Expected Output: [80, 95, 60]
*/
let prices=[80, 120, 95, 150, 60, 110]
function filterLowPrices(price){
  return price <= 100
}
app.get('/low-prices',(req,res)=>{
  let filteredPrices=prices.filter(filterLowPrices)
  res.send(filteredPrices)
})


/**
Question 3:

Write an Express code snippet to filter product ratings greater than 3.5.

Instructions:

Define an endpoint /high-ratings using the get method.

Implement a function filterHighRatings that returns true if the rating is greater than 3.5.

Inside the endpoint, use the filter method to filter product ratings greater than 3.5.

Send the filtered ratings as a JSON response.

Given Data: [4.2, 3.8, 2.5, 4.7, 3.0, 4.9, 3.6]

API Call:<http://localhost:3000/high-ratings>

Expected Output: [4.2, 3.8, 4.7, 4.9, 3.6]
*/
let ratings=[4.2, 3.8, 2.5, 4.7, 3.0,4.9, 3.6]
function filterHighRatings(rating){
  return rating > 3.5
}
app.get('/high-ratings',(req,res)=>{
  let filteredRatings=ratings.filter(filterHighRatings)
  res.send(filteredRatings)
})
/**
Question 4:

Write an Express code snippet to filter Indian names longer than 6 characters.

Instructions:

Define an endpoint /long-indian-names using the get method.

Implement a function filterLongIndianNames that returns true if the name length is greater than 6 characters.

Inside the endpoint, use the filter method to filter Indian names longer than 6 characters.

Send the filtered names as a JSON response.

Given Data: ['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita']

API Call: <http://localhost:3000/long-indian-names>

Expected Output: ['Priyanka', “Anushka“]
*/
let names=['Akshay', 'Priyanka', 'Arjun', 'Anushka', 'Rajesh', 'Kavita']
function filterLongIndianNames(name){
  return name.length > 6
}

app.get('/long-indian-names',(req,res)=>{
  let filteredNames=names.filter(filterLongIndianNames)
  res.send(filteredNames)
})
/**
Question 5:

Write an Express code snippet to filter products cheaper than a certain price.

Instructions:

Define an endpoint /cheaper-products using the get method.

Implement a function filterCheaperProducts that takes a query parameter filterParam and returns true if the product price is less than the provided parameter.

Inside the endpoint, extract the query parameter filterParam and use it to filter products cheaper than that price.

Send the filtered products as a JSON response.

Given Data: [10, 25, 50, 75, 100, 150, 200]

API Call: http://localhost:3000/cheaper-products?filterParam=100

Expected Output: [10, 25, 50, 75]
*/

var prices2=[10, 25, 50, 75, 100, 150, 200]
function filterCheaperProducts(filterParam){
  return prices2 < filterParam
}
app.get('/cheaper-products',(req,res)=>{
  let filterParam=parseFloat(req.query.filterParam)
  console.log(filterParam)
  let filteredPrices=prices2.filter(filterCheaperProducts)
  console.log(filteredPrices)
  res.send(filteredPrices)
})
        
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})