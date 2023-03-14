// this is a javascript file
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

const userRouter = require('./routes/user');

const mongoose  = require('./db/mongoose');
const User = require('./db/models/user');

app.get('/', (req, res) => {
    res.send("<h1>Hello world!<h1>")
})

app.use(express.json());

app.use(userRouter);

app.listen(8000, () => {
    console.log("Server is listening on port 8000");
});
