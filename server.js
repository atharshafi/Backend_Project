const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Welcome endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Node.js backend application!' });
});

// About endpoint
app.get('/about', (req, res) => {
    res.json({
        name: 'Athar Shafi',
        profession: 'Full-Stack Developer',
        location: 'Dubai, UAE'
    });
});

// Data fetching endpoint
app.get('/data', async (req, res) => {
    try {
        const response = await axios.get('https://randomuser.me/api/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
