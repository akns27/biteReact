//1. 배열의 구조 분해 할당

let arr = [1, 2, 3];


// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three,four=4] = arr;
console.log(one, two, three, four);