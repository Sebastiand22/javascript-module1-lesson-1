/** Write a script that calculates a person's body mass index.
 * For this you need to divide the veight in kilograms
 * by the square of the person's height in meters.
 */

let weight = "88,3";
let height = "1.75";

const weightAsNumber = Number.parseFloat(weight.replace(",", "."));
const heightAsNumber = Number.parseFloat(height);

const bmi = weightAsNumber / Math.pow(heightAsNumber, 2);
const mesaj= `BMI pentru cineva cu inaltimea ${(heightAsNumber)} si greutatea ${weightAsNumber} este ${bmi}`

console.log(mesaj);