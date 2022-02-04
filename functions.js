import forecastChart from "./chart.js";

export const forecastOfDay = (result, data) => {
    const actualForecast = document.createElement("div");
    actualForecast.classList.add("row");
    // eslint-disable-next-line no-undef
    todayForecast.appendChild(actualForecast);

    const Forecast = document.createElement("article");
    Forecast.classList.add("card");
    actualForecast.appendChild(Forecast);

    const actualDate = document.createElement("p");
    actualDate.setAttribute("id", "actualDate");
    actualDate.innerHTML = new Date(data.daily[0].dt * 1000).toDateString();
    Forecast.appendChild(actualDate);

    const city = document.createElement("h3");
    city.setAttribute("id", "city");
    city.innerHTML = result.city.name + ", " + result.city.country;
    Forecast.appendChild(city);

    const actualTemp = document.createElement("h3");
    actualTemp.innerHTML = Math.round(data.current.temp) + "°C";
    Forecast.appendChild(actualTemp);

    const actualIcon = document.createElement("img");
    actualIcon.src = "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png";
    actualTemp.appendChild(actualIcon);

    const extraInfo = document.createElement("p");
    extraInfo.innerHTML = "Feel like " + Math.round(data.current.feels_like) + "°C, " + data.current.weather[0].description;
    Forecast.appendChild(extraInfo);
};

export const fiveDaysForecast = (data) => {
    const dailyCarousel = document.getElementById("carousel");
    const firstForecast = document.createElement("article");
    firstForecast.classList.add("carousel-item", "active");
    dailyCarousel.appendChild(firstForecast);

    const icon = document.createElement("img");
    icon.src = "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png";
    firstForecast.appendChild(icon);

    const firstDay = document.createElement("p");
    firstForecast.appendChild(firstDay);
    firstDay.innerHTML = new Date(data.daily[0].dt * 1000).toDateString();

    const firstTemp = document.createElement("p");
    firstForecast.appendChild(firstTemp);
    firstTemp.innerHTML = "Max temp: " + Math.round(data.daily[0].temp.max) + "°C & Min temp: " + Math.round(data.daily[0].temp.min) + "°C";

    for (let i = 1; i < 5; i++) {
        const dailyForecast = document.createElement("article");
        dailyForecast.classList.add("carousel-item");
        dailyCarousel.appendChild(dailyForecast);

        const dailyIcon = document.createElement("img");
        dailyIcon.src = "http://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png";
        dailyForecast.appendChild(dailyIcon);

        const differentDay = document.createElement("p");
        differentDay.innerHTML = new Date(data.daily[i].dt * 1000).toDateString();
        dailyForecast.appendChild(differentDay);

        const dailyTemp = document.createElement("p");
        dailyForecast.appendChild(dailyTemp);
        dailyTemp.innerHTML = "Max Temp: " + Math.round(data.daily[i].temp.max) + "°C & Min Temp; " + Math.round(data.daily[i].temp.min) + "°C";
    }
};

export const hourlyChart = (data) => {
    const chartPerHour = document.getElementById("hourlyChart");
    const canvas = document.createElement("canvas");
    canvas.setAttribute("id", "myChart");
    canvas.setAttribute("role", "img");
    chartPerHour.appendChild(canvas);

    const timeStamp = [];
    const xLabelTime = [];
    const hourlyForecast = [];
    const realTempFeel = [];
    for (let t = 0; t < 24; t++) {
        const localTime = data.hourly[t].dt + data.timezone_offset;
        const h = new Date(localTime * 1000).getHours();
        const d = new Date(localTime * 1000).toDateString();
        timeStamp.push(h + "H - " + d);
        xLabelTime.push(h + "H");
        hourlyForecast.push(Math.round(data.hourly[t].temp));
        realTempFeel.push(Math.round(data.hourly[t].feels_like));
    }

    forecastChart(hourlyForecast, timeStamp, xLabelTime, realTempFeel); //Export from third JS file
};