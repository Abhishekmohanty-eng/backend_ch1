let express = require('express');
let app = express();
let port = 3000;

/**
Exercise 1: Multiply All Numbers in an Array

Create an endpoint /numbers/multiply that accepts a number from the request parameters.

Define the variable name for the number as multiplier.

Write a function multiplyNumber to multiply all elements in an array by the given number.

Respond with the updated array

API Call:

<http://localhost:3000/numbers/multiply?multiplier=2>


Expected Output:

{
  'result': [2, 4, 6, 8, 10]
}
*/
function multiplyNumber(numbers, multiplier) {
  return numbers.map(number => number * multiplier);
}
app.get('/numbers/multiply', (req, res) =>{
  let multiplier = parseFloat(req.query.multiplier);
  let numbers = [1, 2, 3, 4, 5];
  let result = multiplyNumber(numbers, multiplier);
  res.json({result: result});
})

/**
Exercise 2: Concatenate Strings

Create an endpoint /strings/concat that accepts a string from the request parameters.

Define the variable name for the string as suffix.

Write a function concatStrings to concatenate the given string to all elements in an array.

Respond with the updated array.

API Call:

<http://localhost:3000/strings/concat?suffix=!


Expected Output:

{
  'result': ['hello!', 'world!', 'javascript!', 'node!']
}

*/
function concatStrings(strings, suffix) {
  return strings.map(string => string + suffix);
}

app.get('/strings/concat', (req, res) =>{
  let suffix = req.query.suffix;
  let strings = ['hello', 'world', 'javascript', 'node'];
  let result = concatStrings(strings, suffix);
  res.json({result: result});
})

/*
Exercise 3: Remove All Odd Numbers from an Array

Create an endpoint /numbers/remove-odds that removes all odd numbers from the array.

Define the function removeOddNumbers to filter out odd numbers.

Respond with the updated array.

API Call:

<http://localhost:3000/numbers/remove-odds>


Expected Output:

{
  'result': [2, 4]
}
*/

function removeOddNumbers(numbers){
  return numbers.filter(number => number % 2 === 0);
}

app.get('/numbers/remove-odds', (req, res) =>{
  let numbers = [1, 2, 3, 4, 5];
  let result = removeOddNumbers(numbers);
  res.json({result: result});
})

/**
Exercise 4: Join All Strings in an Array

Create an endpoint /strings/join that join all strings in the array.

Define the function joinStrings to join each string in the array.

Respond with the updated array.

API Call:

<http://localhost:3000/strings/join>


Expected Output:

{
  'result': 'hello world javascript node'
}

*/

function joinStrings(strings){
  return strings.join(' ');
}
app.get('/strings/join', (req, res) =>{
  let strings = ['hello', 'world', 'javascript', 'node'];
  let result = joinStrings(strings);
  res.json({result: result});
})

/**
Exercise 5: Double All Numbers in an Array

Create an endpoint /numbers/double that doubles all numbers in the array.

Define the function doubleNumbers to double each number in the array.

Respond with the updated array.

API Call:

<http://localhost:3000/numbers/double>


Expected Output:

{
  result: [2, 4, 6, 8, 10]
}
*/
function doubleNumbers(numbers){
  return numbers.map(number => number * 2);
}
app.get('/numbers/double',(req,res)=>{
  let numbers = [1, 2, 3, 4, 5];
  let result = doubleNumbers(numbers);
  res.json({result: result});
})
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})