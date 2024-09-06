let express= require("express")
let app=express()
let port=3000
  
/**
Question 1: Sort Ages in Ascending Order

Define the function sortAgesAscending that sorts an array of ages in ascending order.

Declare a GET endpoint /ages/sort-ascending to use the sortAgesAscending function.

Data: [25, 30, 18, 22, 27]

API Call: http://localhost:3000/ages/sort-ascending

Expected Output: [18, 22, 25, 27, 30]
*/

let ages=[25, 30, 18, 22, 27]

function sortAgesAscending(ages){
  return ages.sort((a,b)=>a-b)
}
app.get('/ages/sort-ascending',(req,res)=>{
  let sortedAges=sortAgesAscending(ages)
  res.json(sortedAges)
})

/**
Question 2: Sort Ages in Descending Order

Define the function sortAgesDescending that sorts an array of ages in ascending order.

Declare a GET endpoint /ages/sort-descending to use the sortAgesDescending function.

Data: [25, 30, 18, 22, 27]

API Call: http://localhost:3000/ages/sort-descending

Expected Output: [30, 27, 25, 22, 18]
*/

function sortAgesDescending(ages){
  return ages.sort((a,b)=>b-a)
}
app.get('/ages/sort-descending',(req,res)=>{
  let sortedAges=sortAgesDescending(ages)
  res.json(sortedAges)
})

/**
Question 3: Sort Students by Marks in Descending Order

Define the function sortStudentsByMarksDescending that sorts an array of students by marks in descending order.

Declare a GET endpoint /students/sort-by-marks-descending to use the sortStudentsByMarksDescending function.*/

const students = [
  { name: "Alice", RollNo: 1, marks: 85 },
  { name: "Bob", RollNo: 2, marks: 92 },
  { name: "Charlie", RollNo: 3, marks: 78 },
  { name: "David", RollNo: 4, marks: 88 },
  { name: "Eve", RollNo: 5, marks: 95 }
];
function sortStudentsByMarksDescending(students){
  return students.sort((a,b)=>b.marks-a.marks)
}
app.get('/students/sort-by-marks-descending',(req,res)=>{
  let sortedStudents=sortStudentsByMarksDescending(students)
  res.json(sortedStudents)
})

/**
Question 4: Sort Cars by Mileage in Descending Order

Define the function sortCarsByMileageDescending that sorts an array of cars by mileage in descending order.

Declare a GET endpoint /cars/sort-by-mileage-descending to use the sortCarsByMileageDescending function.
*/

const cars =[
  { make: "Toyota", model: "Camry", mileage: 15000 },
  { make: "Honda", model: "Civic", mileage: 12000 },
  { make: "Ford", model: "Mustang", mileage: 18000 },
  { make: "Chevrolet", model: "Corvette", mileage: 20000 }
]

function sortCarsByMileageDescending(cars){
  return cars.sort((a,b)=>b.mileage-a.mileage)
}
app.get('/cars/sort-by-mileage-descending',(req,res)=>{
  let sortedCars=sortCarsByMileageDescending(cars)
  res.json(sortedCars)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})