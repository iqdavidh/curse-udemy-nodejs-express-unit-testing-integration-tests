const request = require("supertest");
const newTodo = require("../mock-data/newTodo.json");
const app = require("../../app");
const todoModel = require("../../model/todo");

const endpointUrl = "/todos";

const mockData=[{title:'2', done:true}];
todoModel.get = jest.fn();
todoModel.get.mockReturnValue(mockData)

describe(endpointUrl, () => {
  it("POST " + endpointUrl, async () => {
    const response = await request(app)
      .post(endpointUrl)
      .send(newTodo);
    
    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(newTodo.title);
    expect(response.body.done).toBe(newTodo.done);
  });
  
  it("error handler - no body POST " + endpointUrl, async () => {
    const response = await request(app)
      .post(endpointUrl)
      .send();
    expect(response.statusCode).toBe(500);
    expect(response.body.message).toBeTruthy();
 
  });
  
  it("Get " + endpointUrl, async () => {
    const response = await request(app)
      .get(endpointUrl)
      .send();
    
    expect(response.statusCode).toBe(200);
    const data=response.body;
    
 
    expect(data).toBeTruthy();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBe(mockData.length);
  });
  
  it("Get item" + endpointUrl, async () => {
    const response = await request(app)
      .get(endpointUrl +`/1`)
      .send();
    
    expect(response.statusCode).toBe(200);
    const data=response.body;
    
    
    expect(data).toBeTruthy();
    expect(data.id).toBe("1");
  });
  
  
 
});
