/* crie un cod care verifica daca la sf link exista symbolu /. daca nu adauga simbolul la sf cu  if else 
daca nu pune / la sfarsit doar daca link-ul contine subtringul my site*/

let link = "https://my-site.com/about";

const lastCharacter = link.charAt(link.length - 1);

if (lastCharacter !== "/" && link.includes("my-site")) {
  link += "/";
}
 
//  a doua varianta 
const iLastCharSlah = lastCharacter !== "/" && link.includes("my-site");
link += iLastCharSlah ? "/" : "";

console.log(link);
