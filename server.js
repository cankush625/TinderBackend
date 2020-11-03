import express from 'express'
import mongoose from 'mongoose'

// App Config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares

// DB config

// API Endpoints
app.get('/', (req, res) => {
    res.status(200).send("Hello, Ankush!")
});

// Listener
app.listen(port, () => {
    console.log(`listening in localhost: ${port}`)
});