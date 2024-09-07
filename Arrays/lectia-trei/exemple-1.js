const genres = ["Jazz", "Blues"];

genres.push("Rock and Roll");

console.log(genres); 

// push sa adauge elem la sfarsit
// pop sa scoata elem de la sfarsit

console.log(genres[0]);

console.log(genres[genres.length-1]);

console.log(genres.shift())

// shift sa scoata elem de la inceput
// unshift sa adauge elem de la inceput
console.log(genres);
genres.unshift("country", "reggae");
console.log(genres);
