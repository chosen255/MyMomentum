const API_KEY = "a769d9553ed37ee11d7be11a8be8eacb"

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json()
        .then((data) => {
            const weather = document.querySelector("#weather");
            // const city = document.querySelector("#weather span:last-child");
            weather.innerText = `There is ${data.weather[0].main} outside`;
            // city.innerText = data.name;
    }));
}

function onGeoError() {
    alert("Can't find your location no weater service");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
