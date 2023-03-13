const express = require("express");
const app = express();
const path = require("path");
const signupRoter = require("./routes/signupRouts")
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use("/", signupRoter)
app.listen(4000);
