const apiKey = "YOUR_OPENWEATHER_API_KEY";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === 200) {
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>${data.weather[0].description}</p>
      <p>🌡️ ${data.main.temp}°C</p>
      <p>💧 ${data.main.humidity}% humidity</p>
      <p>🌬️ ${data.wind.speed} m/s wind</p>
    `;
  } else {
    document.getElementById("weatherResult").innerText = "City not found.";
  }
}
