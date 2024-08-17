import "./ToDoItem.css";
import { memo, useContext } from "react";
import { TodoDispatchContext } from "../App";
const ToDoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="ToDoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

//고차 컴포넌트(HOC)
// export default memo(ToDoItem, (prevProps, nextProps) => {
//   //반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//   // T -> Props 바뀌지 않음 -> 리렌더링 X
//   // F -> Props 바뀜 -> 리렌더링 O
//   //onUpdate, OnDelete는 객체라서 매번 새로 생성될 때마다 다른 주소를 가져서 적용하려면 useCallback 사용해야함

//   if(prevProps.id !== nextProps.id) return false;
//   if(prevProps.isDone !== nextProps.isDone) return false;
//   if(prevProps.content !== nextProps.content) return false;
//   if(prevProps.date !== nextProps.date) return false;

//   return true; //값이 안바뀌었으니 리렌더링하지 마라
// });

export default memo(ToDoItem);
