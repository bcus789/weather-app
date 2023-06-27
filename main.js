let weather = {
    "apiKey": "5ef8df34b119e7453728c4d5b53d19b2",
    fetchWeather: function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q={sacramento}&units=imperial&appid={5ef8df34b119e7453728c4d5b53d19b2}").then((response) => response.json()).then((data) => console.log(data))
    }
}

weather.fetchWeather()