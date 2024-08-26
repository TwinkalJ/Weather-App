const apiKey = "8731b8f54ce3cdd4ab6ddaa3574a4acf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const weatherPara = document.querySelector(".weather-para")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.main.wind + "km/hr";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            weatherPara.innerHTML = data.weather[0].main;
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            weatherPara.innerHTML = data.weather[0].main;
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            weatherPara.innerHTML = data.weather[0].main;
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            weatherPara.innerHTML = data.weather[0].main;
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
            weatherPara.innerHTML = data.weather[0].main;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

