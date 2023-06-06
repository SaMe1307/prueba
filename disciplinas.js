const api = {
  key: '9e122cd782b2d0333f5fe4e7fa192062',
  url: `https://api.openweathermap.org/data/2.5/weather`
}

const card = document.getElementById("card");
const city = document.getElementById("city");
const date = document.getElementById("date");
const temp = document.getElementById("temp");
const weather = document.getElementById("weather");
const range = document.getElementById("range");

async function search(query){
try {
  const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`);
  const data = await response.json();
  city.innerHTML = `${data.name},${data.sys.country}`;
  data.innerHTML = (new Date()).toLocaleDateString();
  temp.innerHTML = `${toCelsius(data.main.temp)}°C`;
  weather.innerHTML = data.weather[0].description;
  range.innerHTML = `${toCelsius(data.main.temp_min)}°C,${toCelsius(data.main.temp_max)}°C`;
  
} catch (error) {console.log(error);
  alert("Hubo un error");  
}
}
function toCelsius(kelvin){
  return Math.round(kelvin-273.15);

}



function onSubmit(event){
  event.preventDefault();
  search(searchbox.value);

}

const searchform = document.getElementById("search-form");
const searchbox = document.getElementById("searchbox");
searchform.addEventListener("submit",onSubmit,true);
