// https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid={API key}&lang=es

const apiKey = "6a3fde16abd6768bd884326724fd9ca3";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const lang = "es";

const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const iconoClima = document.querySelector(".icono-clima");

async function weather (city){
    const response = await fetch(url + city + `&appid=${apiKey}` + `&lang=${lang}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
 

    if(data.weather[0].main == "Clouds"){
        iconoClima.src = "img/nublado.jpeg";
    }
    else if(data.weather[0].main == "Clear"){
        iconoClima.src = "img/soleado.jpeg";
    }
    else if(data.weather[0].main == "Rainr"){
        iconoClima.src = "img/lluvioso.jpeg";
    }
    else if(data.weather[0].main == "Drizzle"){
        iconoClima.src = "img/seminublado.jpeg";
    }
    else if(data.weather[0].main == "Mist"){
        iconoClima.src = "img/noche.jpeg";
    }
}

searchBtn.addEventListener("click", ()=>{
    weather (search.value);

})