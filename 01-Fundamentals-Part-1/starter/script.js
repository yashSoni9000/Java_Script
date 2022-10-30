// let a="Hello world";

// if(a==="Hello world") alert("Yayyy!!");

// let isProfession="Coder";
// console.log(69+69);


//the are 3 types of variables let ,const and var
//let allows us to change the values stored in it at a later point of time
let age=20;
age=21;
console.log(age);

//but const type dosent allow the values to be changed in the program
const birthyear=2002;
//birthyear=2003;//error thrown
//also empty const variables are also not legal as this dosent make sense to undefine a constant

// const and let are modern js functions i.e. ES6

//one thing to note is that we should use const as much as possible because mutation(changing values) may generated bugs
//use let only if you are sure that you need to change the values in that variable

//we can declare a variable without using let, const or var but its a terrible idea as it declares them globally
