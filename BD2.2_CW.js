let express= require("express")
let app=express()
let port=3000

/**
Question 1: Return Only the Even Numbers

Define the function filterEvenNumbers to return only the even numbers from an array.

Declare a GET endpoint /even-numbers to use the filterEvenNumbers function.

Given Data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

API Call: http://localhost:3000/even-numbers

Expected Output: [2, 4, 6, 8, 10]
*/
let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function filterEvenNumbers(numbers){
 return numbers.filter(number=>number%2===0)
}

app.get('/even-numbers',(req,res)=>{
 let result=filterEvenNumbers(numbers)
  res.send(result)
})

/**
Question 2: Return Only the Ages Greater Than 18

Define the function filterAges to return only the ages greater than 18 from an array.

Declare a GET endpoint /adult-ages to use the filterAges function.

Given Data: [10, 20, 30, 15, 17, 25]

API Call: http://localhost:3000/adult-ages

Expected Output: [ 20, 30, 25 ]
*/
let ages=[10, 20, 30, 15, 17, 25]
function filterAges(ages){
  return ages.filter(age=>age>18)
}
app.get('/adult-ages',(req,res)=>{
  let result=filterAges(ages)
  res.send(result)
})

/**
Question 3: Return Only the Words Longer Than 5 Characters

Define the function filterLongWords to return only the words longer than 5 characters from an array of words.

Declare a GET endpoint /long-words to use the filterLongWords function.

Given Data: ['apple', 'banana', 'cherry', 'date', 'fig', 'grape']

API Call: http://localhost:3000/long-words

Expected Output: ['banana', 'cherry']
*/
let words=['apple', 'banana', 'cherry', 'date', 'fig', 'grape']
function filterLongWords(words){
  return words.filter(word=>word.length>5)
}
app.get('/long-words',(req,res)=>{
  let result=filterLongWords(words)
  res.send(result)
})

/**
Question 4: Return Only the Files Smaller Than a Certain Size

Define the function filterSmallFiles to return only the files smaller than a certain size from an array of file sizes

Declare a GET endpoint /small-files to use the filterSmallFiles function.

Declare a variable named filterParam to take the input from query parameters.

The size filter parameter should be read from the query string.

Given Data: [50, 200, 75, 120, 30, 90, 150]

API Call: http://localhost:3000/small-files?filterParam=100

Expected Output: [50, 75, 30, 90]
*/

let fileSizes=[50, 200, 75, 120, 30, 90, 150]
function filterSmallFiles(fileSizes,filterParam){
  return fileSizes.filter(fileSize=>fileSize<filterParam)

}

app.get( '/small-files',(req,res)=>{
  let filterParam=parseFloat(req.query.filterParam)
  let result=filterSmallFiles(fileSizes,filterParam)
  res.send(result)
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})