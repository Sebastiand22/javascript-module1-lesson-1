/** user input and branching */

// console.log('test');
// let answer = prompt('care este numele oficial al Javascript');
// console.log('test ulterior');

// console.log(answer);
// nu se executa codul pana nu se introduce valoarea in prompt

// Exercitiu!!! using the "if...else" expresion and prompt construct write code tthat will ask:
/**what iss the offcial name of javascript */
/**if the user enters ECMAScript then show an alert with the string "Correct!'
 * otherwise "Do not know? ECMAScript" */

let answer = prompt("Care este numele oficial al Javascript?");

const correctAnswer = "ECMAScript";

if (answer === correctAnswer) {
  alert("Corect!");
} else {
  alert("Nu stii, e ECMAScript");
}
