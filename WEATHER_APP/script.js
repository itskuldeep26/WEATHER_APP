const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const button = document.getElementById("search-button"); // Defined button
const input = document.getElementById("city-input"); // Defined input field

async function getData(city) { // Renamed function parameter to avoid conflict
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=712b6fa8f3e9440fbcc145344253103&q=${city}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    if (!value.trim()) return; // Prevents empty input request
    
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = `${result.current.temp_c}°C`;
});
