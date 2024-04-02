
import './App.css'
import AppName from './AppName'
import AddTodo from './AddTodo'
import TodoItem from './TodoItem'
import TodoItems from './TodoItems'


function App() {
   
    const todoItems=[
        {
            name:"Buy Milk",
            dueDate:"30-04-2024"
        },
        {
            name:"Go to College",
            dueDate:"20-05-2024"
        },
        {
            name:"Learn react",
            dueDate:"1-04-2024"
        }
    ];
 return(
    
    <center className="todo-container">
        <AppName />
        <AddTodo></AddTodo>
       <TodoItems todoItem={todoItems} />

     

        {/* <TodoItem1 />
        <TodoItem2 /> */}
    </center>
    
 )
}

export default App;
