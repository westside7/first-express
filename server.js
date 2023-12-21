// load
const express = require('express');
const path = require('path');

const studentsDb = require('./data/students-db');

// create express app
const app = express();

// configure the app
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// mount middleware



app.get('/', function (req, res) {
    res.send('<h1>Hello Express!</h1>');
});

app.get('/home', function (req, res) {
    res.render('home.ejs');
});

app.get('/students', function(req, res) {
    const students = studentsDb.getAll();
    res.render('students/index', { students });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});