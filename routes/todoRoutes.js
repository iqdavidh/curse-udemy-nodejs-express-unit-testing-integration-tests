const express = require("express");
const todoController = require("../controllers/todoController");
const todoRoutes = express.Router();

todoRoutes.post("/", todoController.createTodo);
todoRoutes.get("/:id", todoController.getTodoFromId);
todoRoutes.get("/", todoController.getTodo);

module.exports = todoRoutes;
