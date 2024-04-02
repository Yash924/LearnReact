function TodoItemUsingMaps()
{
  let tasks=["Buy Milk","Go to Gym"];
  let taskDates=["29-03-2024","29-03-2024"];
  return (
  <>
          <center>
            {tasks.map((task,taskDate)=>(
              <div className="container-fluid" key={taskDate}>
        
              <div className="row rowMargin">
      
                  <div className="col-6">{task}</div>
                
                  <div className="col-4"> {taskDates[taskDate]}</div>
                  <div className="col-2">
                      <button type="button" className="btn btn-danger btnSize">Delete</button>
                  </div>
              </div>  
          </div>
            ))}
          </center>
          </>
  );
}

export default TodoItemUsingMaps;