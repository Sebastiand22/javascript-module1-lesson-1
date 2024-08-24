/** Exercitiu 2 Time display( if... else)
 *
 * write a script to display hours and minutes in the browser console as
 * a string format "14 ore 26 min."
 *
 * If the value of the minutes variable is 0, then output the strig " 14 fix, without minutes.
 * "
 */

const hours = 14;

const minutes = 0;

let timeString;

if (minutes > 0) {
  timeString = `${hours}ore ${minutes}minute`;
} else {
  timeString = `${hours}fix`;
}
console.log(timeString);
