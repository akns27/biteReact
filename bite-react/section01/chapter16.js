//1. 상수 객체

const animal = {
  type : "고양이",
  name : "나비",
  color : "white"
};

animal.age = 2;//추가
animal.name ="하양이";//수정
delete animal.color;//삭제

// 2. 메서드
// 값이 함수인 프로퍼티를 말함

const person = {
  name: "박강원",
  //메서드 선언
  sayHi(){
    console.log("안녕");
  },
};

person.sayHi();
perosn["sayHi"]();