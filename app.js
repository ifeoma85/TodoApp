const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt");
const { connectDB } = require('./db');
require("dotenv").config()
connectDB();

const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3022
app.use(express.json())
// parser incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', (req, res) => res.send('Welcome to Your Todo App!'));

app.post("/signup", (req, res) => {
    console.log(req.body);
    res.send("Registered!")
})

app.post("/login", (req, res) => {
    const { username, password } = req.body;
})

app.listen(PORT, () => console.log(`Server running successfully @http://localhost:${PORT}`))