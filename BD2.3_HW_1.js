let express= require("express")
let app=express()
let port=3000

/**
Question 1:

Question 1:

Write an Express code snippet to filter employees by department.

Instructions:

Define an endpoint/employees/department/:department using the get method.

Implement a function filterByDepartment that returns true if the employee belongs to the specified department.

Inside the endpoint, extract the department parameter from the request and use it to filter the employees.

Send the filtered employees as a JSON response.

Given Data:

{ name: "Rahul Gupta", department: "HR", salary: 50000), { name: "Sneha Sharma", department: "Finance", salary: 60000), { name: "Priya Singh", department: "Marketing", salary: 55000), (name: "Amit Kumar", department: "IT", salary: 65800)

API Call: <http://localhost: 3000/employees/department/HR>

Expected Output:

C { "name": "Rahul Gupta", "department": "HR", "salary": 50000}
*/
let employees=[
  { name: "Rahul Gupta", department: "HR", salary: 50000},
  { name: "Sneha Sharma", department: "Finance", salary: 60000},
  { name: "Priya Singh", department: "Marketing", salary: 55000}
]

function filterByDepartment(department){
  return function(employee){
    return employee.department === department
  }
}
app.get('/employees/department/:department',(req,res)=>{
  let department=req.params.department
  let filteredEmployees=employees.filter(filterByDepartment(department))
  res.json(filteredEmployees)
})

/**
Question 2:

Write an Express code snippet to filter bikes by mileage greater than a specified value.

Instructions:

Define an endpoint/bikes/mileage/:minMileage using the get method.

Implement a function filterByMileage that returns true if the bike's mileage is greater than the specified value.

Inside the endpoint, parse the minti leage parameter from the request and use it to filter the bikes.

Send the filtered bikes as a JSON response.

Given Data:

 (make: "Hero", model: "Splendor", mileage: 80), { make: "Bajaj", model: "Pulsar", mileage: 60), (make: "TVS", model: "Apache", mileage: 70 )

API Call: <http://localhost:3000/bikes/mileage/70>

Expected Output:

{"make": "Hero", "sadal"s "Splendor", "mileage": 80)
*/

let bikes=[
  { make: "Hero", model: "Splendor", mileage: 80},
  { make: "Bajaj", model: "Pulsar", mileage: 60},
  { make: "TVS", model: "Apache", mileage: 70}
]
function filterByMileage(minMileage){
  return function(bike){
    return bike.mileage > minMileage
  }
}
app.get('/bikes/mileage/:minMileage',(req,res)=>{
  let minMileage=parseFloat(req.params.minMileage)
  let filteredBikes=bikes.filter(filterByMileage(minMileage))
  res.json(filteredBikes)
})

/**
Question 3:

Write an Express code snippet to filter bikes by a specific make.

Instructions:

Define an endpoint /bikes/make/:make using the get method.

Implement a function filterByMake that returns true if the bike's make matches the specified value.

Inside the endpoint, extract the make parameter from the request and use it to filter the bikes.

Send the filtered bikes as a JSON response.

Given Data:[
  { make: "Hero", model: "Splendor", mileage: 80},
  { make: "Bajaj", model: "Pulsar", mileage: 60},
  { make: "TVS", model: "Apache", mileage: 70}
]

API Call: <http://localhost:3000/bikes/make/Hero>
*/
function filterByMake(make){
  return function(bike){
    return bike.make === make
  }
}

app.get('/bikes/make/:make',(req,res)=>{
  let make=req.params.make
  let filteredBikes=bikes.filter(filterByMake(make))
  res.json(filteredBikes)
})

/**
Question 4:

Write an Express code snippet to filter songs by rating higher than a specified value.

Instructions:

Define an endpoint/songs/rating/minRating using the get method.

Implement a function filterByRating that returns true if the song's rating is higher than the specified value.

Inside the endpoint, parse the minRating parameter from the request and use it to filter the songs.

Send the filtered songs as a JSON response.

Given Data:

{title: "Tum Hi Ho", genre: "Romantic", rating: 4},

{title: "Senorita", genre: "Pop", rating: 5), {title: "Dil Chahta Hal", genre: "Bollywood", rating: 3)

1

API Call: <http://localhost:3000/songs/rating/4>

Expected Output:

{"title": "Senorita", "genre": "Pop", "rating": 5 }
*/

let songs=[
  {title: "Tum Hi Ho", genre: "Romantic", rating: 4},
  {title: "Senorita", genre: "Pop", rating: 5},
  {title: "Dil Chahta Hal", genre: "Bollywood", rating: 3}
]
function filterByRating(minRating){
  return function(song){
    return song.rating > minRating
  }
}
app.get('/songs/rating/:minRating',(req,res)=>{
  let minRating=parseFloat(req.params.minRating)
  let filteredSongs=songs.filter(filterByRating(minRating))
  res.json(filteredSongs)
})
/**
Question 5:

Write an Express code snippet to filter songs by a specific genre.

Instructions:

Define an endpoint/songs/genre/: genre using the get method.

Implement a function filterByGenre that returns true if the song's genre matches the specified value.

Inside the endpoint, extract the genre parameter from the request and use it to filter the songs.

Send the filtered songs as a JSON response.

Given Data:

D

{title: "Tum Hi Ho", genre: "Romantic", rating: 4),

{title: "Senorita", genre: "Pop", rating: 5),

{title: "Dil Chahta Hai", genre: "Bollywood", rating: 3}



API Call: <http://localhost:3000/songs/genre/Romantic>

Expected Outpu
*/

function filterByGenre(genre){
  return function(song){
    return song.genre === genre
  }
}
app.get('/songs/genre/:genre',(req,res)=>{
  let genre=req.params.genre
  let filteredSongs=songs.filter(filterByGenre(genre))
  res.json(filteredSongs)
})

/**
Question 6:

Write an Express code snippet to filter tasks by a specific status.

Instructions:

Define an endpoint/tasks/status/: status using the get method.

Implement a function filterByStatus that returns true if the task's status matches the specified value.

Inside the endpoint, extract the status parameter from the request and use it to filter the tasks.

Send the filtered tasks as a JSON response.

Given Data:

[

{ taskId: 1, taskName: "Prepare Presentation", status: "pending" },

(taskId: 2, taskName: "Attend Meeting", status: "in-progress" },

{ taskId: 3, taskName: "Submit Report", status: "completed" }

API Call: <http://localhost:3000/tasks/status/completed>

Expected Output:

{"taskId": 3, "taskName": "Submit Report", "status": "completed" }
*/

let tasks=[
  { taskId: 1, taskName: "Prepare Presentation", status: "pending" },
  { taskId: 2, taskName: "Attend Meeting", status: "in-progress" },
  { taskId: 3, taskName: "Submit Report", status: "completed" }
]

function filterByStatus(status){
  return function(task){
    return task.status === status
  }
}

app.get('/tasks/status/:status',(req,res)=>{
  let status=req.params.status
  let filteredTasks=tasks.filter(filterByStatus(status))
  res.json(filteredTasks)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})