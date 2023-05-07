const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});


app.get("/", (req, res, next) => {
  res.json("Hello world!");
});


module.exports=app;