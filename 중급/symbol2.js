const NAME = Symbol('이름');
const GENDER = Symbol('성별');
const iu = {
    [NAME] : '아이유',
    [GENDER]: 'female',
    age: 29
}

const suji = {
    [NAME]: '수지',
    [GENDER]: 'female',
    age:28
}

const baekhyun = {
    [NAME]: '백현',
    [GENDER]: 'male',
    age:30
}

Reflect.ownKeys(iu).forEach(k => {
    console.log(k,iu[k]);
})