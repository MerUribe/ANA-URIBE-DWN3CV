// https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={API key}&lang=es

const apiKey = "6a3fde16abd6768bd884326724fd9ca3";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const lang = "es";

async function weather (city){
    const response = await fetch(url + city + `&appid=${apiKey}` + `&lang=${lang}`);
    var data = await response.json();

    console.log(data);
}