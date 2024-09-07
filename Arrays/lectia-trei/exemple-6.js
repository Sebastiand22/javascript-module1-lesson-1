const string ='Welcome to the future';

const words= string.split(' ');

for(let i=0; i< words.length; i++)
{
    words[i]=words[i].split('').reverse().join('');

}
console.log(words);

const finalString = words.join(' ');
console.log(finalString)

// join transforma un array intr-un string
// split transforma intr-un array