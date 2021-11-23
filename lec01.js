// 중복없이 유일한 값을 저장할때, 이미 존재하는지 체크할 때 유용
let mySet = new Set(); 
console.log(toString.call(mySet));

mySet.add('test');
mySet.add('test2');
mySet.add('test33');

if (mySet.has('test')) { // 값 존재여부 확인
    console.log('존재함');
}

mySet.forEach(function(v){
    console.log(v);
});

mySet.delete('test');

console.log(mySet);