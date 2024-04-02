import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems }) => {
  // Check if todoItems is undefined or empty
  if (!todoItems || todoItems.length === 0) {
    return <div>No todo items to display.</div>;
  }

  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem key={item.id} todoDate={item.dueDate} todoName={item.name} />
      ))}
    </div>
  );
};

export default TodoItems;
