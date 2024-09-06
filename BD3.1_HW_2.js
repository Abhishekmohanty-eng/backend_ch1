let express= require("express")
let app=express()
let port=3000
/**

*/

const cors = require('cors');


app.use(cors());

// Sample Data
let cartItems = [
  { item: 'Book', price: 30 },
  { item: 'Pen', price: 5 },
  { item: 'Notebook', price: 50 },
  { item: 'Bag', price: 125 }
];

let students = [
  { name: 'John', grade: 'A' },
  { name: 'Jane', grade: 'A' },
  { name: 'Jack', grade: 'B' },
  { name: 'Jill', grade: 'C' }
];

let temperatures = [0, 20, 30, 100];

let student_scores = [
  { name: 'John', score: 85 },
  { name: 'Jane', score: 90 },
  { name: 'Jack', score: 70 },
  { name: 'Jill', score: 60 }
];



// Exercise 1: Calculate Total Price of Items in a Cart
app.get('/cart/total', (req, res) => {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total += item.price, 0);
  };

  const totalPrice = calculateTotalPrice();
  res.json({ totalPrice: totalPrice });
});

// Exercise 2: Filter Students by Grade
app.get('/students/filter', (req, res) => {
  const grade = req.query.grade;

  const filterStudentsByGrade = (grade) => {
    return students.filter(student => student.grade === grade);
  };

  const filteredStudents = filterStudentsByGrade(grade);
  res.json({ students: filteredStudents });
});

//
/**
Exercise 3: Convert Temperatures from Celsius to Fahrenheit

Create an endpoint /temperatures/convert that accepts an array of temperatures from the request parameters.

Define the variable name for the temperatures as temperatures.

Write a function convertCelsiusToFahrenheit to convert each temperature from Celsius to Fahrenheit.

Respond with the converted temperatures.

API Call:

<http://localhost:3000/temperatures/convert>

Expected Output:

{
  convertedTemperatures: [32, 68, 86, 212]
}
*/
// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(temperatures) {
  return temperatures.map(temp => Math.round((temp * 9 / 5) + 32));
}

// Endpoint to convert temperatures from Celsius to Fahrenheit
app.get('/temperatures/convert', (req, res) => {
  const temperaturesParam = req.query.temperatures;
  if (!temperaturesParam) {
    return res.status(400).json({ error: 'Temperatures query parameter is required' });
  }

  const temperatures = temperaturesParam.split(',').map(temp => parseFloat(temp));
  const convertedTemperatures = convertCelsiusToFahrenheit(temperatures);
  res.json({ convertedTemperatures });
});


/**Exercise 4: Calculate Average Score of Students

Create an endpoint /students/average-score that accepts an array of student_scores & calculates the average score of students.

Define the function calculateAverageScore to calculate the average score.

Respond with the average score.

API Call:

<http://localhost:3000/students/average-score>

Expected Output:

{
  averageScore: 76.25
} */
function calculateAverageScore(student_scores){
  return student_scores.reduce((total,student)=>total+=student.score,0)/student_scores.length
}
app.get('/students/average-score',(req,res)=>{
  const averageScore=calculateAverageScore(student_scores)
  res.json({averageScore:averageScore})
})

/**
Exercise 5: Count Words in a Sentence

Create an endpoint /sentence/count-words that accepts a sentence from the request parameters.

Define the variable name for the sentence as sentence.

Write a function countWords to count the words in the given sentence.

Respond with the word count

API Call:

<http://localhost:3000/sentence/count-words>

Expected Output:

{
  wordCount: 9
}
*/
let sentence = 'The quick brown fox jumps over the lazy dog';
function countWords(sentence ){
  let wordcount=1;
  for(let i=0;i<sentence.length;i++){
    if(sentence[i]===" "){
      wordcount = wordcount+1
    }
  }
  return wordcount
}
app.get('/sentence/count-words',(req,res)=>{
  let wordcount=countWords(sentence)
  res.json({wordcount:wordcount})
})
        
app.listen(port,()=>{
  console.log(`Server running at http://localhost:${port}`)
})