import "./ToDoItem.css";

const ToDoItem = () => {
  return (
    <div className="ToDoItem">
      <input type="checkbox" />
      <div className="content">todo</div>
      <div className="date">date</div>
      <button>삭제</button>
    </div>
  );
};

export default ToDoItem;
