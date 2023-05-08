import './style.css';
import Icon from './search.svg';
import Icon2 from './map-pin.svg';
import githubLogo from './icons8-github.svg';



const input = document.querySelector('header > form');

const place = document.querySelector('header > .place');

const date = document.querySelector('header > .date');

const today = document.querySelector('.today');

const tomorrow = document.querySelector('.tomorrow');

const afterTomorrow = document.querySelector('.after_tomorrow');



input.addEventListener("submit" , (e) =>{
    e.preventDefault();
    searchCity(e.target.search.value);
})




async function searchCity(wantedCity){
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2da0f8773d1c4907a59141407230605&q=${wantedCity}&days=3&aqi=no&alerts=no`, {mode: 'cors'});
    const data = await response.json();


    place.innerHTML = `<img src="8c41fcd32a6421026061.svg" alt="location"><h1> ${data.location.name} </h1>` +
        ', ' + `<h2> ${data.location.country}</h2>`;

    date.innerHTML = `<h2> ${data.location.localtime}</h2>`;

    today.innerHTML =
        `<div class="city-time" style="border-bottom: 1px solid white">Now</div>`+
        `<div class="city-text">${data.current.condition.text}</div>`+
        `<div class="city-temp">${data.current.temp_c}<sup>°C</sup></div>`+
        `<img class="city-icon" src="${data.current.condition.icon}" alt="${data.current.condition.text}">`;

    tomorrow.innerHTML =
        `<div class="city-time">Tomorrow</div>`+
        `<div class="city-text">${data.forecast.forecastday[1].day.condition.text}</div>`+
        `<div class="city-temp">${data.forecast.forecastday[1].day.avgtemp_c}<sup>°C</sup></div>`+
        `<img class="city-icon" src="${data.forecast.forecastday[1].day.condition.icon}" alt="${data.forecast.forecastday[1].day.condition.text}">`;

    afterTomorrow.innerHTML =
        `<div class="city-time">Overmorrow</div>`+
        `<div class="city-text">${data.forecast.forecastday[2].day.condition.text}</div>`+
        `<div class="city-temp">${data.forecast.forecastday[2].day.avgtemp_c}<sup>°C</sup></div>`+
        `<img class="city-icon" src="${data.forecast.forecastday[2].day.condition.icon}" alt="${data.forecast.forecastday[2].day.condition.text}">`;


}



searchCity('dublin');


