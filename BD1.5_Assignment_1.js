let express=require("express")
let cors=require("cors")
let app=express()
app.use(cors())
let port=3000

let taxRate=5
let discountPercentage=10
let loyalityRate=2
/*
Endpoint 1: Calculate the total price of items in the cart

Create an endpoint that takes a newItemPrice and cartTotal as a query parameter and returns total cart value.

Write an Express code snippet.

Declare an endpoint cart-total using the get keyword.

Declare two variables newItemPrice and cartTotalto take the input.

Parse the input as a float to calculate the total cart price.

Return the result as a string.

API Call: <http://localhost:3000/cart-total?newItemPrice=1200&cartTotal=0>

Expected Output: 1200*/

app.get('/cart-total',(req,res)=>{
  let newItemPrice=parseFloat(req.query.newItemPrice)
  let cartTotal=parseFloat(req.query.cartTotal)
  let total=newItemPrice+cartTotal
  res.send(total.toString())
})

/**
Endpoint 2 : Apply a discount based on membership status

Create an endpoint that takes a cartTotal and isMember as a query parameter and returns final price after applying the discount.

Write an Express code snippet.

Declare an endpoint /membership-discount using the get keyword.

Declare two variables cartTotal and isMember to take the input.

Parse the cartTotal as a float to calculate the total cart value.

Return the result as a string.

If the Membership status = true, then the discount percentage is applied

If the Membership status = false, no discount is applied

API Call: <http://localhost:3000/membership-discount?cartTotal=3600&isMember=true>

Expected Output: 3240*/

app.get('/membership-discount',(req,res)=>{
  let cartTotal=parseFloat(req.query.cartTotal)
  let isMember=req.query.isMember
  let result;
  if(isMember == "true"){
    result=cartTotal-((cartTotal*discountPercentage)/100)
  }else{
    result=cartTotal
  }
  res.send(result.toString())
})
/*
Endpoint 3 : Calculate tax on the cart total

Create an endpoint that takes a cartTotal as a query parameter and returns the tax applied on the Cart Total.

Write an Express code snippet.

Declare an endpoint /calculate-tax using the get keyword.

Declare a variable cartTotal as input.

Parse the cartTotal input as float to calculate the cart amount after applying the tax rate.

Return the result as a string.

API Call: <http://localhost:3000/calculate-tax?cartTotal=3600>

Expected Output: 180
*/

app.get('/calculate-tax',(req,res)=>{
  let cartTotal=parseFloat(req.query.cartTotal)
  let tax=cartTotal*taxRate/100
  res.send(tax.toString())
})

/**
Endpoint 4 : Estimate delivery time based on shipping method

Create an endpoint that takes a shippingMethod and distance as a query parameter and returns the number of days for delivering the package.

Write an Express code snippet.

Declare an endpoint /estimate-delivery using the get keyword.

Declare 2 variables shippingMethod and distance as inputs.

Parse the distance input as float to calculate the delivery time based on the distance.

Return the result as a string.

If the shippingMethod = Standard, the delivery days will be 1 day per 50 kms.

If the shippingMethod = Express, the delivery days will be 1 day per 100 kms.

API Call: <http://localhost:3000/estimate-delivery?shippingMethod=express&distance=600>

Expected Output: 6
*/
app.get('/estimate-delivery',(req,res)=>{
  let shippingMethod=req.query.shippingMethod
  let distance=parseFloat(req.query.distance)
  let result;
  if(shippingMethod == "standard"){
    result=distance/50
  }else{
    result=distance/100
  }
  res.send(result.toString())
})

/**
Endpoint 5 : Calculate the shipping cost based on weight and distance

Create an endpoint that takes weight and distance as query parameters and returns the shipping cost of the packages.

Write an Express code snippet.

Declare an endpoint /shipping-cost using the get keyword.

Declare 2 variables weight and distance as inputs.

Parse the weight and distance input as float to calculate the price based on the distance.

Return the result as a string.

Note: The formula to calculate shipping cost would be:

weight * distance * 0.1 where weight is 2 kgs.

API Call: <http://localhost:3000/shipping-cost?weight=2&distance=600>

Expected Output: 120
*/
app.get('/shipping-cost',(req,res)=>{
  let weight=parseFloat(req.query.weight)
  let distance=parseFloat(req.query.distance)
  let result=weight*distance*0.1
  res.send(result.toString())
})

/**  
Endpoint 6 : Calculate loyalty points earned from a purchase

Create an endpoint that takes purchaseAmount as query parameters and returns the loyalty points.

Write an Express code snippet.

Declare an endpoint /loyalty-points using the get keyword.

Declare a variable purchaseAmount as an input.

Parse the purchaseAmount input as float to calculate the loyalty points based on the purchase amount.

Return the result as a string.

API Call: <http://localhost:3000/loyalty-points?purchaseAmount=3600>

Expected Output: 7200
*/

app.get('/loyalty-points',(req,res)=>{
  let purchaseAmount=parseFloat(req.query.purchaseAmount)
  let result=purchaseAmount*loyalityRate
  res.send(result.toString())
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})