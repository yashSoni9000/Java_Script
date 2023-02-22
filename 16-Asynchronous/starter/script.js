'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//Error rendering function
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
  //commented this as we have used it in finally method as it happend independent of the state of promise
};

//Rendering countries
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
  //commented this as we have used it in finally method as it happend independent of the state of promise
};
const getJSON = function (url, errorMsg = 'Something Went wrong') {
  return fetch(url).then(response => {
    // console.log(response);
    if (!response.ok) {
      //throw terminates like return function
      // and if this condition is thrown then the promise is rejected state and goes to catch method
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
    //this is the not optimised way of handeling the chained promised we have
    // to set the below function every where when we do the response.json() so we use catch at the end of all the promised to catch
    //all kinds of errors (line 259)
    // err => alert(err)
  });
};

///////////////////////////////////////
/*
  const getCountryData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    let i = 0;
  if (country === 'india') i = 1;
  request.send();
  //   console.log(this.responseText);

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    //   const data = JSON.parse(this.responseText);
    // we destructue it to get the object in the array
    const data = JSON.parse(this.responseText)[i];
    console.log(data);
    const html = `<article class="country">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('india');
getCountryData('usa');


// when a callback calls another callback and that callback also calls another one then that
// is called a callback hell aka nested callbacks
// to identify a callback hell we starts to see more indentation like a pyramind (e.g. line 100)

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  let i = 0;
  if (country === 'india') i = 1;
  request.send();
  //   console.log(this.responseText);

  request.addEventListener('load', function () {
    //   console.log(this.responseText);
    //   const data = JSON.parse(this.responseText);
    // we destructue it to get the object in the array
    const data = JSON.parse(this.responseText)[i];
    console.log(data);
    //rendering country 1
    renderCountry(data);
    //neighbour country
    const neighbour = data.borders?.[0];
    // console.log(neighbour);
    if (!neighbour) return;
    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      //   console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('india');
// getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 Second Passed');
  setTimeout(() => {
    console.log('2 Second Passed');
    setTimeout(() => {
      console.log('3 Second Passed');
      setTimeout(() => {
        console.log('4 Second Passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

//rendering countries function at the top

//old method of doing requests
// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);

//new method of doing requests
//this return a promise
//promise is a container of future events
// a promise has 2 states accepted and rejected
// in accepted state the .then method is called and in rejection the .catch method is called
// .finally method is called independent of the states i.e. it will get executed no matter what

// const request3 = fetch(`https://restcountries.com/v2/name/india`);
// console.log(request3);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       // console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       // console.log(data);
//       renderCountry(data[0]);
//     });
// };

// At the top there is a function for rendering the error along with render countries

//nice code getting first promise and then that promise is returned again
// for our data

// we are making a helper function which fetches the promise and check for error and return the json promise
// we are using this as we used these features multiple times in the following code

//below code is before using the getJSON function

// const getCountryData = function (country) {
//   //country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       if (!response.ok) {
//         //throw terminates like return function
//         // and if this condition is thrown then the promise is rejected state and goes to catch method
//         throw new Error(`Country Not Found (${response.status})`);
//       }
//       return response.json();
//       //this is the not optimised way of handeling the chained promised we have
//       // to set the below function every where when we do the response.json() so we use catch at the end of all the promised to catch
//       //all kinds of errors
//       // err => alert(err)
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       //condtition for neighbour
//       const neighbour = data[0].borders[0];
//       //if no neighbouring country found
//       if (!neighbour) return;
//       //country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//       // return 23;
//     })
//     // .then(data => alert(data));
//     .then(
//       response => {
//         if (!response.ok)
//           throw new Error(`Country Not Found (${response.status})`);
//         return response.json();
//       }
//       // err => alert(err)
//     )
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       /*instead of showing annoying alert we are console.log the error*/ console.error(
//         `${err} 💥💥💥`
//       );
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!!`);
//     })
//     //the finally method always executes independent of the error or fetching from api
//     // finally method only works as the catch method also return a promise
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
const getCountryData = function (country) {
  //country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, `Country Not Found`)
    .then(data => {
      // console.log(data);
      renderCountry(data[0]);

      //condtition for neighbour
      const neighbour = data[0].borders[0];
      //if no neighbouring country found return
      if (!neighbour) throw new Error(`No Neighbour Found!!`);
      //instead of simply returning we can throw an error which tell that there is no neighbour found
      //country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country Not Found`
      );
      // return 23;
    })
    // .then(data => alert(data));
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      /*instead of showing annoying alert we are console.log the error*/ console.error(
        `${err} 💥💥💥`
      );
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!!`);
    })
    //the finally method always executes independent of the error or fetching from api
    // finally method only works as the catch method also return a promise
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
// btn.addEventListener('click', () => getCountryData('usa'));
// getCountryData('usa');
// getCountryData('spain');

// lets say if we search some random countries as follows then it show the error again

// getCountryData('dffhrif');

// even when there is no country like the above the promise is not rejected ,instead its fullfilled and we get some error
//message of 404 which is not the required message so we use the throw method with the custom error in line 179
// we need to handel errors using catch method so that its convenient for us to find the cause of error

//Coding Challenge #1
console.log(`----Coding Challenge #1----`);
/*
const whereAmI = function (lat, lan) {
  fetch(`https://geocode.xyz/${lat},${lan}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok) throw new Error(`Frequent Requests ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city},${data.country}`);
      return fetch(`https://restcountries.com/v2/name/${data.country}`);
      // getCountryData(`${data.country}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Country Not Found (${response.status})`);
      return response.json();
    })
    .then(data => renderCountry(data[0]))
    //to use the above data we need to set the opacity in both the function back to 1 manually in line 9 and 28
    .catch(err => {
      console.error(`${err}`);
      // renderError(`Something Went Wrong!! ${err}.`);
    });
};
*/
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

