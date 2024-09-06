const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;

// Sample data
let watchList = [
  { videoId: 1, title: 'JavaScript Tutorial', watched: false, url: 'https://youtu.be/shorturl1' },
  { videoId: 2, title: 'Node.js Basics', watched: true, url: 'https://youtu.be/shorturl2' },
  { videoId: 3, title: 'React.js Guide', watched: false, url: 'https://youtu.be/shorturl3' }
];

let tasks = [
  { taskId: 1, title: 'Buy groceries', completed: false },
  { taskId: 2, title: 'Walk the dog', completed: false },
  { taskId: 3, title: 'Do laundry', completed: true }
];

let books = [
  { bookId: 1, title: '1984', available: true },
  { bookId: 2, title: 'Brave New World', available: true },
  { bookId: 3, title: 'Fahrenheit 451', available: false }
];

// Function to delete unwatched videos
function deleteUnwatchedVideos() {
  watchList = watchList.filter(video => video.watched);
  return watchList;
}

// Function to mark video as favorite by ID
function markVideoAsFavorite(videoId, isFavorite) {
  const video = watchList.find(video => video.videoId === parseInt(videoId));
  if (video) {
    video.isFavorite = isFavorite === 'true';
  }
  return watchList;
}

// Function to update task status by ID
function updateTaskStatusById(taskId, completed) {
  const task = tasks.find(task => task.taskId === parseInt(taskId));
  if (task) {
    task.completed = completed === 'true';
  }
  return tasks;
}

// Function to remove completed tasks
function removeCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
  return tasks;
}

// Function to update book availability by ID
function updateBookAvailabilityById(bookId, available) {
  const book = books.find(book => book.bookId === parseInt(bookId));
  if (book) {
    book.available = available === 'true';
  }
  return books;
}

// Endpoint to delete unwatched videos
app.get('/watchlist/delete-unwatched', (req, res) => {
  const updatedWatchList = deleteUnwatchedVideos();
  res.json(updatedWatchList);
});

// Endpoint to mark video as favorite
app.get('/watchlist/favorite', (req, res) => {
  const { videoId, isFavorite } = req.query;
  const updatedWatchList = markVideoAsFavorite(videoId, isFavorite);
  res.json(updatedWatchList);
});

// Endpoint to update task status by ID
app.get('/tasks/update', (req, res) => {
  const { taskId, completed } = req.query;
  const updatedTasks = updateTaskStatusById(taskId, completed);
  res.json(updatedTasks);
});

// Endpoint to remove completed tasks
app.get('/tasks/remove-completed', (req, res) => {
  const updatedTasks = removeCompletedTasks();
  res.json(updatedTasks);
});

// Endpoint to update book availability by ID
app.get('/library/update', (req, res) => {
  const { bookId, available } = req.query;
  const updatedBooks = updateBookAvailabilityById(bookId, available);
  res.json(updatedBooks);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
