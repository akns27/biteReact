//단락평가
//&& 같은 논리 연산식에서 첫번째 피연산자값만으로도
// 연산의 결과를 확정할 수 있다면 
//두번째 피연산자에게는 접근조차도 하지 않는 다

// function returnFalse(){
//   console.log("false함수");
//   return undefined;//falsy 값
// }

// function returnTrue(){
//   console.log("true함수");
//   return 10;//truthy 값
// }

// console.log(returnFalse() && returnTrue());

//단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

let person = {name:"박강원"};
printName(person);

// T || T 하면 앞의 T
// T && T 하면 뒤의 T