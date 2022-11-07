// let a="Hello world";

// if(a==="Hello world") alert("Yayyy!!");

// let isProfession="Coder";
// console.log(69+69);


//the are 3 types of variables let ,const and var
//let allows us to change the values stored in it at a later point of time
// let age=20;
// age=21;
// console.log(age);

//but const type dosent allow the values to be changed in the program
// const birthyear=2002;
//birthyear=2003;//error thrown
//also empty const variables are also not legal as this dosent make sense to undefine a constant

// const and let are modern js functions i.e. ES6

//one thing to note is that we should use const as much as possible because mutation(changing values) may generated bugs
//use let only if you are sure that you need to change the values in that variable

//we can declare a variable without using let, const or var but its a terrible idea as it declares them globally
// const now=2040;
// const ageYash=now-2020;
// const ageMumma=now-2022;
// console.log(ageYash,ageMumma);
// console.log(ageYash*2,ageMumma/2,2**3);
//2**3 equal is 2 to power 3

// const firstName="Yash";
// const lastName="Soni";
// console.log(firstName+" "+lastName);

// let x=10+5;
// x+=10;
// x*=10;
//x++;
//x--;
// console.log(x);

// console.log(ageYash>ageMumma);
// console.log(ageMumma<20);

// const isFullAge=ageMumma<18;
// console.log(now-2000>now-2002)

// const firstName="Yash";
// const job="Student";
// const birthYear=2002;
// const currentYear=2022;
// const yash="I'm "+firstName+" a "+ (currentYear-birthyear)+" year old "+ job + " !!";
// console.log(yash);

// const yashNew=`I'm ${firstName}, a ${currentYear-birthYear} year old ${job}`;
// console.log(yashNew);

// console.log('String with \n\
// multiple \n\
// lines')

// console.log(`String with
// multiple 
// lines`)

// const age=15;
// const isOldEnough= age>=18;
// if(isOldEnough) console.log("Yay!! start driving")
// if(age>=18) console.log("Yay!! start driving")
// else console.log(`You need to wait ${18-age} years to get license`)

