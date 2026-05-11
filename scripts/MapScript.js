// Sweet's Bed and Rolls Location (Amarillo, TX example)
var lat = 35.19042;
var lon = -101.78315;

// Initialize Map
var map = L.map('map').setView([lat, lon], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marker
var marker = L.marker([lat, lon]).addTo(map);
marker.bindPopup("<b>Sweet's Bed and Rolls</b><br>Loading weather...").openPopup();

// Weather API (NO KEY REQUIRED)
fetch("https://api.weather.gov/points/" + lat + "," + lon)
  .then(res => res.json())
  .then(data => fetch(data.properties.forecast))
  .then(res => res.json())
  .then(weather => {
    var current = weather.properties.periods[0];

    var forecastText = current.temperature + "°F - " + current.shortForecast;

    // Update popup
    marker.setPopupContent(
      "<b>Sweet's Bed and Rolls</b><br>" + forecastText
    );

    // Update weather box
    document.getElementById("weatherText").textContent = forecastText;
  })
  .catch(() => {
    marker.setPopupContent("<b>Sweet's Bed and Rolls</b><br>Weather unavailable");
    document.getElementById("weatherText").textContent = "Weather unavailable";
  });