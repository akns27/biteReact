import { useState } from "react";

function useInput() {
  //use를 써서 커스텀 훅으로 설정
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;