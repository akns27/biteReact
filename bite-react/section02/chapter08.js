//5가지 요소 순회 . 및탐색 메서드
//1. forEach
//모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, azrr) {
  // console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// console.log(doubledArr);

//2. includes
//배열에 특정 요소가 있는지 확인하는 그런 메서드
let arr2 = [1, 2, 3];

let isInclude = arr2.includes(3);
// console.log(isInclude);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
//요소가 여러개 있다면 indexOf는 앞에서부터 순회하기에 가장 앞의 index를 반환
//요소 존재하지 않으면 -1 반환
let index = arr3.indexOf(2);
// console.log(index);

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는
// 그런 특정 요소의 인덱스(위치)를 반환하는 메서드
//요소 존재하지 않으면 -1 반환
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => item % 2 != 0);

// console.log(findedIndex);

// let objectArr = [
//   {name : "이정환"},
//   {name : "박강원"},
// ]

// console.log(objectArr.indexOf({name : "이정환"}));
// //-1

// console.log(objectArr.findIndex(
//   (item) => item.name === "이정환"
// ));
//0(정상작동)
//단순한 원시 타입 -> indexOf
//복잡한 객체 타입 -> findIndex

//5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반화ㅓㄴ
let arr5 = [{ name: "이정환" }, { name: "홍길동" }];

const finded = arr5.find((item) => item.name === "이정환");
console.log(finded);
