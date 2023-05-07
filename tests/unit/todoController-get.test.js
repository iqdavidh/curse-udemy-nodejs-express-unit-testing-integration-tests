const todoController = require("../../controllers/todoController");
const todoModel = require("../../model/todo");
const httpMocks=require("node-mocks-http");


const mockData=[{title:'1', done:true}];
todoModel.get = jest.fn();
todoModel.get.mockReturnValue(mockData)

let req, res;
beforeEach(()=>{
  req=httpMocks.createRequest();
  res= httpMocks.createResponse()
})
describe("TodoController.get", () => {
  it("should have a getTodo function", () => {
    expect(typeof todoController.getTodo).toBe("function");
  });
  
  it("should call todoModel get", () => {
    todoController.getTodo(req, res);
    expect(todoModel.get).toBeCalled();
  });
  
  it("should return  200 response code", () => {
    todoController.getTodo(req, res);
    expect(res.statusCode).toBe(200);
    
    const body=res._getJSONData();
    expect(body).toBeTruthy();
    expect(body).toStrictEqual(mockData);
    
  });
  
  
});
