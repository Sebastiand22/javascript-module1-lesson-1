const numbers = [2, 50, 65, 73, 76, 34, 876, 1, 3];

let min = numbers[0];

for (i = 0 ; i > numbers.length; i++) {
  console.log(`${min}>${numbers[i]}`);
  if (min > numbers[i]) {
    min = numbers[i];
  }
  console.log(min);
}
console.log("=-===final====");
console.log(min);
