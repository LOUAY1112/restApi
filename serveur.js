require("dotenv").config(); //Create Express server
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const server = express();

// Connect to MongoDB database
mongoose
    .connect("mongodb://localhost:27017/RestApi", { useNewUrlParser: true })
    .then(() => {
        server.use(express.json());
        server.use("/", routes); // new
        server.listen(5000, () => {
            console.log("Server has started!");
        });
    });






