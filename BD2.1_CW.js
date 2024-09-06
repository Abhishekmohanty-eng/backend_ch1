let express=require("express")
let cors=require("cors")
let app=express()
app.use(cors())
let port=3000


/**
Exercise 1: Return the Person Object

Steps:

Create an endpoint /person that returns the person object with properties firstName, lastName, gender, age, and isMember.

Define the variables in the person object.

API Call: <http://localhost:3000/person>
*/
let person={
  firstName:"John",
  lastName:"Doe",
  gender:"male",
  age:30,
  isMember:true
}

app.get('/person',(req,res)=>{
  res.json(person)
})
/*
Exercise 2: Access the Full Name of the Person

Steps:

Create an endpoint /person/fullname that returns the full name of the person.

Define the full name by combining firstName and lastName.

API Call: <http://localhost:3000/person/fullname>
**/
app.get('/person/fullname',(req,res)=>{
  res.send(person.firstName+" "+person.lastName)
})

/**
Exercise 3: Access Just the First Name and Gender of the Person

Steps:

Create an endpoint /person/firstname-gender that returns the first name and gender of the person.

Select the properties firstName and gender.

API Call: <http://localhost:3000/person/firstname-gender>
*/
app.get('/person/firstname-gender',(req,res)=>{
  res.send(person.firstName+" "+person.gender)
})

/**
Exercise 4: Increment the Age of the Person and Return the Updated Object

Steps:

Create an endpoint /person/increment-age that increments the age of the person.

Increment the age by 1 and return it.

API Call: <http://localhost:3000/person/increment-age>
*/

app.get('/person/increment-age',(req,res)=>{
  person.age++
  res.json(person)
})

/*
Exercise 5: Return the Full Name and Membership Status of the Person

Steps:

Create an endpoint /person/fullname-membership that returns the full name and membership status of the person.

Return the properties fullName and isMember.

API Call: <http://localhost:3000/person/fullname-membership>
*/

app.get('/person/fullname-membership',(req,res)=>{
  return{
    fullName:person.firstName+" "+person.lastName,
    isMember:person.isMember
  }
  
  
})

/**
Exercise 6: Get Final Price After Discount for Members

Steps:

Create an endpoint /person/final-price that takes the cart total and returns the final price after applying a 10% discount if the person is a member.

Define the variable cartTotal to take the input.

API Call: <http://localhost:3000/person/final-price?cartTotal=1000>
*/
app.get('/person/final-price',(req,res)=>{
  let cartTotal=parseFloat(req.query.cartTotal)
  let finalPrice=cartTotal
  if(person.isMember){
    finalPrice=cartTotal-cartTotal*0.1
  }
  res.send(finalPrice.toString())
})
/*
Exercise 7: Get Shipping Cost Based on Cart Total and Membership Status

Steps:

Create an endpoint /person/shipping-cost that takes the cart total and returns the shipping cost.

Define the variable cartTotal to take the input.

API Call: <http://localhost:3000/person/shipping-cost?cartTotal=600>
*/

function getShippingCost(cartTotal,isMamber){
  let shippingCost;
  if(cartTotal < 500 && isMamber){
    shippingCost=0;
  }
  else{
    shippingCost=99;
  }
  return{shippingCost:shippingCost.toFixed(2)}
}
app.get('/person/shipping-cost',(req,res)=>{
  let cartTotal=parseFloat(req.query.cartTotal)
  let shipppingCost=getShippingCost(cartTotal,person.isMember)
  res.json(shipppingCost)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})