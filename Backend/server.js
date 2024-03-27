const express = require("express");
const { addForm } = require ("./queries");
const cors = require("cors");
const getClient = require ("./db.js")

var corsOptions = {
    origin: "http://localhost:8081"
};


const PORT= 3000;
const HOST = '0.0.0.0';
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get("/", addForm);


app.listen(PORT, HOST, () => {
    console.log("fdnasjdhnaoizd")
});