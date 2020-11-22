const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes


// 404 handler
app.use((req, res) => {
    res.status(404).send("404 Not Found");
})

module.exports = app;