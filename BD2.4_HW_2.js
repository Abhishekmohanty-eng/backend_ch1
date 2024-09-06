let express=require('express')
let app=express()
let port=3000


/**
Exercise 1: Sort Books by Year in ascending order

Define the function sortBooksByYear to sort books by their year in ascending order.

Declare a GET endpoint /books/sort-by-year to use the sortBooksByYear function.

Given Data:

let books = [
   { title: 'Moby Jonas', author: 'Herman Melville', publication_year: 2023 },
   { title: '1984', author: 'George Orwell', publication_year: 1984 },
   { title: 'A Tale of Two Cities', author: 'Charles Jonas', publication_year: 2000 },
];


Sample Endpoint: http://localhost:3000/books/sort-by-year

Expected Output:

[
   { title: '1984', author: 'George Orwell', publication_year: 1984 },
   { title: 'A Tale of Two Cities', author: 'Charles Jonas', publication_year: 2000 },
   { title: 'Moby Jonas', author: 'Herman Melville', publication_year: 2023 },
];

*/
let books =[
  { title: 'Moby Jonas', author: 'Herman Melville', publication_year: 2023 },
  { title: '1984', author: 'George Orwell', publication_year: 1984 },
  { title: 'A Tale of Two Cities', author: 'Charles Jonas', publication_year: 2000 },
]

function sortBooksByYear(books){
  return books.sort((a,b)=>a.publication_year-b.publication_year)
}
app.get('/books/sort-by-year',(req,res)=>{
  let sortedBooks=sortBooksByYear(books)
  res.json(sortedBooks)
})

/**
Exercise 2: Sort Employees by Salary in Descending Order

Define the function sortEmployeesBySalary to sort employees by their salaries in descending order.

Declare a GET endpoint /employees/sort-by-salary to use the sortEmployeesBySalary function.

Given Data:

Sample Endpoint: http://localhost:3000/employees/sort-by-salary

Expected Output:[

{ "name": "John", "salary": 75000},

{ "name": "Jane", "salary": 50000},

{ "name": "Doe", "salary": 30000}

]

*/
let employees =[
   { name: "Doe", salary: 30000},
  { name: "John", salary: 75000},
  { name: "Jane", salary: 50000}
 
]
function sortEmployeesBySalary(employees){
  return employees.sort((a,b)=>b.salary-a.salary)
}
app.get('/employees/sort-by-salary',(req,res)=>{
  let sortedEmployees=sortEmployeesBySalary(employees)
  res.json(sortedEmployees)
})
/**
Exercise 3: Sort Products by Price in Ascending Order

Define the function sortProductsByPrice to sort products by their price in ascending order.

Declare a GET endpoint /products/sort-by-price to use the sortProductsByPrice function.

Given Data:

Sample Endpoint: http://localhost:3000/products/sort-by-price

Expected Output:Expected Output:

{ "name": "Product C", "price": 10 },

{ "name": "Product A", "price": 15},

{ "name": "Product B", "price": 25 }


*/
let products =[
  { name: "Product C", price: 10},
  { name: "Product A", price: 15},
  { name: "Product B", price: 25}

]
function sortProductsByPrice(products){
  return products.sort((a,b)=>a.price-b.price)
}
app.get('/products/sort-by-price',(req,res)=>{
  let sortedProducts=sortProductsByPrice(products)
  res.json(sortedProducts)
})

/**
Exercise 4: Sort Movies by Rating in Descending Order

Define the function sortMoviesByRating to sort movies by their rating in descending order.

Declare a GET endpoint /movies/sort-by-rating to use the sortMoviesByRating function.

Given Data:

Sample Endpoint: http://localhost:3000/movies/sort-by-rating

Expected Output:{"title": "Movie A", "rating": 9.0), {"title": "Movie B", "rating": 8.5), {"title": "Movie C", "rating": 7.0)
*/
let movies =[
  { title: "Movie A", rating: 9.0},
  { title: "Movie B", rating: 8.5},
  { title: "Movie C", rating: 7.0}

]
function sortMoviesByRating(movies){
  return movies.sort((a,b)=>b.rating-a.rating)
}
app.get('/movies/sort-by-rating',(req,res)=>{
  let sortedMovies=sortMoviesByRating(movies)
  res.json(sortedMovies)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})