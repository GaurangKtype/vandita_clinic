const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse incoming request bodies
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Gr8gaurang@gk2720', // Add your MySQL password here
    database: 'users_db'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// API Endpoint for Sign-Up
app.post('/signin', async (req, res) => {
    const { name, email, password, phone_number } = req.body;

    if (!name || !email || !password || !phone_number) {
        return res.status(400).send('All fields are required.');
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (name, email, password, phone_number) VALUES (?, ?, ?, ?)';
        db.query(query, [name, email, hashedPassword, phone_number], (err, result) => {
            if (err) {
                if (err.code === 'ER_DUP_ENTRY') {
                    return res.status(400).send('Email already exists.');
                }
                return res.status(500).send('Error saving user information.');
            }
            res.status(201).send({ message: 'User registered successfully!' });
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error occurred.');
    }
});


// API Endpoint for Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
        return res.status(400).send('Email and password are required.');
    }

    // Query the database for the user
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Internal server error.');
        }

        // Check if user exists
        if (results.length === 0) {
            return res.status(404).send('User not found.');
        }

        const user = results[0];

        // Compare the provided password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send('Invalid credentials.');
        }

        // Successful login
        res.send({
            message: 'Login successful!',
            user: {
                name: user.name,
                email: user.email,
                phone_number: user.phone_number,
            }
        });
    });
});



// Test Endpoint
app.get('/', (req, res) => {
    res.send('API is working!');
});

// Start the Server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
