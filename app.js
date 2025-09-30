//jshint esversion:6
require('dotenv').config();
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");



const mongoURL = process.env.MONGODB_URL;
const PORT = 3000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));


app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




// mongoose
//   .connect(mongoURL)
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });


  app.get("/", (req, res) => {

    res.render("index");
  });

  

  



  app.get("/login", (req, res) => {
    // res.sendFile(path.join(__dirname, "public", "login.html"));
    res.render("login");
  });

  




  app.get("/signup", (req, res) => {
    //res.sendFile(path.join(__dirname, "public", "signup.html"));
    res.render("signup");
  });


app.get("/about", (req, res) => {


  res.render("about");
    
});

app.get("/services", (req, res) => {


  res.render("services");
    
});



  app.listen(PORT, function () {
    console.log(`Server started on port ${PORT}`);
  });