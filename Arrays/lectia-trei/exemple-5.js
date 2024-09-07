const string = "   Welcome to the future";
console.log(string);

const words = string.split(" ");
console.log(words);

if (words.length > 1) {
  words.shift();
}

for (let i = 0; i < words.length; i++) {
  if (words[i] === " ") {
    words.shift();
  } else {
    break;
  }
}

console.log(words);

if (words.length > 1) {
  words.pop();
}
console.log(words);

let finalString = "";
for (const word of words) {
  if (word !== "") {
    finalString += word + " ";
  }
}
console.log(finalString);
