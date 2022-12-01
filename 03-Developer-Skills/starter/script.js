// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const printForecast = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]} degree Celsius in day ${i + 1}`);
  }
};

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
