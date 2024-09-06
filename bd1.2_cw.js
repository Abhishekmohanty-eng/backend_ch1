let express=require('express');
let app=express();
let port=3000;



/**
Question 1:

Create an endpoint that takes distance1 and distance2 as query parameters and returns the total distance covered by adding two trips.

Write an Express code snippet.

Declare an endpoint total-distance using the get keyword.

Declare two variables distance1 and distance2 to take the inputs.

Parse the inputs as floats and add them to calculate the totalDistance.

Return the result as a string.

API Call: <http://localhost:3000/total-distance?distance1=5.5&distance2=10.2>

Expected Output: 15.7
*/  
app.get( '/total-distance',(req,res)=>{
  try {
  let distance1=parseFloat(req.query.distance1);
  let distance2=parseFloat(req.query.distance2);
   let totalDistance=distance1+distance2;
  res.send(totalDistance.toString());
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
})

/*
Question 2:

Create an endpoint that takes time1, time2, and time3 as query parameters and returns the total time spent on multiple activities.

Write an Express code snippet.

Declare an endpoint total-time using the get keyword.

Declare three variables time1, time2, and time3 to take the inputs.

Parse the inputs as floats and add them to calculate the totalTime.

Return the result as a string.

API Call: <http://localhost:3000/total-time?time1=1.5&time2=2.0&time3=0.5>

Expected Output: 4.0*/


app.get('/total-time', (req, res) =>{
  try{
  let time1=parseFloat(req.query.time1);
  let time2=parseFloat(req.query.time2);
  let time3=parseFloat(req.query.time3);

  let totalTime=time1+time2+time3;
  res.send(totalTime.toString())
  }catch(error){
    res.status(400).send({error:error.message})
  }
})

/*
Question 3:

Create an endpoint that takes totalDistance and totalTime as query parameters and returns the average speed.

Write an Express code snippet.

Declare an endpoint average-speed using the get keyword.

Declare two variables totalDistance and totalTime to take the inputs.

Parse the inputs as floats and calculate the averageSpeed by dividing the total distance by the total time.

Return the result as a string.

API Call: <http://localhost:3000/average-speed?totalDistance=150&totalTime=3>

Expected Output: 50
*/

app.get('/average-speed',(req,res)=>{
  try{
    let totalDistance=parseFloat(req.query.totalDistance);
    let totalTime=parseFloat(req.query.totalTime);
   
    let averageSpeed=totalDistance/totalTime;
    res.send(averageSpeed.toString())
    
  }catch(error){
    res.status(400).send({error:error.massage})
  }
  
})
/*
Question 4:

Create an endpoint that takes distance and speed as query parameters and returns the estimated time of arrival (ETA).

Write an Express code snippet.

Declare an endpoint eta using the get keyword.

Declare two variables distance and speed to take the inputs.

Parse the inputs as floats and calculate the eta by dividing the distance by the speed.

Return the result as a string.

API Call: <http://localhost:3000/eta?distance=120&speed=60>

Expected Output: 2
*/
app.get('/eta',(req,res)=>{
  try{
  let distance=parseFloat(req.query.distance);
  let speed=parseFloat(req.query.speed);
  let eta=distance/speed;
  res.send(eta.toString())
  }catch(error){
    res.status(400).send({error:error.message})
  }
})
/*
Question 5:

Create an endpoint that takes duration1, duration2, and caloriesPerMinute as query parameters and returns the total calories burned based on activity duration and calories burned per minute.

Write an Express code snippet.

Declare an endpoint total-calories using the get keyword.

Declare three variables duration1, duration2, and caloriesPerMinute to take the inputs.

Parse the inputs as floats and calculate the totalCalories by multiplying the sum of durations with calories burned per minute.

Return the result as a string.

API Call: <http://localhost:3000/total-calories?duration1=30&duration2=45&caloriesPerMinute=10>

Expected Output: 750
*/
app.get('/total-calories',(req,res)=>{
  try{
    let duration1=parseFloat(req.query.duration1)
    let duration2=parseFloat(req.query.duration2)
    let caloriesPerMinute=parseFloat(req.query.caloriesPerMinute)
    let totalCalories=(duration1+duration2)*caloriesPerMinute
  res.send(totalCalories.toString())
  }catch(error){
    res.status(400).send({error:error.message})
  }
})
/*
Question 6:

Create an endpoint that takes principal, rate, and time as query parameters and returns the interest earned on a savings account.

Write an Express code snippet.

Declare an endpoint interest-earned using the get keyword.

Declare three variables principal, rate, and time to take the inputs.

Parse the inputs as floats and calculate the interestEarned by using the formula (principal rate time) / 100.

Return the result as a string.

API Call: <http://localhost:3000/interest-earned?principal=1000&rate=5&time=2>

Expected Output: 100
*/
app.get('/interest-earned',(req,res)=>{
  try{
    let principal=parseFloat(req.query.principal)
    let rate=parseFloat(req.query.rate)
    let time=parseFloat(req.query.time)
    let interestEarned=(principal*rate*time)/100
    res.send(interestEarned.toString())
  }catch(error){
    res.status(400).send({error:error.message})
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});