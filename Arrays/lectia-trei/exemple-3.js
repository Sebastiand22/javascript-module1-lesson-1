const fruits = ["🍎", "🍇", "🍌", "🍋", "🍊"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}: ${fruits[i]}`);
}
//  a doua varianta
let i = 0;
for (const fruit of fruits) {
  i++;
  console.log(`${i}: ${fruit}`);
}
