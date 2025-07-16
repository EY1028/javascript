const num = +window.prompt("점수 입력");
if (num > 89) {
  window.console.log(`A`);
} else if (num > 79) {
  window.console.log(`B`);
} else if (num > 69) {
  window.console.log(`C`);
} else if (num > 59) {
  window.console.log(`D`);
} else {
  window.console.log(`F`);
}

const num1 = +window.prompt("=정수 입력");
if (num1 > 0 && num % 2 == 1) {
  window.console.log(`양의 홀수`);
} else if (num1 > 0 && num % 2 == 0) {
  window.console.log(`양의 짝수`);
} else if (num1 < 0 && num % 2 == -1) {
  window.console.log(`음의 홀수`);
} else if (num1 < 0 && num % 2 == 0) {
  window.console.log(`음의 짝수`);
} else {
  window.console.log("0");
}
