let express= require("express")
let app=express()
let port=3000

/**
Exercise 1: Filter Prime Numbers

Define the function filterPrimeNumbers to return only the prime numbers from an array.

Declare a GET endpoint /prime-numbers to use the filterPrimeNumbers function.

Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

Sample Endpoint: http://localhost:3000/prime-numbers

Expected Output: [2, 3, 5, 7, 11]
*/
function filterPrimeNumbers(numbers){
  let primeNumbers=[]
  for(let i=0;i<numbers.length;i++){
    let isPrime=true
    for(let j=2;j<numbers[i];j++){
      if(numbers[i]%j==0){
        isPrime=false
        break
      }
    }
    if(isPrime){
      primeNumbers.push(numbers[i])
    }
  }
  return primeNumbers
}

app.get('/prime-numbers',(req,res)=>{
  let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  let primeNumbers=filterPrimeNumbers(numbers)
  res.send(primeNumbers)
})
/**
Exercise 2: Filter Positive Numbers

Define the function filterPositiveNumbers to return only the positive numbers from an array.

Declare a GET endpoint /positive-numbers to use the filterPositiveNumbers function.

Given Data: [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

Sample Endpoint: http://localhost:3000/positive-numbers

Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
function filterPositiveNumbers(numbers){
  let positiveNumbers=[]
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]>0){
      positiveNumbers.push(numbers[i])
    }
  }
  return positiveNumbers
}
app.get('/positive-numbers',(req,res)=>{
  let numbers=[-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  let positiveNumbers=filterPositiveNumbers(numbers)
  res.send(positiveNumbers)
})
/**
Exercise 3: Filter Negative Numbers

Define the function filterNegativeNumbers to return only the negative numbers from an array.

Declare a GET endpoint /negative-numbers to use the filterNegativeNumbers function.

Given Data: [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

Sample Endpoint: http://localhost:3000/negative-numbers

Expected Output: [-10, -5]
*/
function filterNegativeNumbers(numbers){
  let negativeNumbers=[]
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]<0){
      negativeNumbers.push(numbers[i])
    }
  }
  return negativeNumbers
}
app.get('/negative-numbers',(req,res)=>{
  let numbers=[-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  let negativeNumbers=filterNegativeNumbers(numbers)
  res.send(negativeNumbers)
})

/**
Exercise 4: Filter Odd Numbers

Define the function filterOddNumbers to return only the odd numbers from an array.

Declare a GET endpoint /odd-numbers to use the filterOddNumbers function.

Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

Sample Endpoint: http://localhost:3000/odd-numbers

Expected Output: [1, 3, 5, 7, 9]
*/
function filterOddNumbers(numbers){
  let oddNumbers=[]
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2!=0){
      oddNumbers.push(numbers[i])
    }
  }
  return oddNumbers
}
app.get('/odd-numbers',(req,res)=>{
  let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  let oddNumbers=filterOddNumbers(numbers)
  res.send(oddNumbers)
})
/**
Exercise 5: Filter Numbers Greater Than a Given Value

Define the function filterNumbersGreaterThan to return only the numbers greater than a specified value (read from query).

Declare a GET endpoint /numbers-greater-than to use the filterNumbersGreaterThan function.

Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

Sample Endpoint: http://localhost:3000/numbers-greater-than?value=5

Expected Output: [6, 7, 8, 9, 10]
*/
function filterNumbersGreaterThan(numbers,value){
  let numbersGreaterThan=[]
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]>value){
      numbersGreaterThan.push(numbers[i])
    }
  }
  return numbersGreaterThan
}

app.get('/numbers-greater-than',(req,res)=>{
  let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  let value=parseFloat(req.query.value)
  let numbersGreaterThan=filterNumbersGreaterThan(numbers,value)
  res.send(numbersGreaterThan)
})
/**
Exercise 6: Filter Numbers Less Than a Given Value

Define the function filterNumbersLessThan to return only the numbers less than a specified value (read from query).

Declare a GET endpoint /numbers-less-than to use the filterNumbersLessThan function.

Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

Sample Endpoint: http://localhost:3000/numbers-less-than?value=5

Expected Output: [1, 2, 3, 4]
*/

function filterNumbersLessThan(numbers,value){
  let numbersLessThan=[]
  for(let i=0;i<numbers.length;i++){
    if(numbers[i]<value){
      numbersLessThan.push(numbers[i])
    }
  }
  return numbersLessThan
}

app.get('/numbers-less-than',(req,res)=>{
  let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
  let value=parseFloat(req.query.value)
  let numbersLessThan=filterNumbersLessThan(numbers,value)
  res.send(numbersLessThan)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})