/** 3- branching
 *
 * scrie un script " This is a positive number
 * daca utilizator a introdus o valoare mai mare de zero sa afiseze
 * ce am scris mai sus.
 * Daca pune 0 sa scrie this is zero iar daca e mai mic decat zero sa scie this is a negative number
 * "
 */

const userInput = prompt("Introduceti numarul");

const number = Number(userInput);

if (number > 0) {
  console.log("nr e pozitiv");
} else if (number === 0) {
  console.log(" nr e 0");
} else {
  console.log("nr e negativ");
}
