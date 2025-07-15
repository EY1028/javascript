const length = window.prompt("한변의 길이를 입력하세요");
const extent1 = Number(length) * Number(length);

window.alert(`한 변의 길이${length}인 정 사각형의 넓이:${extent1}`);

const base = window.prompt("밑변 길이를 입력하세요");
const height1 = window.prompt("높이를 입력하세요");
const extent2 = (Number(base) * Number(height1)) / 2;

window.alert(`밑변 ${base}과 높이${height}인 삼각형의 넓이:${extent2}`);

const won = window.prompt("원화를 입력하세요");
const yen = Number(won) / 10;

window.alert(`${won}원은  ${yen}엔 입니다`);

const height2 = window.prompt("신장 입력하세요");
const Weight = window.prompt("몸무게를입력하세요");
const BMI = Number(Weight) / (Number(height2) * Number(height2));

window.console.log(`키:${height2},몸무게:${Weight},BMI 지수:${BMI}`);
