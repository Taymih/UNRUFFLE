function displayFigures(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityName = document.querySelector("#city-name");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityName.innerHTML = response.data.name;
}

function find(city) {
  let apiKey = "628687b1313ed233e8a7594970069fef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayFigures);
}
find("Paris");
function submitNow(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#type-city");
  find(cityInput.value);
}
function searchLocation(position) {
  let apiKey = "628687b1313ed233e8a7594970069fef";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayFigures);
}
function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let searchForm = document.querySelector("#search-city");
searchForm.addEventListener("submit", submitNow);

let currentPosition = document.querySelector("button");
currentPosition.addEventListener("click", getPosition);
