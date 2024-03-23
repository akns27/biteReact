

let area1 = getArea(5, 10);
console.log(area1);


let area2 = getArea(10, 20);
console.log(area2);

getArea(20, 40);
//함수

function getArea(width, height) {
  function another(){ //중첩 함수
    console.log ("another area");
  }
  another();
  let area = width * height;

  return area;// 리턴하고 코드를 종료
  console.log('hello')//실행 안 됨
}

//선언문을 호출문보다 아래에 두어도 실행가능
//호이스팅
// -> 끌어올리다 라는 뜻