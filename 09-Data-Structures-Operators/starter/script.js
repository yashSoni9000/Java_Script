'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
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
  },

  menulist: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]]; // sending multiple return values
  },
};

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

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//to give custom name to the objects made

const {
  name: restaurantName,
  openingHours: timing,
  categories: list,
} = restaurant;
console.log(restaurantName, timing, list);
