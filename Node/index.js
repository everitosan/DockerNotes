const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Darkness my");
})

app.listen(3000, () => {
  console.log("Running at 3000");
})
