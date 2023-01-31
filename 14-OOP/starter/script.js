'use strict';

// arrow function does not work in constructor as arrow does not have its own this function
const Person = function (firstName, birthYear) {
  //   console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
  // do not use methods in object as in large code there will be many copies of it
  //   this.calcAge=function(){
  //     console.log(2037-this.birthYear);
  //   }
};
const yash = new Person('Yash', 2002);
// console.log(yash);
//new empty object is created when we use the 'new' keyword
const hemu = new Person('Hemlata', 1980);
// console.log(hemu);
// console.log(yash instanceof Person);

//Prototypes

console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

yash.calcAge();
