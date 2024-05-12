import "./List.css";
import ToDoItem from "./ToDoItem";
import { useState } from "react";

const List = ({ todos, onUpdate }) => {
  const [ search, setSearch ] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => 
      todo.content.toLowerCase().includes(search.toLocaleLowerCase()));
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>ToDoList🍀</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <ToDoItem key={todo.id} {...todo} onUpdate={onUpdate}/>;
        })}
      </div>
    </div>
  );
};

export default List;
