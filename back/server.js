const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const { Pool } = require('pg');

const cors = require('cors');

app.use(cors())


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// connecting to the database usin the pg parkage



const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'stevator',
    password: 'alex',
    port: 5432, // Default PostgreSQL port
});

// Testing the connection to the database
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error executing query', err.stack);
    } else {
        console.log('Connected to PostgreSQL:', res.rows[0]);
    }
});


// Define API endpoint to test the db conection
app.get('/test', (req, res) => 
{
    res.send('Server is running and connected to PostgreSQL!');
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// configuring end points

// Get all users
app.get('/users', async (req, res) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        client.release();
        // console.log(result);
        res.json(result.rows);
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('Internal Server Error');
    }
});

// Get a single user by ID
app.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users WHERE id = $1', [userId]);
        client.release();
        if (result.rows.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.json(result.rows[0]);
        }
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('Internal Server Error');
    }
});

// Create a new user
app.post('/users', async (req, res) => {
    const { fullname, email } = req.body;
    try {
        const client = await pool.connect();
        const result = await client.query('INSERT INTO users (fullname, email, password) VALUES ($1, $2, $3) RETURNING *', [fullname, email, password]);
        client.release();
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('Internal Server Error');
    }
});

// Update an existing user
app.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
    const { fullname, email } = req.body;
    try {
        const client = await pool.connect();
        const result = await client.query('UPDATE users SET fullname = $1, email = $2, password = $3 WHERE id = $4 RETURNING *', [fullname, email, password, userId]);
        client.release();
        if (result.rows.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.json(result.rows[0]);
        }
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('Internal Server Error');
    }
});

// Delete a user
app.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const client = await pool.connect();
        const result = await client.query('DELETE FROM users WHERE id = $1 RETURNING *', [userId]);
        client.release();
        if (result.rows.length === 0) {
            res.status(404).send('User not found');
        } else {
            res.json({ message: 'User deleted successfully' });
        }
    } catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('Internal Server Error');
    }
});
console.log(global);