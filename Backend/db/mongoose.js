// This file will handle connection logic to the MongoDB database
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const username = process.env.USER;
const password = process.env.PASSWD;
const cluster = process.env.CLUSTER;
const dbname = process.env.DBNAME;
const localUri = `mongodb://localhost:27017/${dbname}`;
const uri = `mongodb+srv://${username}:${password}@${cluster}`;

mongoose.set('strictQuery', false); 

// Change the localUri with uri if you want to connect to the cloud database
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("db connected!")
}).catch((err) => {
    console.log("Error on db connection", err);
})

module.exports = { mongoose };