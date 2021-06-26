//Naming the needed containers
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const currentEl = document.querySelector("#currentWeather");

//Assigning action to the submit button
searchButton.addEventListener("click", weatherData);

//For todays date
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

//What the 'Submit' button does; Fetching api data and displaying it.
function weatherData() {
  const searchValue = searchInput.value;
  var lat;
  var lon;
  console.log(searchValue);
  fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=4faf9d217984276ad6eaf8a085f08b57`
  )
    .then((response) => response.json())
    .then(function (data) { 
    console.log(data);
      lat = data[0].lat;
      lon = data[0].lon;
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=4faf9d217984276ad6eaf8a085f08b57`
      )
        .then((response) => response.json())
        .then((data) => {
        
        displayWeather(data)
        });
    });
    function displayWeather(data) {

        document.getElementsByName("#currentCity").innerHTML = ` ${data[0].name}`
        
        const humidityEl = document.createElement("h3")
        humidityEl.innerText = `humidity: ${data.current.humidity}%`
        currentEl.appendChild(humidityEl)
        
        const tempEl = document.createElement("h3")
        tempEl.innerText = `temp: ${data.current.temp}`
        currentEl.appendChild(tempEl)

        
    }
      }
    

