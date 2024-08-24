/** input si branching
 * scrie un script in care intrebi user folosind prompt
 * care este username-ul daca introduce ADMIN atunci vine un prompt
 * intreaba care e parola, daaca nu e nimic sau esc apasat = canceled
 * altfel i dont know u
 * pentru verificare parola
 * daca parola e im an admin atunci scrie Hello
 * else wrongpassowrd
 *
 */

const loginAnswer = prompt("Care este username-ul?");

if (loginAnswer === "Admin") {
  const passwordAnswer = prompt("Care este parola?");
  if (passwordAnswer === "Sunt admin") {
    console.log("Hello");
  } else {
    console.log("Parola e gresita");
  }
} else if (loginAnswer && loginAnswer.length > 0) {
  console.log("i dont know you");
} else {
  console.log("cancelled");
}