//continue lectures

//here the order is that test start and test end will first execute and then promise will execute and then timeout will
// be executed . This is due to the promise which has priority over the call back queue ,that priority queue is known
// as mirco-task queue , this queue  is executed before callbacks can be executed so the promise is executed first and then
// the timeout function's callback was executed

// console.log(`Test Start`); //1
// setTimeout(() => console.log(`0 sec timer`), 0); //4
// Promise.resolve('Resolver Promise 1').then(res => console.log(res)); //3
// Promise.resolve('Resolver Promise 2').then(res => {
//   // for (let i = 0; i < 10000000000; i++) {}
//   console.log(res);
// });

// console.log(`Test End`); //2

// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log(`Lottery Draw is going on!!`);
//   setTimeout(() => {
//     if (Math.random() >= 0.5) resolve(`You WIN!!`);
//     else reject(new Error(`You Lost :(`));
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// a real example of promisifying settimeout function
const wait = function (seconds) {
  return new Promise(function (resolve) {
    // console.log(`Hello`);
    setTimeout(resolve, seconds * 1000);
  });
};
// wait(2)
//   .then(() => {
//     console.log(`I waited for 2 second`);
//     return wait(1);
//   })
//   .then(() => console.log(`I waited for 1 second`));

// we can now rewrite the callback hell settimeout function from line 125
// wait(2)
//   .then(() => {
//     console.log(`1 second passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`2 second passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`3 second passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`4 second passed`);
//     return wait(1);
//   })
//   .then(() => console.log(`5 second passed`));

//the below promise is resolved immediately
// Promise.resolve(`You Winnny!!`).then(res => console.log(res));
// Promise.reject(new Error(`You lost!!`)).catch(res => console.error(res));

//geolocation callback
// navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );

//geolocation promsie

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     //OR
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

//rendering the country based on current coordinates
// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lan } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lan}?geoit=json`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok) throw new Error(`Frequent Requests ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city},${data.country}`);
//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//       // getCountryData(`${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country Not Found (${response.status})`);
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     //to use the above data we need to set the opacity in both the function back to 1 manually in line 9 and 28
//     .catch(err => {
//       console.error(`${err}`);
//       // renderError(`Something Went Wrong!! ${err}.`);
//     });
// };

// btn.addEventListener('click', whereAmI);

//coding challenge #2

const imgContainer = document.querySelector('.images');
console.log(`----Coding Challenge #2`);
const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img');
    image.src = `${imgPath}`;
    image.addEventListener('load', function () {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener('error', function () {
      reject(new Error('Image Not Found!!'));
    });
  });
};

// let currentImage;
// createImage(`img/img-1.jpg`)
//   .then(img => {
//     currentImage = img;
//     console.log(`Image 1 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage(`img/img-2.jpg`);
//   })
//   .then(img => {
//     currentImage = img;
//     console.log(`Image 1 loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lan } = pos.coords;
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lan}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);
    const country = dataGeo.country;
    // console.log(country);
    // fetch(`https://restcountries.com/v2/name/${country}`).then(res=>console.log(res));

    // The above code is same as below code, the difference is that the below code is a lot cleaner and looks synchronous
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    // console.log(res);

    if (!res.ok) throw new Error(`Problem getting country data`);
    const data = await res.json();
    // console.log(data);
    renderCountry(data[1]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.log(err);
    renderError(`!! ${err.message}`);
    // to use this remove the comments from renderError function of opacity

    //Reject promise returned from async function
    throw err;
  }
};

console.log(`1: Will get loaction`);
// const city = whereAmI();
// console.log(city);

//In the below code we handeled the try catch and the async await function  in
//a then and catch method so to remove we made similar code but with async and await

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log(`3: Finished get loaction`));

//async await function
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log(`3: Finished get location`);
})();

// console.log(`FIRST`);
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;// assignment to const variable
// } catch (error) {
//   console.error(error.message);
// }

const get3countries = async function (c1, c2, c3) {
  try {
    const data1 = await getJSON(`https://restcountries.com/v2/name/${c1}`);
  } catch (error) {
    console.error(err);
  }
};
