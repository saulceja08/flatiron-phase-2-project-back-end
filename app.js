// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3001; // Use the environment variable PORT if provided, otherwise use port 3001

// Define your routes and middleware here
// For this example, we'll use a simple "Hello, World!" route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
