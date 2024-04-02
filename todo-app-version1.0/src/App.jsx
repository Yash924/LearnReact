import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './AppName'
import AddTodo from './AddTodo'
import TodoItem1 from './TodoItem1'
import TodoItem2 from './TodoItem2'
import TodoItemUsingMaps from './TodoItemUsingMaps'

function App() {
   
 return(
    
    <center className="todo-container">
        <AppName />
        <AddTodo></AddTodo>
       <TodoItemUsingMaps />

        {/* <TodoItem1 />
        <TodoItem2 /> */}
    </center>
    
 )
}

export default App;
