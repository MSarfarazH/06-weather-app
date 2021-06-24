const searchInput = document.querySelector('#search-input')
const searchButton = document.querySelector('#search-button')

searchButton.addEventListener('click', weatherData)

function weatherData(){
   const searchValue = searchInput.value 
    console.log(searchValue)
fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${searchValue}&appid=4faf9d217984276ad6eaf8a085f08b57`)
.then(response => response.json())
.then(data => console.log(data));
}