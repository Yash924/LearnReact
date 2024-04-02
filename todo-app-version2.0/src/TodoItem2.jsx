function TodoItem2()
{
     let todoName="Go to Gym";
    let todoDate="21/03/2024";
    return(
        <div className="container">
            <div className="row rowMargin">
                <div className="col-6">
                   {todoName}
                </div>
                <div className="col-4">
                    {todoDate}
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-danger btnSize">Delete</button>
                </div>
            </div>
        </div>
    )


}
export default TodoItem2;