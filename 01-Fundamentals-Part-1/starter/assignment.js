const country = "India";
const continent = "Asia";
let population = 1417;

// country="Findland"; this throws an error as const can not be changed later
console.log(country);
console.log(continent);
console.log(population + " million");

const isIsland = false;
const language = "Hindi";

console.log(typeof country);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

const halfPopulation = population / 2;
console.log(halfPopulation);

population++;
console.log(population);

const finlandPopulation = 6;
const isGreaterPopulation = population > finlandPopulation;
console.log(isGreaterPopulation);

const avgPopulation = 33;
console.log(population < avgPopulation);

const description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " population" +
  " people speak " +
  language;
console.log(description);

console.log(
  `${country} is in ${continent}, and its ${population} population people speak ${language}`
);

if (population > 33) console.log(`${country}'s population is above average`);
else
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );

// console.log('9' - '5'); //4
// console.log('19' - '13' + '17');//617
// console.log('19' - '13' + 17);//617 ans=23
// console.log('123' < 57);// true ans =false
// console.log(5 + 6 + '4' + 9 - 4 - 2);//1143

// const numNeighbours=prompt("How many neighbour countries does your country have?");
// const numNeighbours=Number(prompt("How many neighbour countries does your country have?"));

// if (numNeighbours===1) console.log(`Only 1 border`);
// else if (numNeighbours>1) console.log(`More than 1 neighbour`);
// else console.log(`No borders`);

// if(language==='English' && population<50 && isIsland) console.log(`You should live in ${country} :)`);
// else console.log(`${country} does not meet your criteria :(` );

// coding challenge #1

// const markMass=prompt("Enter Mark's weight(in kg) !!");
// const markHeight=prompt("Enter Mark's height(in meter) !!");

// const johnMass=prompt("Enter John's weight(in kg) !!");
// const johnHeight=prompt("Enter John's height(in meter) !!");

// const markBMI=markMass/(markHeight **2);
// const johnBMI=johnMass/(johnHeight **2);

// console.log(markBMI,johnBMI);
// const markHigherBMI=(markBMI>johnBMI);

// console.log(markHigherBMI);

// //coding challenge #2

// if (markBMI>johnBMI) console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// else console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);

//coding challenge #3

// const round1TeamDolphins=96;
// const round2TeamDolphins=112;
// const round3TeamDolphins=101;

// const round1TeamKoalas=88;
// const round2TeamKoalas=91;
// const round3TeamKoalas=110;

// const avgTeamDolphin=(round1TeamDolphins+round2TeamDolphins+round3TeamDolphins)/3;
// const avgTeamKoalas=(round1TeamKoalas+round2TeamKoalas+round3TeamKoalas)/3;

// if(avgTeamDolphin>avgTeamKoalas &&avgTeamDolphin>=100) console.log(`Team Dolphin Wins!!`);
// else if(avgTeamKoalas>=100) console.log(`Team Koalas Wins!!`);
// else if(avgTeamDolphin===avgTeamKoalas &&avgTeamDolphin>=100) console.log(`It's a Draw!! `);

//coding challenge #4

const bill = 300;
console.log(bill >= 20 && bill <= 300 ? 0.15 + bill : 0.2 + bill);
