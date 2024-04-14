import "./App.css";
import HookExam from "./components/HookExam";

//js 문법으로 변수를 만들어서 처리를 해도 되지않냐?
// -> ㄴㄴ 그러면 리렌더링이 되지않아서 아무리 버튼을 눌러도 상태변화가 없음


function App() {
  //state는 useState를 이용해 생성한 값, setState는 state의 값을 변경하는 함수
  return (
    <>
      <HookExam/>
    </>
  ); 
}

export default App;
