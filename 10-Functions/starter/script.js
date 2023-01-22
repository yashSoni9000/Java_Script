'use strict';

const bookings = [];

// in js the function are treates as values
// fucntions are type of objects in js and since objects are values thus functions too
// higher order functions are those which either receives or returns another function

//in js there is no call by reference althought we pass reference of object but it still acts as values of that memory address
// in short there is not thing called call by reference in js

//dynamically getting default values
const createBooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger
) {
  //   numPassenger ??= 1; //old method
  //   price ??= 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800); // we can not skip the arguments
//instead we can set the argument which we want to skip as undefined
createBooking('LH123', undefined, 800); // we can not skip the arguments

const flight = 'LH123';
const yash = {
  name: 'Yash Soni',
  passport: 6969696969,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 6969696969) {
    alert('Check In');
  } else alert('Wrong Passport!!');
};

// checkIn(flight, yash);
console.log(flight, yash);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};
newPassport(yash);
// checkIn(flight, yash);

//higher order function

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  console.log(first, other);
  return [first.toUpperCase(), ...other].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// the passed functions which are here treated as normal word are callback functions i.e they will be called later in the transformer function
//it just seems as a name but it is a call back function

const high5 = function () {
  console.log('👋');
};
document.body.addEventListener('click', high5);

['Yash', 'mumma', 'papa'].forEach(high5);

//first class functions
const add = (num1, num2) => console.log(num1 + num2);
const sub = (num1, num2) => console.log(num1 - num2);

// higher class function where abstraction is done
const getNum = function (num1, num2, op) {
  op(num1, num2);
};

//here add and sub are the call back functions which are called later in the getNum function
getNum(3, 2, add);
getNum(3, 2, sub);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//re-writing the above function in arrow function
const greet = greeting => name => console.log(`${greeting} ${name}`);

greet('Yo !! Sup... '); //  this functions returns a function so now we can store it in another variable which then will be treated as function
const greetsMe = greet('Yo !! Sup... ');

// the above line can also be written as
// const greetsMe=function (name) {
//     console.log(`${greeting} ${name}`);
// };
// this functions is the same as the nest function in greet
// and now we can call this greetsMe function with parameters to get the output
greetsMe('yash');

// we also call the nested functions above in another way as follows
greet('Yo !! Sup... ')('hemu');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  // new syntax of writing functions in objects
  // instead of book:function(){}
  // we use
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(696, 'yash');
lufthansa.book(900, 'hemu');
console.log(lufthansa);

const eurowing = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
console.log(eurowing);

//notice that we are copying the a function from lufthansa object and then calling that object
// but it shows an error that it can not read properties as its undefines
// at book function in the lufthansa object
// this is because of the 'this' keyword which we used in the lufthansa object and we know that this keyword depends on how the function is actually called
// here an external function call it so it does not have a thing to point to so it points towards undefined and shows us the error

const books = lufthansa.book;

// book(69420, 'Papa');// does not work

// in the above code the 'this' keyword was pointing to the lufthansa object but we want that to point to eurowing object so we can do that by
//using  methods of function ( remember that function is and object and objects have methods) . There are 3 types of methods of function
// call, apply and bind
// we will use call method to solve the above problem here
// call method first argument is that where should the 'this' keyword point to

books.call(eurowing, 23, 'Papa');
console.log(eurowing);

books.call(lufthansa, 333, 'Papa op chat');

// the apply method does the same thing but insted of taking list of arguments it passes array as argument
const flightData = [999, 'Hello']; // if we use 000 as in index 0 then it show error as strict mode does not allow octal values

books.apply(eurowing, flightData);
console.log(eurowing);

// we generally do not use apply method as we can do the same task using the call method by using the spread operator as follows

books.call(lufthansa, ...flightData);

// Bind Function
// this method set/make a new function in which the whole new function's 'this' keyword points to that new object
const bookEW = books.bind(eurowing); // a new function is made using bind
bookEW(111, 'Mixed bag'); // normal calling with the new function like we did originally

// we can also put the arguments by default in bind method as follows

const bookEW23 = books.bind(eurowing, 23); //pre-setting 23
bookEW23('Deez N'); //  here we only needed to pass the name , the flight no is pre-set

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); //gives ans as NaN
// console.log(lufthansa);

// the unusual answer is due to property of 'this' keyword which is that in an event handler function the 'this' keyword always points to the element on which the handler is attached to
// in above case the 'this' keyword points to the button element and not the lufthansa object so we need a method to change it . We can use bind for that

// in simple terms the addEventListener is calling the function therefore it returns the button element
// if we call the function with the lufthansa object it will work fine
// ex lufthansa.buyPlane() // works ✅
// so we use the bind function to change the 'this' to the lufthansa with bind method
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// we used bind method because we dont need to call the function right away , we only need it when the button is clicked so we used bind so it creates a seprate function where the 'this' keyword points to the
// lufthansa object and called when clicked

// we can also use bind method even when there is no 'this' keyword
// an example is given below

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23); // this line is same as line like below
// // addVAT=value=> value+value*0.23;

// console.log(addVAT(100));

const addTax = rate => value => value + value * rate;
// console.log(addTax(100)(2));
// OR

const addVat2 = addTax(0.23);
console.log(addVat2(100));

// Coding Challenge #1

console.log('-----Coding Challenge #1------');

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const ans = Number(
      prompt(`${this.question}\n${this.options.join('\r\n')}`)
    );
    if (ans > 3) alert('Invalid Input !!');
    else {
      this.answers[ans]++;
      //   console.log(this.answers);
    }
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      //   alert(
      //     `Poll results are ${this.answers[0]},${this.answers[1]},${this.answers[2]},${this.answers[3]}`
      //   );
      console.log(`Poll Results are ${this.answers.join(', ')}`);
    } else if (type === 'array') console.log(this.answers);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [1, 5, 3, 9, 6] }, 'string');
// here we used call method and passed a new object and in which we passed a new array
// we simply can not pass an array as the first parameter is always an object

// some times we want a function to execute only once ever
// to do this we use Immediately Invoked Function Expression IIFE

(function () {
  console.log(`This will never run again`);
})();
(() => console.log(`This will also never run again`))();

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

// firstly it sounds obvious that the inner function know as booker can access the passengerCount variable but its not as straight forward

//closure has priority over scope chain i.e.it first looks in closue and then in the scope chain for a scope variable
const booker = secureBooking();
booker();
booker();
booker();

// this is how closures works
// a function has access to the variable environment of the
// execution context in which it was created
// refer to the notes in course pinned in section 10 in closure video @10:50 time

console.dir(booker);

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  // setTimeout is a call back function i.e. it is called later after a certain period of time but the last console log line (`Will....`) is
  // printed first which shows that the function was executed before the execution of setTimeout and thus closures were used
  setTimeout(() => {
    console.log(`We are now boadring all ${n} passengers`);
    console.log(`There are 3 group , each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);

// Coding Challenge #2

console.log('------Coding Challenge #2-------');

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', () => (header.style.color = 'blue'));
})();
