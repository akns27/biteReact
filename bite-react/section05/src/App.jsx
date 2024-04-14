import "./App.css";
import { useState } from "react";
//js 문법으로 변수를 만들어서 처리를 해도 되지않냐?
// -> ㄴㄴ 그러면 리렌더링이 되지않아서 아무리 버튼을 눌러도 상태변화가 없음

function App() {
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");
  //state는 useState를 이용해 생성한 값, setState는 state의 값을 변경하는 함수
  return (
    <>
      <div>
        <h1>{light}</h1>
        <button onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}>{light === "ON" ? "끄기" : "켜기"}</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
}

export default App;
