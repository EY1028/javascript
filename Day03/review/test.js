const num = +window.prompt("number");
const result = num > 0 ? "양의정수" : "0또는 음의 정수";
window.console.log(result);

const age = +window.prompt("age");
const result2 = age > 20 ? "성인입니다" : "미성년사입니다";
window.alert(result2);

const name = window.prompt("name");
const result3 = name == "" ? "이름을 입력하세요" : "안녕하세요";
window.alert(result3);

const num1 = +window.prompt("number");
const result4 = num1 % 2 == 1 ? "홀수 입니다" : "짝수 입니다";
window.alert(result4);
