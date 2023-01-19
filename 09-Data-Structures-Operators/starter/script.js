'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

// const person = { firstName: 'Yash', lastName: 'Soni', age: 20 };
// console.log(person);

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  menulist: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]; // sending multiple return values
  },
  orderMaggi: function (ing1, ing2, ing3) {
    console.log(`Your maggi is ready with ${ing1},${ing2} and ${ing3}`);
  },
};

const myPC = [{ name: 'Yash', email: 'ys77357@gmail.com' }];
// const myPC = [{ email: 'ys77357@gmail.com' }];

// using the optional chaining
console.log(myPC[0]?.name ?? 'No user Exists !!');

//using for of loop to iterate through  nested objects
for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`The hotel opens on ${day} from ${open} to ${close} :)`);
}

const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c);
console.log(arr);

// const [first, second] = restaurant.categories;
// console.log(first, second);
let [main, , secondary] = restaurant.categories; //leaving a blank space means we are skipping that particular element
console.log(main, secondary);

// switching variable without using temp variable
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.menulist(0, 0));
const [starter, mainMenu] = restaurant.menulist(0, 0);
console.log(starter, mainMenu);

const nested = [2, 3, [4, 5]]; // nested array
const [x, y, [i, j]] = nested;
console.log(x, y, i, j); //nested destructuring

// const [p,q,r]=[8,9];//default values destructuring without initialization
//here r will be undefined
const [p = 1, q = 1, r = 1] = [8, 9]; //default values destructuring initialization
// r will  be initialized with 1 so the value of p ,q,r are 8,9,1 respectively

// object destructuring

const { name, startingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//to give custom name to the objects made

const {
  name: restaurantName,
  openingHours: timing,
  categories: list,
} = restaurant;
console.log(restaurantName, timing, list);

const bucket = [7, 8, 9];
const tub = [1, 2, 3, 4, 5, 6, ...bucket]; //the ... operator pops the elements from previous array and put those elements in new array instead of putting whole array in another array
console.log(tub);
// we can use ... aka spread operator to destructure the array values
console.log(...tub);

// we can also add new elements to a array by creating new array without copying each element individually by using ...
const newMenu = [...restaurant.mainMenu, 'Idli'];
console.log(newMenu);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(...menu);

//making a maggi
const maggiIndgredinets = ['water', 'spice', 'noodle'];
console.log(...maggiIndgredinets);
restaurant.orderMaggi(...maggiIndgredinets);

const [pasta, ...otherDishes] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pasta);
console.log(otherDishes);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

const ans1 = add(2, 3);
const ans2 = add(6, 9, 6, 9);
const ans3 = add(1, 1, 2, 9, 2, 2);

console.log(ans1);
console.log(ans2);
console.log(ans3);

restaurant.numGuests = 69;
restaurant.numGuests = 0;

console.log(restaurant.numGuests || 10);
console.log(restaurant.numGuests ?? 10); //nullish coalescing operator only returns or evaluates next operator if its undefined or null else it allows on 0 and ''

const rest1 = {
  name: 'Hello Pizza',
  noOfCustomer: 69,
};
const rest2 = {
  name: 'my my momo',
  owner: 'stfu',
};

const menuList = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const iterator of menuList) {
  console.log(iterator);
}

// rest1.noOfCustomer=rest1.noOfCustomer||10;
// rest2.noOfCustomer=rest2.noOfCustomer||10;

// console.log(rest1.noOfCustomer);
// console.log(rest2.noOfCustomer);

//better way of doing above operation is
// rest1.noOfCustomer ||= 10;
// rest2.noOfCustomer ||= 10;

// console.log(rest1.noOfCustomer);
// console.log(rest2.noOfCustomer);

// if we want to be more precise we can use the nullish operator to avoid bugs

rest1.noOfCustomer ??= 10;
rest2.noOfCustomer ??= 10;

console.log(rest1.noOfCustomer);
console.log(rest2.noOfCustomer);

//---------------------------
//coding challenge #1

console.log('-----Coding Challenge #1-------');
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
const [gk, ...fieldPlayers] = player1;
// const allPlayers = [...game.players[0], ...game.players[1]];
const allPlayers = [...player1, ...player2];
const finalPlayer1 = ['Thiago', 'Coutinho', 'Perisic', ...player1];
const { team1: team1, x: draw, team2: team2 } = game.odds;
const printGoals = function (...playerNames) {
  console.log(`${playerNames.length} goals were scored !!`);
  for (let i = 0; i < playerNames.length; i++) {
    console.log(playerNames[i]);
  }
};
team1 > team2 && console.log('Team 2 has more chances of winning');
team1 < team2 && console.log('Team 1 has more chances of winning');
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...player1, ...player2);
// printGoals(...game.scored);

// console.log(team1, draw, team2);
// console.log(allPlayers);
// console.log(finalPlayer1);
// console.log(gk, fieldPlayers);
// const [gk] = game.players[[0]];
// const [fieldPlayers] = game.players[[]];
// console.log(gk, fieldPlayers);

// const [allPlayers] = [...game.players];
// console.log(allPlayers);

//----------------------
//coding challenge #2

console.log('-----Coding Challenge #2-------');

const scoring = game.scored.entries();
for (const [i, item] of scoring) {
  console.log(`Goal ${i + 1} :${item}`);
}

let average = 0;
const oddss = Object.values(game.odds);
for (const odd of oddss) {
  average += odd;
  average /= oddss.length;
  console.log(average);
}

for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}

// sets in js

// we can not access elements elements like we can in array
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Bread',
  'Pasta',
  'Pizza',
]);
console.log(...orderSet);

// console.log(new Set('Yaash'));
console.log(new Set('Yash')); // both print same output

console.log(orderSet.size);
console.log(orderSet.has('pizza')); //case sensetive parameters
console.log(orderSet.has('Pizza')); //case sensetive parameters
console.log(orderSet.has('corn'));
console.log(orderSet.add('japaeno'));
orderSet.delete('Pizza'); // if we cl this we will get a bool value, if it exists then return true and deletes else prints false
console.log(orderSet);
// orderSet.clear();
// console.log(orderSet);

for (const order of orderSet) {
  console.log(order);
}

const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);

// OR we can do like this if we want to get unique value from array

console.log(new Set(['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter']).size);
// same we can do with the strings as well
console.log(new Set('yashsoni').size); // spaces are also include as unique values

const rest = new Map();
rest.set('name', 'Big Food');
rest.set(1, 'Pututu');
console.log(rest.set(2, 'Eater'));

rest
  .set('categories', ['Delhi', 'jaipur', 'ahemdabad'])
  .set('open', 11)
  .set('close', 22)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));
console.log(rest);

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('open'));

console.log(rest.has('categories'));
rest.delete(2);

console.log(rest);
rest.set([1, 2], 'Hello');
console.log(rest);

const question = new Map([
  ['question', 'What is the best programming language'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);

console.log(question); //show the whole map
console.log(Object.entries(openingHours));
const hourMap = new Map(Object.entries(openingHours));
console.log(hourMap);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answerr ${key}:${value}`);
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(answer ? question.get(true) : question.get(false));
//OR
// console.log(question.get(question.get('correct') === answer));

// to convert maps to array
console.log([...question]);

// coding challenge #3
console.log('Coding Challenge #3');
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

const events = new Set([...gameEvents.values()]);
console.log(...events);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

for (const [key, value] of gameEvents) {
  console.log(
    key <= 45
      ? `[FIRST HALF] ${key}: ${value}`
      : `[SECOND HALF] ${key}: ${value}`
  );
}
