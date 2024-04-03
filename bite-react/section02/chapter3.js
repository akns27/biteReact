//1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three, four = 4] = arr;

//2. 객체의 구조분해 할당
let person = {
  name: "박강원",
  age: 18,
  hobby: "뮤지컬 감상",
};

//let name = person.name;

let { name, age : myAge, hobby, extra = "hello" } = person;

// console.log(name, myAge, hobby, extra);


//3. 객체의 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
//중괄호로 구분할이라는 걸 명시해줘야 함
const func = ({name,age,hobby,extra}) =>{

  console.log(name, age, hobby, extra);
}

func(person);//person객체가 아닌 10같은 거 넣었으면 아예 구조분해할당 성립이 안 됨