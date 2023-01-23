'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = ' ';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}
        </div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;
    // the below method is used to insert elements in a container
    // it has 2 arguments first where to insert and second is what to insert
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} €`;
};
calcDisplayBalance(account1.movements);

const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, interest) => acc + interest, 0);
  labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummary(account1.movements);

// const user = 'Kailash Chandra Soni';

// const createUserNames = user =>
//   user
//     .toLowerCase()
//     .split(' ')
//     .map(first => first[0])
//     .join('');
const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(first => first[0])
      .join('');
  });
};

// console.log(createUserNames('Kailash Chandra Soni'));
createUserNames(accounts);
console.log(accounts);
// console.log(userName);
// console.log(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
// creates a shallow copy of the array like the spread operator
// second parameter gives us option to where to delete till the element in array
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));

//splice
// it mutates the original array
// here the second parameter shows how many elements to delete from the given position as mentioned in line no 94
console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
console.log(arr.splice(1, 2));

// reverese
// it mutates the original array
// gives the reverse of the string
arr = ['a', 'b', 'c', 'd', 'e'];
const arr1 = ['k', 'j', 'i', 'h', 'g', 'f'];
console.log(arr1.reverse());
console.log(arr1);

// concat
// it does NOT mutates the original array
// make 2 strings connected
const letters = arr.concat(arr1);
console.log(letters);
// OR
console.log([...arr, ...arr1]);

//join
// it mutates the original array
// joins the elements of the array with the given item or number or string
console.log(letters.join(' - '));

// at
const arr2 = [23, 11, 63];

//traditonal method
console.log(arr2[0]);
console.log(arr2[arr2.length - 1]); // if we want the last index
console.log(arr2.slice(-1)[0]);

// modern at method
console.log(arr2.at(0));
console.log(arr2.at(-1)); // to access the last element in array

// at method also works on string

console.log('yash'.at(0));
console.log('yash'.at(-1));

//for each
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//traditional method
for (const movement of movements) {
  if (movement > 0) console.log(`You deposited ${movement}$`);
  else console.log(`You withdrew ${Math.abs(movement)}$`);
}

//for each is a higher order function which has callback function in it
// and it call for each value in array
// in the callback function it take 3 arguments which are the value , the index and the array. We can use the index from these arguments
console.log('----FOREACH----');
// break statements do not work in for each loop
// movements.forEach(function (movement) {
//   if (movement > 0) console.log(`You deposited ${movement}$`);
//   else console.log(`You withdrew ${Math.abs(movement)}$`);
// });
movements.forEach(function (movement, i) {
  if (movement > 0) console.log(`Number ${i + 1}: You deposited ${movement}$`);
  else console.log(`Number ${i + 1}: You withdrew ${Math.abs(movement)}$`);
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//for each for map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//for each for set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'INR']);
console.log(currenciesUnique);

// '_' is a throw away variable
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});

//Coding Challenge #1

console.log(`----Coding Challenge #1----`);

const juliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const correctedDogsJulia = dogsJulia.slice(1, 3);
  // console.log(correctedDogsJulia);
  // console.log(dogsJulia);
  const allDogs = correctedDogsJulia.concat(dogsKate);
  allDogs.forEach((dogYear, index) => {
    if (dogYear < 3) console.log(`Dog number ${index + 1} is still a puppy`);
    else
      console.log(
        `Dog number ${index + 1} is an adult, and is ${dogYear} years old`
      );
  });
};

checkDogs(juliaData, kateData);

// map for iteration
// create a new array based on the given operation

const inrToUsd = 0.012;
const convertedRupee = movements.map(value => Math.abs(value) * inrToUsd);
console.log(convertedRupee);

//filter method
// create a new array
// can also return boolean values and then create new array
const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

//reduce method
// this method has 3 parametes which are accumulator , the current value and the inital value of accumulator asked at the end of reduce method
const balance = movements.reduce((acc, cur, i) => acc + cur, 0);
console.log(balance);

//Maximum value of array
const maxValue = movements.reduce((acc, val) => {
  if (val > acc) acc = val;
  return acc;
}, movements[0]);
console.log(maxValue);

//Coding Challenge #2

console.log('----Coding Challenge #2----');

const calcAverageHumanAge = ages => {
  let humanAge = ages
    .map(dogAge => {
      if (dogAge <= 2) return 2 * dogAge;
      else return 16 + 4 * dogAge;
    })
    .filter(ages => ages >= 18)
    .reduce((acc, val, i, arr) => acc + val / arr.length, 0);
  // console.log(typeof humanAge);
  console.log(humanAge);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

//find method
// this find the first element which satisfy the condition
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
