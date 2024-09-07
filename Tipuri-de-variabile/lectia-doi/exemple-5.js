/* link formatting(endsWith)
 scrie un cod care verifica daca la sf link exista symbolu /. daca nu adauga simbolul la sf cu  if else */

// const test = 'abc'
// console.log(test.length)

let link = "https://my-site.com/about";

const lastCharacter = link.charAt(link.length - 1);

if (lastCharacter !== "/") {
  link += "/";
}

console.log(link);
