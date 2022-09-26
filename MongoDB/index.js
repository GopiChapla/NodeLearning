const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// const studentRoutes=require("./Route/studentRoute")
const app = express();
dotenv.config();
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB Connected..");
  }
);

//Middleware
app.use(express.json())       //for POST data
// app.use("/api/student",studentRoutes);

app.listen(8080, () => {
  console.log("Server is running at port number 8080.");
});
