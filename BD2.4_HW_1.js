let express=require('express')
let app=express()
let port=3000

/**
Question 1:

Write an Express code snippet to sort an array of heights in ascending order.

Instructions:

Define an endpoint /heights/sort-ascending using the get method.

Implement a function sortHeightsAscending that sorts heights in ascending order.

Inside the endpoint, create a copy of the heights array and sort it using the sortHeightsAscending function.

Send the sorted heights as a JSON response.

Given Data: [160, 175, 180, 165, 170]

API Call: <http://localhost:3000/heights/sort-ascending>

Expected Output: [160, 165, 170, 175, 180]
*/
let heights=[160, 175, 180, 165, 170]
function sortHeightsAscending(heights){
  return heights.sort((a,b)=>a-b)
}
app.get('/heights/sort-ascending',(req,res)=>{
  let sortedHeights=sortHeightsAscending(heights)
  res.json(sortedHeights)
})
/**
Question 2:

Write an Express code snippet to sort an array of heights in descending order.

Instructions:

Define an endpoint /heights/sort-descending using the get method.

Implement a function sortHeightsDescending that sorts heights in descending order.

Inside the endpoint, create a copy of the heights array and sort it using the sortHeightsDescending function.

Send the sorted heights as a JSON response.

Given Data: [160, 175, 180, 165, 170]

API Call: <http://localhost:3000/heights/sort-descending>

Expected Output: [180, 175, 170, 165, 160]
*/

function sortHeightsDescending(heights){
  return heights.sort((a,b)=>b-a)
}

app.get('/heights/sort-descending',(req,res)=>{
  let sortedHeights=sortHeightsDescending(heights)
  res.json(sortedHeights)
})
/**
Question 3:

Write an Express code snippet to sort an array of employees by salary in descending order.

Instructions:

Define an endpoint /employees/sort-by-salary-descending using the get method.

Implement a function sortEmployeesBySalaryDescending that sorts employees by salary in descending order.

Inside the endpoint, create a copy of the employees array and sort it using the sortEmployeesBySalaryDescending function.

Send the sorted employees as a JSON response.

Given Data:

[

{ name: "Rahul", employeeId: 101, salary: 50000},

(name: "Sita", employeeId: 102, salary: 60000},

(name: "Amit", employeeId: 103, salary: 45000)

API Call: <http://localhost:3000/employees/sort-by-salary-descending>

Expected Output:

[

{ "name": "Sita", "employeeId": 102, "salary": 60000},

{"name": "Rahul", "employeeId": 101, "salary": 50000}, { "name": "Amit", "employeeId": 103, "salary": 45000 }

*/

let employees=[
  { name: "Rahul", employeeId: 101, salary: 50000 },
  { name: "Sita", employeeId: 102, salary: 60000 },
  { name: "Amit", employeeId: 103, salary: 45000 }
]
function sortEmployeesBySalaryDescending(employees){
  return employees.sort((a,b)=>b.salary-a.salary)
}
app.get('/employees/sort-by-salary-descending',(req,res)=>{
  let sortedEmployees=sortEmployeesBySalaryDescending(employees)
  res.json(sortedEmployees)
})
/***
Question 4:

Write an Express code snippet to sort an array of books by pages in ascending order.

Instructions:

Define an endpoint /books/sort-by-pages-ascending using the get method.

Implement a function sortBooksByPagesAscending that sorts books by pages in ascending order.

Inside the endpoint, create a copy of the books array and sort it using the sortBooksByPagesAscending function.

Send the sorted books as a JSON response.

Given Data:
{title: "The God of Small Things", author: "Arundhati Roy", pages: 349), {title: "The White Tiger", author: "Aravind Adiga", pages: 321), {title: "The Palace of Illusions", author: "Chitra Banerjee", pages: 360}

API Call: <http://localhost:3000/books/sort-by-pages-ascending>

Expected Output:

{"title": "The White Tiger", "author": "Aravind Adiga", "pages": 321 ),

{"title": "The God of Small Things", "author": "Arundhati Roy", "pages": 340 }, {"title": "The Palace of Illusions", "author": "Chitra Banerjee", "pages": 360)

*/
let books=[
  {title: "The God of Small Things", author: "Arundhati Roy", pages: 349},
  {title: "The White Tiger", author: "Aravind Adiga", pages: 321},
  {title: "The Palace of Illusions", author: "Chitra Banerjee", pages: 360}
]
function sortBooksByPagesAscending(books){
  return books.sort((a,b)=>a.pages-b.pages)
}
app.get('/books/sort-by-pages-ascending',(req,res)=>{
  let sortedBooks=sortBooksByPagesAscending(books)
  res.json(sortedBooks)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})