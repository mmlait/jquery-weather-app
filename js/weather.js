$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=helsinki&APPID=YOUR_OWN_API_KEY', function(data) {

  let temperatureCelsius = Math.round(data.main.temp - 273);

  $('#weather-description').html(data.weather[0].description);
  $('#temperature').html(temperatureCelsius);

  if (data.weather[0].icon == '01d'){
    $('img').attr('src','images/sunny.png');
  } else if (data.weather[0].icon == '01n'){
    $('img').attr('src','images/moon.png');
  } else if (data.weather[0].description.includes('thunderstorm')){
    $('img').attr('src','images/thunderstorm.png');
  }  else if (data.weather[0].description.includes('rain')
    || data.weather[0].description.includes('drizzle')
    || data.weather[0].description.includes('sleet')){
    $('img').attr('src','images/rainy.png');
  } else if (data.weather[0].description.includes('clouds')){
    $('img').attr('src','images/cloudy.png');
  } else if (data.weather[0].description.includes('snow')){
    $('img').attr('src','images/snowy.png');
  } else {
    $('img').attr('src','images/misty.png');
  }

});
