// lotto 번호 만들기
// 1. 유일한 값 추출
// 2. getRandomNumber함수에 변수를 전달하는 과정에서 Destructuring  이용하기

const SETTING = {
    name : "Lucky Lotto",
    count : 6,
    maxNumber : 45
}

function getRandomNumber(maxNumber) {
    // 랜덤한 유일한 값출력
    var random = Math.floor(Math.random() * maxNumber);
    var num = new Set();
    num.add(random);
    return num.values();
}
let {count,maxNumber} = SETTING;
for (var i=0; i< count; i++) {
    console.log(getRandomNumber(maxNumber));
}