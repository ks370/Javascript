/*
 there are maily 2 way to handle api 
   1). promise   fetch().then().then().catch()
   2).tyr{await fetch()} catch(error){}
*/


const form = document.querySelector("#weather-form");
const cityInput = document.querySelector("#city");
const message = document.querySelector("#message");
const result = document.querySelector("#weather-result");

const cityName = document.querySelector("#city-name");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) return;

    message.textContent = "Loading weather...";
    result.hidden = true;

    try {
        // 1. Find the city
        const cityResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
        );

        if (!cityResponse.ok) {
            throw new Error("Could not search for the city.");
        }

        const cityData = await cityResponse.json();

        if (!cityData.results || cityData.results.length === 0) {
            throw new Error("City not found. Try another name.");
        }

        const place = cityData.results[0];

        // 2. Fetch weather using the city's coordinates
        const weatherResponse = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m`
        );

        if (!weatherResponse.ok) {
            throw new Error("Could not fetch weather.");
        }

        const weatherData = await weatherResponse.json();
        const current = weatherData.current;

        // 3. Display the data
        cityName.textContent = `${place.name}, ${place.country}`;
        temperature.textContent = `${current.temperature_2m} °C`;
        description.textContent =
            getWeatherDescription(current.weather_code);
        humidity.textContent =
            `Humidity: ${current.relative_humidity_2m}%`;
        wind.textContent =
            `Wind speed: ${current.wind_speed_10m} km/h`;

        message.textContent =
            `Feels like ${current.apparent_temperature} °C`;
        result.hidden = false;

    } catch (error) {
        message.textContent = error.message;
    }
});
// its range value  of weather
function getWeatherDescription(code) {
    if (code === 0) return "Clear sky";
    if ([1, 2, 3].includes(code)) return "Partly cloudy or overcast";
    if ([45, 48].includes(code)) return "Foggy";
    if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
    if ([61, 63, 65, 66, 67].includes(code)) return "Rain";
    if ([71, 73, 75, 77].includes(code)) return "Snow";
    if ([80, 81, 82].includes(code)) return "Rain showers";
    if ([85, 86].includes(code)) return "Snow showers";
    if ([95, 96, 99].includes(code)) return "Thunderstorm";
    return "Weather conditions unavailable";
}
