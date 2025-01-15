// 1st way
// function areaofRectangle(length, width) {
//   const areaofRectangle = length * width;
//   if ((length < 0, width < 0)) {
//     console.log("Not valid length or width");
//   } else {
//     console.log("Area of rectangle is:", areaofRectangle);
//   }
// }
// areaofRectangle(2, 3);
// areaofRectangle(2, 0);
// areaofRectangle(2, 1.5);
// areaofRectangle(2, -1.5);

//2nd way
function areaofRectangle(length, width) {
  if (length <= 0) {
    throw new RangeError("Length should be a positive number");
  }
  if (width <= 0) {
    throw new RangeError("Width should be a positive number");
  }
  const areaofRectangle = length * width;
  console.log("Area of rectangle is:", areaofRectangle);
}
areaofRectangle(2, 3);
// areaofRectangle(2, -1.5);
areaofRectangle(2, 15);
