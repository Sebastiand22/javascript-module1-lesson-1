/** Strings */

const singleQuoteStrig= 'Single quote string';

// singleQuoteStrig= 'Test' error cannot assign to constant variable


console.log(singleQuoteStrig);

const doubleQuoteString= " Double quote\" string";

console.log(doubleQuoteString);
console.log('doubleQuoteString');

const templateLiteralString= `Aici putem scrie cod 
pe mai multe linii.
Putem chiar sa folosim variabile: ${doubleQuoteString}`;

console.log(templateLiteralString);

