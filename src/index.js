import Data from '../config.js';
import {
    forecastOfDay,
    fiveDaysForecast,
    hourlyChart
} from '../functions.js';

const search = () => {
    const todayForecast = document.getElementById('todayForecast');
    const dailyCarousel = document.getElementById('carousel');
    const chartPerHour = document.getElementById('hourlyChart');
    const carouselControl = document.getElementById('carouselExampleIndicators');
    carouselControl.style.display = 'block';
    todayForecast.innerHTML = " ";
    dailyCarousel.innerHTML = " "; //Remove information when search again
    chartPerHour.innerHTML = " ";
    const searchBar = document.getElementById('searchBar');
    let cityName = searchBar.value.toLowerCase();


    //API link from Unsplash
    fetch("https://api.unsplash.com/search/photos?query=" + cityName + "&client_id=" + Data.UNSPLASH_API_KEY)
        .then(response => response.json())
        .then(image => {

            //Change background as per the city name
            const randomImg = Math.floor(Math.random() * image.results.length);
            document.body.style.backgroundImage = 'url(' + image.results[randomImg].urls.regular + ')';

            //API to search by city name
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=' + Data.key)
                .then(response => response.json())
                .then(result => {

                    //Latitude & longitude for the second API
                    const lat = result.city.coord.lat;
                    const lon = result.city.coord.lon;

                    //API  to daily forecast
                    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,alert&units=metric&appid=' + Data.key)
                        .then(response => response.json())
                        .then(data => {
                            forecastOfDay(result, data);
                            fiveDaysForecast(data);
                            hourlyChart(data);
                        })
                })
        })
}
search;

//Search events
const searchButton = document.getElementById('submitButton');
searchButton.addEventListener('click', search);
window.addEventListener('keydown', event => {
    if (event.key === 'Enter') {
        search();
    }
});