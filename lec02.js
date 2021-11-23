//weakset
// 참조를 가지고 있는 객체만 저장이 가능하다.
// 객체형태를 중복없이 저장하려 할때 유용
let arr = [1,2,3,4];
let ws = new WeakSet();

ws.add(arr);
ws.add(123); // Invalid value used in weak set 타입에러 발생

console.log(ws);