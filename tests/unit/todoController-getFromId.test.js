const todoController = require("../../controllers/todoController");
const todoModel = require("../../model/todo");
const httpMocks=require("node-mocks-http");



todoModel.getFromId = jest.fn();
todoModel.getFromId.mockReturnValue({id:1})

let req, res, next;
beforeEach(()=>{
  req=httpMocks.createRequest();
  res= httpMocks.createResponse();
  next= jest.fn();
})
describe("TodoController.getFromID", () => {
  
  it("should throw error",  async() => {
    req.params.id=666;
    todoModel.getFromId.mockReturnValue(Promise.reject({msg:"isTest"}))
    await todoController.getTodoFromId(req, res, next);
    expect(next).toHaveBeenCalledWith({msg:"isTest"})
  });
  
  
});
