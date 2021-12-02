// symbol.for 공유심볼
// 문자열 필수 안쓰면 undefined
const test = Symbol.for()

const test2 = Symbol.for('abs');

const test3 = Symbol.for('abs');

console.log(test2==test3);

// 예제 
const obj = ( () => {
    const COMMO1 = Symbol.for('공유심봏');
    return {
        [COMMO1]: '꽁유할 프로퍼티 키값입니다. 어디서든 접근 가능해용'
    }
}) ()
const COMMON2 = Symbol.for('공유심봏');
console.log(obj[COMMON2]);

// 공유심볼은 키로 접근 가능
Symbol.keyFor()