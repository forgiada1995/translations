// // app.js

console.log('Starting the application...');

require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./routes/index'); 
const { Middleware } = require('./middleware/index');
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.post('/translate', Middleware.post.translate);

// routes
app.use('/', routes);

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
