const temp = document.getElementById('temp')
const minTemp = document.getElementById('min-temp')
const maxTemp = document.getElementById('max-temp')
const cityName = document.getElementById('city-name')
const humid = document.getElementById('weather-type')

// First Api solution

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6bb6fd0fe7msh4214a3835f8b45cp1ae830jsn270dec010f9d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const baseUrl = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='



function getWeather(city){
    return  fetch(`${baseUrl} ${city}`, options)
       .then(response => response.json())
       .then(data =>  data)
       .catch(err => console.error(err));
       
   }

function showWeather(data, city){
    temp.innerText = data.temp
    minTemp.innerText = data.min_temp
    maxTemp.innerText = data.max_temp 
    cityName.innerText = city[0].toUpperCase()+city.slice(1)
    humid.innerText = `Humidity: ${data.max_temp}`
  
}

const searchCity = async () => {
    const cityInput = document.getElementById('city-input').value
  const data =  await getWeather(cityInput)
    showWeather(data,cityInput)
   
   console.log(getWeather(cityInput))
   
}




// //Second Api weather solution

// let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

// const getWeatherData = (city) => {
//   const URL = "https://api.openweathermap.org/data/2.5/weather";
//   const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
//   const weatherPromise  = fetch(FULL_URL);
//   return weatherPromise.then((response) => {
//     return response.json();
//   })
// }

// const searchCity = async () => {
//   const city = document.getElementById('city-input').value;
//  const  data = await getWeatherData(city)
  
//     showWeatherData(data);}
 
// showWeatherData = (weatherData) => {
//   document.getElementById("city-name").innerText = weatherData.name;
//   document.getElementById("weather-type").innerText = weatherData.weather[0].main;
//   document.getElementById("temp").innerText = weatherData.main.temp;
//   document.getElementById("min-temp").innerText = weatherData.main.temp_min;
//   document.getElementById("max-temp").innerText = weatherData.main.temp_max;
// }

