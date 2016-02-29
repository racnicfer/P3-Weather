// Run Tabslet
$('.tabs').tabslet();
  var place = prompt("Type the city, zipcode, or coordinates that you are in:");

$.simpleWeather({
    location: place,
    woeid: '',
    unit: 'f',
    success: function(weather) {  
      
      // Display Icon
      $('i').addClass( 'icon-' + weather.code );
      
      // Display Data
      $('#tab-1 .temp').text(weather.temp);
      $('#tab-1 .city').text(weather.city);
      $('#tab-3 .high').text(weather.high);
      $('#tab-2 .currently').text(weather.currently);
      $('#tab-2 .image').text(weather.image);
      $('#tab-3 .low').text(weather.low);
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });