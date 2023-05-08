import './style.css';
import Icon from './search.svg';
import Icon2 from './map-pin.svg';



const input = document.querySelector('header > form');

const container = document.querySelector('.container');

const place = document.querySelector('header > .place');

input.addEventListener("submit" , (e) =>{
    e.preventDefault();
    console.log('clicked');
    searchCity(e.target.search.value);
})




async function searchCity(wantedCity){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=2da0f8773d1c4907a59141407230605&q=${wantedCity}`, {mode: 'cors'});
    const data = await response.json();
    console.log(data.current.temp_c);
    container.innerHTML =
    `<div class="city">`+
        `<h2 class="city-name">`+
            `<span>${data.location.name}</span>`+
            `<sup>${data.location.country}</sup>`+
        `</h2>`+
        `<div class="city-temp">${data.current.temp_c}<sup>°C</sup></div>`+
        `<div class="info">`
    +`<img class="city-icon" src="${data.current.condition.icon}" alt="${data.current.condition.text}">`;


    place.innerHTML = `<img src="8c41fcd32a6421026061.svg" alt="location"><h1> ${data.location.name} </h1>` + '    , ' + `<h2> ${data.location.country}</h2>`;


}



searchCity('dublin');


