const todoController = require("../../controllers/todoController");
const todoModel = require("../../model/todo");
const httpMocks=require("node-mocks-http");
const newTodo=require("../mock-data/newTodo.json")

todoModel.create = jest.fn();

let req, res, next;
beforeEach(()=>{
  req=httpMocks.createRequest();
  res= httpMocks.createResponse();
  next=jest.fn();
})
describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof todoController.createTodo).toBe("function");
  });
  
  it("should call todoModel create and response status code is 201", () => {
    req.body=newTodo;
    todoController.createTodo(req, res, next);
    expect(todoModel.create).toBeCalled();
    expect(res.statusCode).toBe(201);
    expect(res._getJSONData()).toMatchObject(newTodo);
  });
  
  
  
});
