// // coding challenge 1
// const calcAverage= (a,b,c)=> (a+b+c)/3;

// let avgDolphins=calcAverage(44,23,71);
// let avgKoalas=calcAverage(65,54,49);

// const checkWinner=(davg,kavg)=>{
//     if (davg>=2*kavg) {
//         console.log(`Team Dolphin win(${davg} vs. ${kavg})`);
//     } else if(kavg>=2*davg){
//         console.log(`Team Koalas win(${kavg} vs. ${davg})`);
//     }
//     else console.log(`No team wins :/ `);
// }

// checkWinner(avgDolphins,avgKoalas);

// //coding challenge 2

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;
// };

// // const ans = calcTip(100);
// // console.log(ans);

// const bills = [125, 555, 44];
// const tips = [0];
// tips[0] = calcTip(bills[0]);
// tips[1] = calcTip(bills[1]);
// tips[2] = calcTip(bills[2]);
// const total = [0];
// total[0] = tips[0] + bills[0];
// total[1] = tips[1] + bills[1];
// total[2] = tips[2] + bills[2];
// console.log(total);

// const yash = {
//   name: "yash soni",
//   noOfFriends: 3,
//   bestFriend: "Myself",
// };
// console.log(
//   `${yash.name} has ${yash.noOfFriends}, and his best friend is ${yash.bestFriend}`
// );

// // coding challenge 3
// const Mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };
// const John = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };
// const bmi = Mark.calcBMI();
// const bmi1 = John.calcBMI();
// console.log(bmi);
// console.log(bmi1);
// console.log(
//   `${Mark.fullName}'s BMI (${bmi}) is ${
//     Mark.calcBMI > John.calcBMI ? "Less" : "Higher"
//   } than ${John.fullName}'s (${bmi1})`
// );
