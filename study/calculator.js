
let first = '';
let number1 = '';
let oper = '';
let num  = 0;
let modifierFlag = false;
let flag = false;
let beforeNum = '';

// 계산기 번호 입력
$('.digit').on('click',function(){
    if (modifierFlag === true) {
        first = ''; // 값 초기화
    }
    number1 = digit($(this).text());
  
    $('#total').text(number1);
})



$('.operation').on('click',function(){
    if ($(this).text() === '=' || (flag === true && oper === $(this).text())) {
        console.log("==")
        $("#total").text(calculate(num,oper,$("#total").text()));
    } else if (oper !== $(this).text()){
        first = '';
       
    }
    num = $("#total").text();
    oper = $(this).text();
    first = '';
    flag = true;
})

$('.modifier').on('click',function(){
    $("#total").text(0);
    modifierFlag = true;
})


function digit(num)
{
    first += num;
    return first;
}  

//console.log(first);
// 계산
function calculate(n1, operation, n2) 
{
    let result = 0;
    n1 = Number(n1);
    n2 = Number(n2);
    if (operation === '+') {
        result = n1 + n2;
    } else if (operation === 'X') {
        result = n1 * n2;
    } else if (operation === '/') {
        result = n1 / n2;
    } else if (operation === '-') {
        result = n1 - n2;
    }
    return String(result);
}



