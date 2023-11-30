const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/trainer-routes");
// const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
// app.use(cors());
app.use("/trainers", router); // localhost:5000/books



mongoose.connect("mongodb+srv://ishmeetcu:hello@cluster0.vjtmb6e.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected To Database")).then(() => {
    app.listen(5001);
  }).catch((err) => console.log(err));