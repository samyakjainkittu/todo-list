import AppName from "./componenets/AppName"
import AddTodo from "./componenets/AddTodo"
import TodoItems from "./componenets/Todoitems"
import "./App.css"
import { useState } from "react";
import WelcomeMsg from "./componenets/WelcomeMsg";


function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {

    // console.log(`New Item ${itemName} + ${itemDueDate}`);

    const newTodoItems = [
      ...todoItems,
      { name: itemName, date: itemDueDate }
    ];

    setTodoItems(newTodoItems);
  };


  const handleDelete = (itemName, itemDueDate) => {
    
    // console.log(`Delete Item  ${itemName} + ${itemDueDate}`);

    const newTodoItems  = todoItems.filter(item => item.name !== itemName  || item.date !== itemDueDate );
    setTodoItems(newTodoItems);
    
  }


  return (
    <center className="Cantainer">
      <AppName />
      <AddTodo onNewItem={handleNewItem}   ></AddTodo>
      {todoItems.length == 0 && <WelcomeMsg />}
      <TodoItems todoitem={todoItems} ondelete={handleDelete}  ></TodoItems>


    </center>

  )
}

export default App
