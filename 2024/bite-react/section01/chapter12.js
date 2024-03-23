//1. 함수 표현식(호이스팅 안 됨)



function funcA(){
  // console.log("funkA");
}

let varA = funcA;
varA();

let varB = function funcB(){//값으로 표현
  // console.log("funkB");
}

varB();
// funcB();

//2. 화살표 함수
let varC = (value) => {
  console.log(value);
  return value+1
  
};


console.log(varC(10));

