const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./Routing/Pages/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.sendFile("./Routing/Pages/about.html", { root: __dirname });
});
app.get("/abou-us", (req, res) => {
  res.redirect('/about');
});
app.use((req, res) => {
  // res.send("Hello");
  res.sendFile("./Routing/Pages/404.html", { root: __dirname });
});

app.listen(8080);
