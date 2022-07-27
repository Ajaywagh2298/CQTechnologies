const express = require('express');

//------------------------------------ STUDENT MODELS FUNCTION FETCHING ------------------------------------------------
const { listStudent, individualStudent } = require('./Student/get');
const { createStudentDetails } = require('./Student/post');
const { updateStudentDetails } = require('./Student/put');

//------------------------------------ BOOKS MODELS FUNCTION FETCHING ------------------------------------------------
const { createBookDetails } = require('./Books/post');
const { listBooks, individualBook } = require('./Books/get')
const { updateBookDetails } = require('./Books/put');

//----------------------------------- SERVER DEPLOY & PORT ASSIGN ------------------------------------------------------
const app = express();
const hostPort = 9000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//---------------------------------- STUDENT API -----------------------------------------------------------------------
app.get('/students', (req, res) => {
    listStudent(req, res)
})
app.get('/students/:id', (req, res) => {
    individualStudent(req, res)
})

app.post("/add-student", (req, res) =>{
    createStudentDetails(req,res)
});
app.put('/update-student/:id', (req, res) =>{
    updateBookDetails(req, res)
})

//---------------------------------- BOOK API --------------------------------------------------------------------------
app.post('/add-book', (req, res) =>{
    createBookDetails(req, res)
})
app.get('/books', (req, res) => {
    listBooks(req, res)
})
app.get('/books/:id', (req, res) => {
    individualBook(req, res)
})
app.put('/update-book/:id', (req, res) =>{
    updateBookDetails(req, res)
})

//----------------------------------------------- SERVER CONNECTION -----------------------------------------------------
app.listen(hostPort,()=>{
    console.log(`server port : http://localhost:${hostPort} Running!`);
});