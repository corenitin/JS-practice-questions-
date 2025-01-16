// 1st way
// function findEvenOddNum(num) {
//   if (num % 2 === 0) {
//     console.log("Number is Even");
//   } else if (num % 2 !== 0) {
//     console.log("Number is Odd");
//   }
// }
// findEvenOddNum(2);
// findEvenOddNum(0);
// findEvenOddNum(1);
// findEvenOddNum(1550);
// findEvenOddNum(-1);

// 2nd way
// function findEvenOddNum(num) {
//     const remainder = num % 2
//     if (remainder % 2 === 0) {
//         return "even"
//     }else{
//         return "odd"
//     }
// }
// console.log(findEvenOddNum(22));

//3rd way
// function findEvenOddNum(num) {
//   return num % 2 === 0 ? "even" : "odd";
// }
// console.log(findEvenOddNum(1));
// console.log(findEvenOddNum(2));

// 4th way using switch case
let num = 9
switch (num % 2) {
  case 0:
    console.log("even");
    break;
  case 1:
    console.log("odd");
    break;

  default:
    console.log("Invalid");
    break;
}
