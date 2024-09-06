
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;

// Sample data
let watchList = [
  {
    videoId: 1,
    title: 'JavaScript Tutorial',
    watched: false,
    url: 'https://youtu.be/shorturl1',
  },
  {
    videoId: 2,
    title: 'Node.js Basics',
    watched: true,
    url: 'https://youtu.be/shorturl2',
  },
  {
    videoId: 3,
    title: 'React.js Guide',
    watched: false,
    url: 'https://youtu.be/shorturl3',
  },
];

// Function to update the watched status of a video by ID
function updateWatchedStatusById(videoId, watched) {
  const video = watchList.find(video => video.videoId === parseInt(videoId));
  if (video) {
    video.watched = watched === 'true';
  }
  return watchList;
}

// Function to update the watched status of all videos
function updateAllVideosWatchedStatus(watched) {
  watchList.forEach(video => {
    video.watched = watched === 'true';
  });
  return watchList;
}

// Function to delete a video by ID
function shouldDeleteById(videoId) {
  watchList = watchList.filter(video => video.videoId !== parseInt(videoId));
  return watchList;
}

// Function to delete watched videos
function deleteWatchedVideos() {
  watchList = watchList.filter(video => !video.watched);
  return watchList;
}

// Endpoint to update the watched status of a video
app.get('/watchlist/update', (req, res) => {
  const { videoId, watched } = req.query;
  const updatedWatchList = updateWatchedStatusById(videoId, watched);
  res.json(updatedWatchList);
});

// Endpoint to update the watched status of all videos
app.get('/watchlist/update-all', (req, res) => {
  const { watched } = req.query;
  const updatedWatchList = updateAllVideosWatchedStatus(watched);
  res.json(updatedWatchList);
});

// Endpoint to delete a video by ID
app.get('/watchlist/delete', (req, res) => {
  const { videoId } = req.query;
  const updatedWatchList = shouldDeleteById(videoId);
  res.json(updatedWatchList);
});

// Endpoint to delete watched videos
app.get('/watchlist/delete-watched', (req, res) => {
  const updatedWatchList = deleteWatchedVideos();
  res.json(updatedWatchList);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
