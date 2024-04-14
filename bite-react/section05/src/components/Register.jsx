//간단한 회원가입 폼
//1. 이름
//2. 생년월일
//3. 국적
//4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  //비슷한 여러개의 state가 있다면 하나의 객체값으로 묶어서 하나의 통합 state로 관리
  let count = 0;

  const onChange = (e) => {
    // countRef.current++;
    count++;
    console.log(count);
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    //여러개의 비슷한 이벤트핸들러들은 하나의 통합 핸들러로 묶어줄 수 있다
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 돔 요소 포커스
      // console.log(inputRef.current)
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value={""}>국적을 선택해주세요</option>
          <option value={"kr"}>한국</option>
          <option value={"us"}>영국</option>
          <option value={"uk"}>미국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />

        <div>{input.bio}</div>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
