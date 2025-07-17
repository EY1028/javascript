const fruits_list = ["수박", "사과", "바나나", "오렌지", "망고"];
window.console.log(fruits_list[0]);
window.console.log(fruits_list[1]);
window.console.log(fruits_list[2]);
window.console.log(fruits_list[3]);
window.console.log(fruits_list[4]);

fruits_list[5] = "키위";
delete fruits_list[2];
fruits_list[2] = "복숭아";
window.console.log(fruits_list);
