import './style.css';
import Icon from './search.svg';
import Icon2 from './map-pin.svg';
import Icon6 from './thermometer.svg';
import Icon3 from './wind.svg';
import Icon4 from './droplet.svg';
import Icon5 from './cloud-rain.svg';
import githubLogo from './icons8-github.svg';
import {otherCity, searchCity} from "./apiController";



const input = document.querySelector('header > form');

document.addEventListener("DOMContentLoaded" , (e) =>{
    input.search.value = "";
});

input.addEventListener("submit" , (e) =>{
    e.preventDefault();
    searchCity(e.target.search.value);
input.search.value = "";
})




// Default city
searchCity('dublin').catch(err => console.log(err));

// Other cities
otherCity('london','tokyo','new york').catch(err => console.log(err));



