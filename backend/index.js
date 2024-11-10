const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Create a database connection
mongoose
    .connect('mongodb+srv://asthakumari605:qAVpA5gUAnGVZnhw@cluster0.ygdsx.mongodb.net/mydatabase')
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log('Error', error));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'DELETE', 'PUT'],
        allowedHeaders: [
            'Content-Type',
            'Authorization',
            'Cache-Control',
            'Expires',
            'Pragma'
        ],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

// Define a root route to test the server
app.get('/', (req, res) => {
    res.send('Hello, world! This is the root route.');
});

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));
