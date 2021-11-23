/**
 * Symbol 
 * 유일무이하다.
 * private에 대한 needs로 생성됨
 * 기본적인 열거대상에서 제외
 * 암묵적 형변환 불가
 */

const a = Symbol();

// TypeError: Cannot convert a Symbol value to a number
//console.log(a+1);

// 매번 만들때 다른값이다.

// Symbol이 private한 값이라는걸 단적으로 보여주는예제
const x = () => {
    const a = Symbol('a');
    return {
        [a] : 10, // 이렇게 반환시 절대 접근이 불가 
         a : a
    }
}

const y = x();
console.log(y.a);

// Symbol은 뉴 연산자 사용 안한다.