
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000; // You can change this port to any other available port

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost', // Replace with your MySQL host
  user: 'root', // Replace with your MySQL username
  password: 'India@2023', // Replace with your MySQL password
  database: 'registration_form_db', // Replace with your database name
});

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle form submission and save data to the database
app.post('/api/register', (req, res) => {
  const { fullName, email, password } = req.body;

  // Create a new user in the database
  const query = 'INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)';
  pool.query(query, [fullName, email, password], (error, results) => {
    if (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Failed to register user.' });
    } else {
      console.log('User registered:', results);
      res.status(201).json({ message: 'User registered successfully!' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
