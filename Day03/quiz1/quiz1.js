//1
const degree = +window.prompt("각도 입력");
if (90 > degree > 0) {
  window.alert(`예각`);
} else if (degree == 90) {
  window.alert(`직각`);
} else if (180 > degree > 90) {
  window.alert(`둔각`);
} else if (degree == 180) {
  window.alert(`평각`);
}

//2
const korean_score = +window.prompt("국어점수 입력");
if (korean_score == 100) {
  window.alert(`GOOD`);
} else if (60 > korean_score) {
  window.alert(`BAD`);
}
const english_score = +window.prompt("영어점수 입력");
if (english_score == 100) {
  window.alert(`GOOD`);
} else if (60 > english_score) {
  window.alert(`BAD`);
}
const math_score = +window.prompt("수학점수 입력");
if (Math_score == 100) {
  window.alert(`GOOD`);
} else if (60 > Math_score) {
  window.alert(`BAD`);
}

const average = (korean_score + english_score + math_score) / 3;
if (average > 90) {
  window.alert(`A등급`);
} else if (90 > average > 80) {
  window.alert(`B등급`);
} else if (80 > average) {
  window.alert(`C등급`);
}

//3
const Type_drinks = +window.prompt("음료종류");
const Number_drinks = +window.prompt("음료갯수");
const Cost_drinks = +window.prompt("투입금액");

const Cost_beverages1 = 3000;
const Cost_beverages2 = 4000;
const Cost_beverages3 = 5000;
