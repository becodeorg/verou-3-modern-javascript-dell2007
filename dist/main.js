/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./chart.js":
/*!******************!*\
  !*** ./chart.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ forecastChart)\n/* harmony export */ });\nfunction forecastChart(hourlyForecast, timeStamp, xLabelTime, realTempFeel) {\r\n    const newChart = document.getElementById('myChart').getContext('2d');\r\n    const myChart = new Chart(newChart, {\r\n        type: 'line',\r\n        data: {\r\n            labels: timeStamp,\r\n            datasets: [{\r\n                label: 'Temp p/ hour',\r\n                data: hourlyForecast,\r\n                hoverRadius: 10,\r\n                backgroundColor: 'rgba(0, 0, 0, 0.5)',\r\n                borderColor: 'rgba(255, 255, 255, 1)',\r\n                borderWidth: 3\r\n            },{\r\n                type: 'bar',\r\n                label: 'Real feel',\r\n                data: realTempFeel,\r\n                backgroundColor: 'rgba(255, 255, 255, 0.5)',\r\n                borderColor: 'rgba(255, 255, 255, 1)',\r\n            }]\r\n            },\r\n        options: {\r\n            scales: {\r\n                x: {\r\n                    type: 'category',\r\n                    labels: xLabelTime,\r\n                    position: 'top',\r\n                    ticks: {\r\n                        color: 'white'\r\n                    }\r\n                },\r\n                y: {\r\n                    beginAtZero: true,\r\n                    ticks: {\r\n                        color: 'white'\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    });\r\n}\n\n//# sourceURL=webpack://the-weather-app/./chart.js?");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Data = {\r\n    key : '5ecb6039e4efb5befc701a2a3d056045',\r\n    UNSPLASH_API_KEY: 'JJk61014LSGvE7rTHWucZJGa6DmE9_h-5Kw5kv8bdyg'\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);\n\n//# sourceURL=webpack://the-weather-app/./config.js?");

/***/ }),

/***/ "./functions.js":
/*!**********************!*\
  !*** ./functions.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"forecastOfDay\": () => (/* binding */ forecastOfDay),\n/* harmony export */   \"fiveDaysForecast\": () => (/* binding */ fiveDaysForecast),\n/* harmony export */   \"hourlyChart\": () => (/* binding */ hourlyChart)\n/* harmony export */ });\n/* harmony import */ var _chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart.js */ \"./chart.js\");\n\r\n\r\nconst forecastOfDay = (result, data) => {\r\n    const actualForecast = document.createElement('div');\r\n    actualForecast.classList.add('row');\r\n    todayForecast.appendChild(actualForecast);\r\n\r\n    const Forecast = document.createElement('article');\r\n    Forecast.classList.add('card');\r\n    actualForecast.appendChild(Forecast);\r\n\r\n    const actualDate = document.createElement('p');\r\n    actualDate.setAttribute('id', 'actualDate');\r\n    actualDate.innerHTML = new Date(data.daily[0].dt * 1000).toDateString();\r\n    Forecast.appendChild(actualDate);\r\n\r\n    const city = document.createElement('h3');\r\n    city.setAttribute('id', 'city');\r\n    city.innerHTML = result.city.name + ', ' + result.city.country;\r\n    Forecast.appendChild(city);\r\n\r\n    const actualTemp = document.createElement('h3');\r\n    actualTemp.innerHTML = Math.round(data.current.temp) + '°C';\r\n    Forecast.appendChild(actualTemp);\r\n\r\n    const actualIcon = document.createElement('img');\r\n    actualIcon.src = 'http://openweathermap.org/img/wn/' + data.current.weather[0].icon + '@2x.png';\r\n    actualTemp.appendChild(actualIcon);\r\n\r\n    const extraInfo = document.createElement('p');\r\n    extraInfo.innerHTML = 'Feel like ' + Math.round(data.current.feels_like) + '°C, ' + data.current.weather[0].description;\r\n    Forecast.appendChild(extraInfo);\r\n}\r\n\r\nconst fiveDaysForecast = (data) => {\r\n    const dailyCarousel = document.getElementById('carousel');\r\n    const firstForecast = document.createElement('article');\r\n    firstForecast.classList.add('carousel-item', 'active');\r\n    dailyCarousel.appendChild(firstForecast);\r\n\r\n    const icon = document.createElement('img');\r\n    icon.src = 'http://openweathermap.org/img/wn/' + data.daily[0].weather[0].icon + '@2x.png';\r\n    firstForecast.appendChild(icon);\r\n\r\n    const firstDay = document.createElement('p');\r\n    firstForecast.appendChild(firstDay);\r\n    firstDay.innerHTML = new Date(data.daily[0].dt * 1000).toDateString();\r\n\r\n    const firstTemp = document.createElement('p');\r\n    firstForecast.appendChild(firstTemp);\r\n    firstTemp.innerHTML = 'Max temp: ' + Math.round(data.daily[0].temp.max) + '°C & Min temp: ' + Math.round(data.daily[0].temp.min) + '°C';\r\n\r\n    for (let i = 1; i < 5; i++) {\r\n        const dailyForecast = document.createElement('article');\r\n        dailyForecast.classList.add('carousel-item');\r\n        dailyCarousel.appendChild(dailyForecast);\r\n\r\n        const dailyIcon = document.createElement('img');\r\n        dailyIcon.src = 'http://openweathermap.org/img/wn/' + data.daily[i].weather[0].icon + '@2x.png';\r\n        dailyForecast.appendChild(dailyIcon);\r\n\r\n        const differentDay = document.createElement('p');\r\n        differentDay.innerHTML = new Date(data.daily[i].dt * 1000).toDateString();\r\n        dailyForecast.appendChild(differentDay);\r\n\r\n        const dailyTemp = document.createElement('p');\r\n        dailyForecast.appendChild(dailyTemp);\r\n        dailyTemp.innerHTML = 'Max Temp: ' + Math.round(data.daily[i].temp.max) + '°C & Min Temp; ' + Math.round(data.daily[i].temp.min) + '°C';\r\n    }\r\n}\r\n\r\nconst hourlyChart = (data) => {\r\n    const chartPerHour = document.getElementById('hourlyChart');\r\n    const canvas = document.createElement('canvas');\r\n    canvas.setAttribute('id', 'myChart');\r\n    canvas.setAttribute('role', 'img');\r\n    chartPerHour.appendChild(canvas);\r\n\r\n    const timeStamp = [];\r\n    const xLabelTime = [];\r\n    const hourlyForecast = [];\r\n    const realTempFeel = [];\r\n    for (let t = 0; t < 24; t++) {\r\n        const localTime = data.hourly[t].dt + data.timezone_offset;\r\n        const h = new Date(localTime * 1000).getHours();\r\n        const d = new Date(localTime * 1000).toDateString();\r\n        timeStamp.push(h + 'H - ' + d);\r\n        xLabelTime.push(h + 'H');\r\n        hourlyForecast.push(Math.round(data.hourly[t].temp));\r\n        realTempFeel.push(Math.round(data.hourly[t].feels_like));\r\n    }\r\n\r\n    (0,_chart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(hourlyForecast, timeStamp, xLabelTime, realTempFeel); //Export from third JS file\r\n}\n\n//# sourceURL=webpack://the-weather-app/./functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./config.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions.js */ \"./functions.js\");\n\r\n\r\n\r\nconst search = () => {\r\n    const todayForecast = document.getElementById('todayForecast');\r\n    const dailyCarousel = document.getElementById('carousel');\r\n    const chartPerHour = document.getElementById('hourlyChart');\r\n    const carouselControl = document.getElementById('carouselExampleIndicators');\r\n    carouselControl.style.display = 'block';\r\n    todayForecast.innerHTML = \" \";\r\n    dailyCarousel.innerHTML = \" \"; //Remove information when search again\r\n    chartPerHour.innerHTML = \" \";\r\n    const searchBar = document.getElementById('searchBar');\r\n    let cityName = searchBar.value.toLowerCase();\r\n\r\n\r\n    //API link from Unsplash\r\n    fetch(\"https://api.unsplash.com/search/photos?query=\" + cityName + \"&client_id=\" + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].UNSPLASH_API_KEY)\r\n        .then(response => response.json())\r\n        .then(image => {\r\n\r\n            //Change background as per the city name\r\n            const randomImg = Math.floor(Math.random() * image.results.length);\r\n            document.body.style.backgroundImage = 'url(' + image.results[randomImg].urls.regular + ')';\r\n\r\n            //API to search by city name\r\n            fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&units=metric&appid=' + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].key)\r\n                .then(response => response.json())\r\n                .then(result => {\r\n\r\n                    //Latitude & longitude for the second API\r\n                    const lat = result.city.coord.lat;\r\n                    const lon = result.city.coord.lon;\r\n\r\n                    //API  to daily forecast\r\n                    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,alert&units=metric&appid=' + _config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].key)\r\n                        .then(response => response.json())\r\n                        .then(data => {\r\n                            (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.forecastOfDay)(result, data);\r\n                            (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.fiveDaysForecast)(data);\r\n                            (0,_functions_js__WEBPACK_IMPORTED_MODULE_1__.hourlyChart)(data);\r\n                        })\r\n                })\r\n        })\r\n}\r\nsearch;\r\n\r\n//Search events\r\nconst searchButton = document.getElementById('submitButton');\r\nsearchButton.addEventListener('click', search);\r\nwindow.addEventListener('keydown', event => {\r\n    if (event.key === 'Enter') {\r\n        search();\r\n    }\r\n});\n\n//# sourceURL=webpack://the-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;