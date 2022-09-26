const express = require("express");
const app = express();

//Middleware
app.use(express.json())       //for POST data
app.use('/api/student',require('./Route/StudentRoute'));

app.listen(8080, () => {
  console.log("Server running at 8080");
});
