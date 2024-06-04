// app.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
const { Middleware } = require('./middleware/index');
const PORT = process.env.PORT || 3000;

console.log(Middleware)

// Middleware for parsing JSON bodies
app.use(express.json());

// Route for translation
app.post('/translate', Middleware.post.translate); // Using Middleware.post.translate as middleware


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); 
});
