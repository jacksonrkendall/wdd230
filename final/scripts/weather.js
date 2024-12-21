const apiKey = 'bb066bddf21e5c01f984acbfae854a42';
const city = 'Cozumel';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Current Weather Data:', data);

    if (data.main && data.weather) {
      const temperatureC = data.main.temp;
      const temperatureF = (temperatureC * 9/5) + 32;
      const humidity = data.main.humidity;
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const maxTempC = data.main.temp_max;
      const maxTempF = (maxTempC * 9/5) + 32;

      document.getElementById('current-temp').textContent = `Current Temperature: ${temperatureF.toFixed(2)}°F`;
      document.getElementById('current-humidity').textContent = `Humidity: ${humidity}%`;
      document.getElementById('weather-main').textContent = main;
      document.getElementById('weather-description').textContent = description;
      document.getElementById('weather-icon').src = icon;
      document.getElementById('high-temp-message').textContent = `Today's High Temperature: ${maxTempF.toFixed(2)}°F`;
    } else {
      console.error('Unexpected data format:', data);
    }
  })
  .catch(error => console.error('Error fetching weather data:', error));

fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Next Day Forecast Data:', data);

    const nextDayForecast = data.list ? data.list.find(forecast => forecast.dt_txt.includes('15:00:00')) : null;
    if (nextDayForecast && nextDayForecast.main) {
      const nextDayTempC = nextDayForecast.main.temp;
      const nextDayTempF = (nextDayTempC * 9/5) + 32;
      document.getElementById('next-day-temp').textContent = `Next Day Temperature at 15:00: ${nextDayTempF.toFixed(2)}°F`;
    } else {
      console.error('Unexpected forecast data format:', data);
    }
  })
  .catch(error => console.error('Error fetching forecast data:', error));
