//Naming the needed containers
const searchInput = document.querySelector("#search-input");
//const citiesInputEl = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const currentEl = document.querySelector("#currentWeather");
const cities = []

// var saveSearchHistory = function(){
//     localStorage.setItem("cities", JSON.stringify(cities));
// };

//Assigning action to the submit button
searchButton.addEventListener("click", weatherData);
// saveSearchHistory()

//For dates
var today = new Date();
var date = today.getMonth()+'/'+(today.getDate()+'/'+today.getFullYear());
var nextDay1 =today.getMonth()+'/'+(today.getDate()+1+'/'+today.getFullYear());
var nextDay2 =today.getMonth()+'/'+(today.getDate()+2+'/'+today.getFullYear());
var nextDay3 =today.getMonth()+'/'+(today.getDate()+3+'/'+today.getFullYear());
var nextDay4 =today.getMonth()+'/'+(today.getDate()+4+'/'+today.getFullYear());
var nextDay5 =today.getMonth()+'/'+(today.getDate()+5+'/'+today.getFullYear());

//What the 'Submit' button does; Fetching api data and displaying it.
function weatherData() {
  const searchValue = searchInput.value;

  let lat;
  let lon;
  console.log(searchValue);
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=4faf9d217984276ad6eaf8a085f08b57`
  )
    .then((response) => response.json())
    .then(function (data) { 
    console.log(data);

    // To display the current city
    const cityName = JSON.stringify(data[0].name);
    $('#currentCity').html(searchValue);
    // console.log(cityName);

      lat = data[0].lat;
      lon = data[0].lon;
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=4faf9d217984276ad6eaf8a085f08b57`
      )
        .then((response) => response.json())
        .then((data) => {
        console.log(data);
        
        displayWeather(data)
        displayForecast(data)
        });
    });
    function displayWeather(data) {

        const dateEl = document.querySelector("#currentDate")
        dateEl.innerText = `Date: ${date}`
        
        const windEl = document.querySelector("#wind")
        windEl.innerText = `Wind: ${data.current.wind_speed} MPH`

        const tempEl = document.querySelector("#temp")
        tempEl.innerText = `Temp: ${data.current.temp}`

        const humidityEl = document.querySelector("#humidity")
        humidityEl.innerText = `humidity: ${data.current.humidity}%`

        const uvEl = document.querySelector("#uvindex")
        uvEl.innerText = `UV index: ${data.current.uvi}`
        
    }
    function displayForecast(data) {              

        const forecastDay1 = document.querySelector("#forecast1")
        forecastDay1.innerText = `Date: ${nextDay1} Temp: ${data.daily[1].temp.day} Wind: ${data.daily[1].wind_speed} Humidity: ${data.daily[1].humidity}`
        
        const forecastDay2 = document.querySelector("#forecast2")
        forecastDay2.innerText = `Date: ${nextDay2} Temp: ${data.daily[2].temp.day} Wind: ${data.daily[2].wind_speed} Humidity: ${data.daily[2].humidity}`
        
        const forecastDay3 = document.querySelector("#forecast3")
        forecastDay3.innerText = `Date: ${nextDay3} Temp: ${data.daily[3].temp.day} Wind: ${data.daily[3].wind_speed} Humidity: ${data.daily[3].humidity}`
        
        const forecastDay4 = document.querySelector("#forecast4")
        forecastDay4.innerText = `Date: ${nextDay4} Temp: ${data.daily[4].temp.day} Wind: ${data.daily[4].wind_speed} Humidity: ${data.daily[4].humidity}`
        
        const forecastDay5 = document.querySelector("#forecast5")
        forecastDay5.innerText = `Date: ${nextDay5} Temp: ${data.daily[5].temp.day} Wind: ${data.daily[5].wind_speed} Humidity: ${data.daily[5].humidity}`

 
      }
    
    }
