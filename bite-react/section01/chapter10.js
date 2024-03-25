for(let idx=0; idx<=10; idx++) {
  if(idx % 2 == 0) {
    continue;//아래 코드 실행하지 않고 바로 다음 반복 회차로 이동
  }
  console.log("hello world!");
  if(idx>= 5){
    break;
  }
}