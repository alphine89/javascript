const salesData = {
  Q1: [500, 700, 400],
  Q2: [800, 200, 600],
  Q3: [300, 900, 100],
  Q4: [600, 400, 800],
};
/**access sales the 1st item of data in q2
access the sales item for Q3 and the third item in the array
update the sales data item for Q3 to [700, 500, 900]
add a new Q5 wiyh values [100,200, 300]
access the second sales item for Q1,Q2,Q3 and Q4 and calculate the average of those values.**/
console.log(salesData.Q3[4]);
console.log(
  (salesData.Q1[1] + salesData.Q2[1] + salesData.Q3[1] + salesData.Q4[1]) / 4
);
console.log(salesData.Q3[4]);

salesData.Q5 = [100, 200, 300];
console.log(salesData);

//unary operators
let value = 10;
value--; //adds 1 to value
console.log(value--); // post decrementor 10
console.log(value); //9
console.log(--value); //predecrementor 8

//write a  function that takes an array of numbers as an argument and returns the averageof those numbers.
function sumElements(numArr) {
  let sum = 0;
  for (let index = 0; index < numArr.length; index++) {
    sum += numArr[index];
  }
  return sum;
}
console.log(sumElementsInArray[(4, 45, 78, 90)]);
