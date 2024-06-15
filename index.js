const express = require('express');
const session = require('express-session');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging
app.use(morgan('dev'));

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware for session handling
app.use(session({
  secret: 'your-secret-key', // Replace with a strong secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Set secure to true if using HTTPS
}));

// A simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
