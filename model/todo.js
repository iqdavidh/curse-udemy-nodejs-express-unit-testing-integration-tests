const allTodo=require("../tests/mock-data/allTodo.json");
const todo = {
  create: () => {
 
  },
  get:()=>{
    return allTodo;
  },
  getFromId: async (id)=>{
    return {
      id,
      "title": "item1",
      "done": false
    
    }
  }
}

module.exports = todo;