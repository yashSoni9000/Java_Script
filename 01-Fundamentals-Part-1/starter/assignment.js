// const country ="India";
// const continent="Asia";
// let population =1417;

// // country="Findland"; this throws an error as const can not be changed later
// console.log(country);
// console.log(continent);
// console.log(population+" million");

// const isIsland=false;
// const language="Hindi";

// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

// const halfPopulation=population/2;
// console.log(halfPopulation);

// population++;
// console.log(population);

// const finlandPopulation=6
// const isGreaterPopulation=population>finlandPopulation;
// console.log(isGreaterPopulation);

// const avgPopulation=33;
// console.log(population<avgPopulation);

// const description =country+" is in "+continent+", and its "+population+" population"+" people speak "+language;
// console.log(description);

// console.log(`${country} is in ${continent}, and its ${population} population people speak ${language}`)

// if(population>33) console.log(`${country}'s population is above average`)
// else console.log(`${country}'s population is ${33-population} million below average`)



// coding challenge #1

const markMass=prompt("Enter Mark's weight(in kg) !!");
const markHeight=prompt("Enter Mark's height(in meter) !!");

const johnMass=prompt("Enter John's weight(in kg) !!");
const johnHeight=prompt("Enter John's height(in meter) !!");

const markBMI=markMass/(markHeight **2);
const johnBMI=johnMass/(johnHeight **2);

console.log(markBMI,johnBMI);
const markHigherBMI=(markBMI>johnBMI);

console.log(markHigherBMI);

//coding challenge #2

if (markBMI>johnBMI) console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
else console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
