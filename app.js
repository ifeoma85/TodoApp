const express = require('express');
const { connectDB } = require('./db');

require("dotenv").config()
connectDB();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require("bcryptjs");
const userModel = require("./model/user.model");


const jwt = require("jsonwebtoken");

const app = express();
const PORT = process.env.PORT || 3022
app.use(express.json())
// parser incoming requests with JSON payloads
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => res.send('Welcome to Your Todo App!'));

//for registering users
app.post("/signup", (req, res) => {

    let user = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        if (!err) {
            bcrypt.hash(user.password, salt, (err, hashedpassword) => {
                if (!err) {
                    user.password = hashedpassword;

                    userModel.create(user)
                        .then((doc) => {
                            res.status(201).send({ message: "User Registered successfully" })
                        })
                        .catch((err) => {
                            console.log(err);
                            res.status({ message: "Some problem occured" })
                        })
                }

            })
        }
    })
})
//endpoint for logging in users
app.post("/login", (req, res) => {
    let userCred = req.body;

    userModel.findOne({ username: userCred.username })
        .then((user) => {

            if (user !== null) {
                bcrypt.compare(userCred.password, user.password, (err, result) => {
                    if (result === true) {
                        // generate a token and send it back
                        jwt.sign({ username: userCred.username }, "thorabhkey", (err, token) => {
                            if (!err) {
                                res.send({ token: token })
                            }
                            else {
                                res.status(500).send({ message: "Some issues occured" })
                            }
                        })
                    }

                    else {
                        res.status(401).send({ message: "Incorrect Password" })
                    }
                })
            }
            else {
                res.status(404).send({ message: "Wrong Email, No user found" })
            }

        })
        .catch((err) => {
            console.log(err);
            res.send({ message: "Some Problem occured" })
        })

})

app.get("/task", verifyToken, (req, res) => {
    res.send({ message: "token generation successful" })

})
function verifyToken(req, res, next) {
    let token = req.headers.authorization.split(" ")[1];

    jwt.verify(token, "thorabhkey", (err, task) => {
        if (!err) {
            console.log(task);
            next();
        }
        else {
            res.status(401).send({ message: "Invalid Token please login again" })
        }
    })
}

app.listen(PORT, () => console.log(`Server running successfully @http://localhost:${PORT}`))