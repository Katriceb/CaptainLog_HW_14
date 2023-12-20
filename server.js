require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logController=require ("./controllers/logs");
const methodOverride = require('method-override');
const jsxViewEngine = require("jsx-view-engine");
const app = express();
const port = 3001;

//Global configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI);
mongoose.connection.once('open', () => {
    console.log('connected to mongo');
})

app.set('view engine', 'jsx');
app.set('views', './views');
app.engine('jsx', jsxViewEngine());

// ================ Middleware ================
//
app.use((req, res, next) => {
    console.log('Middleware: I run for all routes');
    next();
})
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));

// --------use routes --------------
app.use('/logs',logController);

app.listen(3001, () => {
    console.log('listening');
})