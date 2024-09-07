const names = "Sergiu,Alex,Andrei,Raluca";
const phones = "07654334434,07655334534,076434343,0753434256";

const arrayOfNames = names.split(',');
const arrayOfPhones = phones.split(',');

console.log(arrayOfNames);
console.log(arrayOfPhones);

for (let i = 0; i < arrayOfNames.length; i++) {
  console.log(`${arrayOfNames[i]}-${arrayOfPhones[i]}`);
}
