const num = +window.prompt("정수");

if (num > 0) {
  window.console.log(`${num}은 양수`);
} else if (num == 0) {
  window.console.log(`${num}은 0`);
} else {
  window.console.log(`${num}는 음수`);
}

window.console.log("끝");
