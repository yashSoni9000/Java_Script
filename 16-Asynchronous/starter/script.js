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
const getJSON = function (url, errorMsg = 'Something Went wrong') {
  return fetch(url).then(response => {
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

//below code is before using the getJSON funtion

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
//       //all kinds of errors (line 211)
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
btn.addEventListener('click', () => getCountryData('usa'));
// getCountryData('usa');
// getCountryData('spain');

// lets say if we search some random countries as follows then it show the error again
getCountryData('dffhrif');
// even when there is no country like the above the promise is not rejected ,instead its fullfilled and we get some error
//message of 404 which is not the required message so we use the throw method with the custom error in line 179
// we need to handel errors using catch method so that its convenient for us to find the cause of error
