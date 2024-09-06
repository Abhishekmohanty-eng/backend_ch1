let express= require("express")
let app=express()
let port=3000


/**
Question 1: Filter Products by Category

1. Define the function filterByCategory to return only the products in a specific category from an array of products.

2. Declare a GET endpoint/products/category/:category to use the filterByCategory function.

3. Declare a variable category to take the input from query parameters

Data:

[

{ "name": "Laptop", "price": 58008, "category": "Electronics" },

{"name": "Mobile", "price": 20000, "category": "Electronics" },

{"name": "Shirt", "price": 1500, "category": "Apparel"),

{"name": "Mixer Grinder", "price": 4000, "category": "Home Appliances"}

API Call: http://localhost:3000/products/category/Electronics

Expected Output:

{"name": "Laptop", "price": 50000, "category": "Electronics"),

{"name": "Mobile", "price": 20000, "category": "Electronics"

1
*/

const products = [
  { "name": "Laptop", "price": 58008, "category": "Electronics" },
  { "name": "Mobile", "price": 20000, "category": "Electronics" },
  { "name": "Shirt", "price": 1500, "category": "Apparel" },
  { "name": "Mixer Grinder", "price": 4000, "category": "Home Appliances" }
];

function filterByCategory(category, products){
  return  products.category === category
}

app.get('/products/category/:category',(req,res)=>{
  let category=req.params.category
  let result=products.filter(products=>filterByCategory(category,products))
  res.json(result)
})

/**
Question 2: Filter Cars by Mileage

1. Define the function filterByMileage to return only the cars with mileage less than a specified value from an array of cars.

2. Declare a GET endpoint/cars/mileage/:maxMileage to use the filterByMileage function.

3. Declare a variable maxMileage to take the input from query parameters

Data:

("make": "Maruti", "model": "Swift", "nileage: 15000), ("make": "Hyundai", "model": "120", "mileage": 25000), {"make": "Tata", "nodel": "Nexon", "mileage": 30000}

API Call: http://localhost:3000/cars/mileage/20000

Expected Output:

{"make": "Marutt", "nodel": "Swift", "aileage": 15000 }
*/

const cars = [
  { "make": "Maruti", "model": "Swift", "mileage": 15000 },
  { "make": "Hyundai", "model": "i20", "mileage": 25000 },
  { "make": "Tata", "model": "Nexon", "mileage": 30000 }
];

function filterByMileage(maxMileage, car) {
  return car.mileage < maxMileage;
}

app.get('/cars/mileage/:maxMileage', (req, res) => {
  let maxMileage = parseInt(req.params.maxMileage, 10);
  let result = cars.filter(car => filterByMileage(maxMileage, car));
  res.json(result);
});

/*
Question 3: Filter Movies by Rating

1. Define the function filterByRating to return only the movies with a rating higher than a specified value from an array of movies.

2. Declare a GET endpoint/movies/rating/:minRating to use the filterByRating function.

3. Declare a variable minRating to take the input from query parameters

Data:

{"title": "3 Idiots", "genre": "Comedy", "rating": 9),

{"title": "Dangal", "genre": "Drama", "rating": 10 }, {"title": "Bahubali", "genre": "Action", "rating": 8}

API Call: http://localhost:3000/movies/rating/8

Expected Output:

{"title": "3 Idiots", "genre": "Comedy", "rating": 9),

{"title": "Dangal", "genre": "Drama", "rating": 10 }
*/

const movies =[

  { "title": "3 Idiots", "genre": "Comedy", "rating": 9 },
  { "title": "Dangal", "genre": "Drama", "rating": 10 },
  { "title": "Bahubali", "genre": "Action", "rating": 8 }
]

function filterByRating(minRating, movie){
  return movie.rating > minRating
}

app.get('/movies/rating/:minRating',(req,res)=>{
  let minRating=parseFloat(req.params.minRating)
  let result=movies.filter(movie=>filterByRating(minRating,movie))
  res.json(result)
})

/**
Question 4: Filter Orders by Status

1. Define the function filterByStatus to return only the orders with a specific status from an array of orders.

2. Declare a GET endpoint/orders/status/: status to use the filterByStatus function.

3. Declare a variable status to take the input from query parameters

Data:

{ "orderId": 1, "customerName": "Rahul", "status": "shipped"},

{ "orderId": 2, "customerName": "Sita", "status": "pending" },

{"orderId": 3, "customerfiame": "Amit", "status": "shipped" }

1

API Call: http://localhost:3000/orders/status/shipped

Expected Output:

{ "orderId": 1, "customerName": "Rahul", "status": "shipped"), {"orderId": 3, "customerName": "Amit", "status": "shipped" }
*/

const orders =[
  { "orderId": 1, "customerName": "Rahul", "status": "shipped" },
  { "orderId": 2, "customerName": "Sita", "status": "pending" },
  { "orderId": 3, "customerName": "Amit", "status": "shipped" }
]

function filterByStatus(status, order){
  return order.status === status
}
app.get('/orders/status/:status',(req,res)=>{
  let status=req.params.status
  let result=orders.filter(order=>filterByStatus(status,order))
  res.json(result)
})


app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})