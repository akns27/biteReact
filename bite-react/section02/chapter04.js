//1. spread연산자
//-> spread : 흩뿌리다, 펼치다라는 뜻
//-> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역활
//->...배열이름

let arr1 = [1,2,3];
let arr2 =  [4, ...arr1, 5, 6];
// console.log(arr2);

let obj1 = {
  a:1,
  b:2,
};

let obj2 = {
  ...obj1,
  c:3,
  d:4,
};

// console.log(obj2);

function funcA(p1,p2,p3){
  console.log(p1,p2,p3);
}

// funcA(...arr1);

//2. Rest 매개변수
//-> Rest는 나머지, 나머지 매개변수
//-> 여러 매개변수가 들어와도 배열형식으로 저장해줌
//->...(원하는 이름)
//->...rest뒤에 추가적인 매개변수가 올 수 없음, 지정해준 매개변수를 빼고 나머지 값 모두를 받아서 배열로 저장해서

function funcB(one, two, ...args){
  console.log(args);
} 

funcB(...arr1);
