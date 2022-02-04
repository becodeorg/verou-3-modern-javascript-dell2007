/* eslint-disable no-unused-vars */
export default function forecastChart(
  hourlyForecast,
  timeStamp,
  xLabelTime,
  realTempFeel
) {
  const newChart = document.getElementById("myChart").getContext("2d");
  // eslint-disable-next-line no-undef
  const myChart = new Chart(newChart, {
    type: "line",
    data: {
      labels: timeStamp,
      datasets: [
        {
          label: "Temp p/ hour",
          data: hourlyForecast,
          hoverRadius: 10,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderColor: "rgba(255, 255, 255, 1)",
          borderWidth: 3,
        },
        {
          type: "bar",
          label: "Real feel",
          data: realTempFeel,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderColor: "rgba(255, 255, 255, 1)",
        },
      ],
    },
    options: {
      scales: {
        x: {
          type: "category",
          labels: xLabelTime,
          position: "top",
          ticks: {
            color: "white",
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "white",
          },
        },
      },
    },
  });
}
