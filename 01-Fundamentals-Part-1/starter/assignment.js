const country ="India";
const continent="Asia";
let population =1417;

// country="Findland"; this throws an error as const can not be changed later
console.log(country);
console.log(continent);
console.log(population+" million");

const isIsland=false;
const language="Hindi";

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

const halfPopulation=population/2;
console.log(halfPopulation);

population++;
console.log(population);

const finlandPopulation=6
const isGreaterPopulation=population>finlandPopulation;
console.log(isGreaterPopulation);

const avgPopulation=33;
console.log(population<avgPopulation);

const description =country+" is in "+continent+", and its "+population+" population "+" people speak "+language;
console.log(description);

