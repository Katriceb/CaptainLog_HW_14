require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

//Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

app.listen(3000, () => {
    console.log('listening');
})