

let express=require("express")
let cors=require("cors")
let app=express()
app.use(cors())
let port=3000

let book={
  "titel": "the god of the small things",
  "author": "Arundhati roy",
  "publicationYear":1997,
  "genre": "Novel",
  "stock": 5
  
}


/**
Question 1:

Create an endpoint that returns the details of a book stored on the server.

Write an Express code snippet to return the book object.

Define an endpoint /book using the get method.

Inside the endpoint, send the book object as a JSON response.

API Call: <http://localhost:3000/book>

Expected Output: 
*/
app.get('/book',(req,res)=>{
  res.json(book)
})
/**
Question 2:

Design an endpoint that provides the full title and author of the book.

Write an Express code snippet to access the full title and author of the book.

Define an endpoint /book/fulltitle-author using the get method.

Implement a function getFullTitleAndAuthor(book) that returns the full title and author of the book.

Inside the endpoint, call the getFullTitleAndAuthor function and send the result as a JSON response.

API Call: <http://localhost:3000/book/fulltitle-author>
*/
//{fullTitleAndAuthor: "The God of the Small Things by Arundhati Roy"}
function getFullTitleAndAuthor(book){
  return book.titel+" by "+book.author;
}

app.get( '/book/fulltitle-author',(req,res)=>{
  let fullTitleAndAuthor=getFullTitleAndAuthor(book)
  res.json({fullTitleAndAuthor})  
})

/**
Question 3:

Develop an endpoint to access the genre and availability status of the book.

Write an Express code snippet to access the genre and availability of the book.

Define an endpoint /book/genre-availability using the get method.

Implement a function getGenreAndAvailability(book) that returns the genre and availability of the book.

Inside the endpoint, call the getGenreAndAvailability function and send the result as a JSON response.

API Call: <http://localhost:3000/book/genre-availability>

Expected Output:
*/

//{genre: "Novel", availability: "In Stock"}
function getGenreAndAvailability(book){
  return {genre: book.genre, availability: book.stock > 0 ? "In Stock" : "Not Available"}
}
app.get( '/book/genre-availability',(req,res)=>{
  let genreAndAvailability=getGenreAndAvailability(book)
  res.json(genreAndAvailability)
})

/**
Question 4:

Create an endpoint to calculate and return the age of the book.

Write an Express code snippet to calculate and return the age of the book.

Define an endpoint /book/age using the get method.

Implement a function calculateBookAge(book) that calculates the age of the book.

Inside the endpoint, call the calculateBookAge function and send the result as a JSON response.

API Call: <http://localhost:3000/book/age>
*/
//{age: 27}
function calculateBookAge(book){
  return {age: 2024-book.publicationYear}
}
app.get( '/book/age',(req,res)=>{
  let age=calculateBookAge(book)
  res.json(age)
})

/**
Question 5:

Implement an endpoint to provide a summary of the book including its title, author, genre, and publication year.

Write an Express code snippet to return a summary of the book.

Define an endpoint /book/summary using the get method.

Implement a function getBookSummary(book) that returns a summary of the book.

Inside the endpoint, call the getBookSummary function and send the result as a JSON response.

API Call: <http://localhost:3000/book/summary>
*/
//{summary:"title:The God of the Small Things ,Author: Arundhati Roy,Genre: Novel, Published:1997"}

function getBookSummary(book){
  return {summary:"title:"+book.titel+",Author:"+book.author+",Genre:"+book.genre+", Published:"+book.publicationYear}
}
app.get( '/book/summary',(req,res)=>{
  let summary=getBookSummary(book)
  res.json(summary)
})

/**
Question 6:

Develop an endpoint to check the stock status of the book and determine if an order is required.

Write an Express code snippet to check the stock and order status of the book.

Define an endpoint /book/stock-status using the get method.

Implement a function checkStockAndOrder(book) that checks the stock and determines if an order is required.

Inside the endpoint, call the checkStockAndOrder function and send the result as a JSON response.

API Call: <http://localhost:3000/book/stock-status>
*/

//{"status":"In Stock","stuck":5}

function checkStockAndOrder(book){
  return {status: book.stock > 0 ? "In Stock" : "Not Available",stuck: book.stock}
}
app.get('/book/stock-status',(req,res)=>{
  let stockStatus=checkStockAndOrder(book)
  res.json(stockStatus)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})