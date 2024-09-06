let express= require("express")
let app=express()
let port=3000

/**
 Exercise 1: Filter In-Stock Products

1 Define the function filter InStockProducts to return only the in-stock products.

2. Declare a GET endpoint/in-stock-products to use the filter InStockProducts function.

Given Data:

// Array of products

let products = [

];

{ name: "Product A", inStock: true }, (name: "Product B", inStock: false),

(name: "Product C", inStock: true),

(name: "Product D", inStock: false }

Sample Endpoint: http://localhost:3000An-stock-products

Expected Output:

{"name": "Product A", "instock": true },

{"name": "Product C", "InStock
*/
let products =[
  { name: "Product A", inStock: true },
  { name: "Product B", inStock: false },
  { name: "Product C", inStock: true },
  { name: "Product D", inStock: false }
]
function filterInStockProducts(product){
  return product.inStock
}
app.get('/in-stock-products',(req,res)=>{
  let result=products.filter(product=>filterInStockProducts(product))
  res.json(result)
})
/*
 Exercise 2: Filter Adults from User List

1. Define the function filter Adults to return only users who are 18 years old or older.

2. Declare a GET endpoint/adult-users to use the filter Adults function.

Given Data:

+]

// Array of users

let users = [

1;

{ name: "Alice", age: 25),

{ name: "Bob", age: 30),

{name: "Charlie", age: 17),

{ name: "Dave", age: 16)

Sample Endpoint: http://localhost:3000/adult-users

Expected Output:

{"name": "Alice", "age": 25),

{"name": "Bob", "age": 30}

Answer:

*/
const users = [
  { "name": "Alice", "age": 25 },
  { "name": "Bob", "age": 30 },
  { "name": "Charlie", "age": 17 },
  { "name": "Dave", "age": 16 }
];
function filterAdults(user){
  return user.age >= 18
}

app.get('/adult-users',(req,res)=>{
  let result=users.filter(user=>filterAdults(user))
  res.json(result)
})

/*
 Exercise 3: Filter Expensive Products

ACT

1. Define the function filterExpensiveProducts to return only the products that cost more than a specified price (read from query),



2. Declare a GET endpoint/expensive-products to use the filterExpensiveProducts function

Given Data:

// Array of products with prices

let productPrices = 

{ name: "Product A", price: 50),

{name: "Product B", price: 150), { name: "Product C", price: 200),

{ name: "Product D", price: 90)

Sample Endpoint: http://localhost:3000/expensive-products?price=100

Expected Output:

{"name": "Product 8", "price": 150), {"name": "Product C", "price": 200)

Answer

*/
let productPrices =[
  { name: "Product A", price: 50 },
  { name: "Product B", price: 150 },
  { name: "Product C", price: 200 },
  { name: "Product D", price: 90 }
]
function filterExpensiveProducts(price,product){
  return product.price > price
}
app.get('/expensive-products',(req,res)=>{
  let price=parseFloat(req.query.price)
  let result=productPrices.filter(product=>filterExpensiveProducts(price,product))
  res.json(result)
})
/*
 Exercise 4: Filter Articles by Word Count

1. Define the function filter LongArticles to return only the articles with a word count greater than a specified number (read from query).

2. Declare a GET endpoint/long-articles to use the filter LongArticles function.

Given Data:

[→

// Array of articles with word counts

let articles = [ {title: "Article A", wordCount: 400), {title: "Article B", wordCount: 600), {title: "Article C", wordCount: 700), {title: "Article D", wordCount: 300 }

1;

Sample Endpoint: http://localhost:3000/long-articles?minWords=500

Expected Output:

{"title": "Article 8", "wordCount":608),

{"title": "Article C", "wordCount": 780}
*/
let articles =[
  { title: "Article A", wordCount: 400 },
  { title: "Article B", wordCount: 600 },
  { title: "Article C", wordCount: 700 },
  { title: "Article D", wordCount: 300 }
]
function filterLongArticles(minWords, article){
  return article.wordCount > minWords
}
app.get('/long-articles',(req,res)=>{
  let minWords=parseFloat(req.query.minWords)
  let result=articles.filter(article=>filterLongArticles(minWords,article))
  res.json(result)
})
/*
Exercise 5: Filter Movies by Rating

1. Define the function filterHighRatedMovies to return only the movies with a rating higher than a specified rating (read from query).

2. Declare a GET endpoint/high-rated-movies to use the filter HighRated Movies function.

Given Data:

// Array of movies with ratings

let movies1

1:

{title: "Movie A", rating: 8.5),

{title: "Movie B", rating: 7.0), (title: "Movie C", rating: 9.0).

{title: "Movie D", rating: 6.5)

Sample Endpoint: http://localhost:3000/hith-rated-movies?rating-8

Expected Output:

{"title": "Hovie A", "rating": 8.5),

 */
let movies =[
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 7.0 },
  { title: "Movie C", rating: 9.0 },
  { title: "Movie D", rating: 6.5 }
]

function filterByRating(rating, movie){
  return movie.rating > rating
}
app.get('/high-rated-movies',(req,res)=>{
  let rating=parseFloat(req.query.rating)
  let result=movies.filter(movie=>filterByRating(rating,movie))
  res.json(result)
})
 /*
Exercise 6: Filter Employees by Experience

Define the function filterExperiencedEmployees to return only the employees with experience greater than a specified number of years (read from query).

Declare a GET endpoint /experienced-employees to use the filterExperiencedEmployees function.

let employees = [

1;

{ name: "Employee A", experience: 3},

{ name: "Employee B", experience: 6), {name: "Employee C", experience: 10 },

{ name: "Employee D", experience: 2}
Sample Endpoint: http://localhost:3000/experienced-employees?years=5

Expected Output:

{"name": "Exployee B", "experience": 6),

{"name": "Employee C", "expertence": 10 }

sployees vears-S

Answer:
*/
let employees =[
  { name: "Employee A", experience: 3 },
  { name: "Employee B", experience: 6 },
  { name: "Employee C", experience: 10 },
  { name: "Employee D", experience: 2 }
]

function filterExperincedEmployees(years, employee){
  return employee.experience > years
}
app.get('/experienced-employees',(req,res)=>{
  let years=parseFloat(req.query.years)
  let result=employees.filter(employee=>filterExperincedEmployees(years,employee))
  res.json(result)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})