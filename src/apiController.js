const place = document.querySelector('header > .place');
const date = document.querySelector('header > .date');
const today = document.querySelector('.today');
const tomorrow = document.querySelector('.tomorrow');
const afterTomorrow = document.querySelector('.after_tomorrow');
const details = document.querySelector('.details');
const hours = document.querySelector('.hours');

export async function searchCity(wantedCity){
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

    details.innerHTML =
        `<div class="details-item"><img src="3f4fcca9a253990f6a68.svg" alt="thermometer" style="margin-right: 0.5rem">Feels like: ${data.current.feelslike_c}<sup>°C</sup></div>`+
        `<div class="details-item"><img src="d2a4a1fe8ac82ef136c5.svg" alt="wind" style="margin-right: 0.5rem">Wind: ${data.current.wind_kph} km/h</div>`+
        `<div class="details-item"><img src="49d3b1343e88b01d4777.svg" alt="droplet" style="margin-right: 0.5rem">Humidity: ${data.current.humidity} %</div>`+
        `<div class="details-item"><img src="d2464f1a0526d4c55e65.svg" alt="cloud-rain" style="margin-right: 0.5rem">Chance of rain: ${data.forecast.forecastday[0].day.daily_chance_of_rain} %</div>`

    hours.innerHTML =
        `<div class="hour-item first-hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[0].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[0].condition.icon}" alt="${data.forecast.forecastday[0].hour[0].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[0].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[1].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[1].condition.icon}" alt="${data.forecast.forecastday[0].hour[1].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[1].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[2].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[2].condition.icon}" alt="${data.forecast.forecastday[0].hour[2].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[2].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[3].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[3].condition.icon}" alt="${data.forecast.forecastday[0].hour[3].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[3].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[4].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[4].condition.icon}" alt="${data.forecast.forecastday[0].hour[4].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[4].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[5].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[5].condition.icon}" alt="${data.forecast.forecastday[0].hour[5].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[5].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[6].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[6].condition.icon}" alt="${data.forecast.forecastday[0].hour[6].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[6].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[7].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[7].condition.icon}" alt="${data.forecast.forecastday[0].hour[7].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[7].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[8].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[8].condition.icon}" alt="${data.forecast.forecastday[0].hour[8].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[8].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[9].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[9].condition.icon}" alt="${data.forecast.forecastday[0].hour[9].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[9].temp_c}<sup>°C</sup></div></div>`+

        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[0].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[0].condition.icon}" alt="${data.forecast.forecastday[0].hour[0].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[0].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[1].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[1].condition.icon}" alt="${data.forecast.forecastday[0].hour[1].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[1].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[2].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[2].condition.icon}" alt="${data.forecast.forecastday[0].hour[2].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[2].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[3].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[3].condition.icon}" alt="${data.forecast.forecastday[0].hour[3].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[3].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[4].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[4].condition.icon}" alt="${data.forecast.forecastday[0].hour[4].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[4].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[5].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[5].condition.icon}" alt="${data.forecast.forecastday[0].hour[5].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[5].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[6].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[6].condition.icon}" alt="${data.forecast.forecastday[0].hour[6].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[6].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[7].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[7].condition.icon}" alt="${data.forecast.forecastday[0].hour[7].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[7].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[8].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[8].condition.icon}" alt="${data.forecast.forecastday[0].hour[8].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[8].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[9].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[9].condition.icon}" alt="${data.forecast.forecastday[0].hour[9].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[9].temp_c}<sup>°C</sup></div></div>`+

        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[4].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[4].condition.icon}" alt="${data.forecast.forecastday[0].hour[4].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[4].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[5].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[5].condition.icon}" alt="${data.forecast.forecastday[0].hour[5].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[5].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[6].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[6].condition.icon}" alt="${data.forecast.forecastday[0].hour[6].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[6].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[7].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[7].condition.icon}" alt="${data.forecast.forecastday[0].hour[7].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[7].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[8].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[8].condition.icon}" alt="${data.forecast.forecastday[0].hour[8].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[8].temp_c}<sup>°C</sup></div></div>`+
        `<div class="hour-item"><div class="hour-time">${data.forecast.forecastday[0].hour[9].time.slice(11,16)}</div><img class="hour-icon" src="${data.forecast.forecastday[0].hour[9].condition.icon}" alt="${data.forecast.forecastday[0].hour[9].condition.text}"><div class="hour-temp">${data.forecast.forecastday[0].hour[9].temp_c}<sup>°C</sup></div></div>`;



}

const firstCity_left = document.querySelector('.city1 > .left');
const firstCity_right = document.querySelector('.city1 > .right');
const secondCity_left = document.querySelector('.city2 > .left');
const secondCity_right = document.querySelector('.city2 > .right');
const thirdCity_left = document.querySelector('.city3 > .left');
const thirdCity_right = document.querySelector('.city3 > .right');

export async function otherCity(city1, city2, city3) {
    const response1 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2da0f8773d1c4907a59141407230605&q=${city1}&days=3&aqi=no&alerts=no`, {mode: 'cors'});
    const data1 = await response1.json();
    const response2 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2da0f8773d1c4907a59141407230605&q=${city2}&days=3&aqi=no&alerts=no`, {mode: 'cors'});
    const data2 = await response2.json();
    const response3 = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2da0f8773d1c4907a59141407230605&q=${city3}&days=3&aqi=no&alerts=no`, {mode: 'cors'});
    const data3 = await response3.json();


    firstCity_left.innerHTML =
        `<div class="other_city-time" >${data1.location.name}</div>`+
        `<div class="other_city-text">${data1.current.condition.text}</div>`
    firstCity_right.innerHTML =
        `<img class="other_city-icon" src="${data1.current.condition.icon}" alt="${data1.current.condition.text}">`+
        `<div class="other_city-temp">${data1.current.temp_c}<sup>°C</sup></div>`;


    secondCity_left.innerHTML =
        `<div class="other_city-time">${data2.location.name}</div>`+
        `<div class="other_city-text">${data2.current.condition.text}</div>`
    secondCity_right.innerHTML =
        `<img class="other_city-icon" src="${data2.current.condition.icon}" alt="${data2.current.condition.text}">`+
        `<div class="other_city-temp">${data2.current.temp_c}<sup>°C</sup></div>`;


    thirdCity_left.innerHTML =
        `<div class="other_city-time">${data3.location.name}</div>`+
        `<div class="other_city-text">${data3.current.condition.text}</div>`
    thirdCity_right.innerHTML =
        `<img class="other_city-icon" src="${data3.current.condition.icon}" alt="${data3.current.condition.text}">`+
        `<div class="other_city-temp">${data3.current.temp_c}<sup>°C</sup></div>`;
}