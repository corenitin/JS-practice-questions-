function findSmallNum(num1, num2, num3) {
  if (num1 <= num2 && num1 <= num3) {
    return num1;
  } else if (num2 <= num1 && num2 <= num3) {
    return num2;
  } else if (num3 <= num1 && num3 <= num2) {
    return num3;
  } else if (num1 == num2 && num1==num3) {
    return `${num1}`;
  }
}
// console.log("smallest number is", findSmallNum(5, 2, 3));
// console.log("smallest number is", findSmallNum(5, 5, 5));
console.log("smallest number is", findSmallNum(5, 5, 2));
console.log("smallest number is", findSmallNum(5, 5, 9));
