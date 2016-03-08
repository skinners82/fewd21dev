//We need to change the input to a dropdown menu of cities.

//First we have to create the array of cities, contained within the variable cities.

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

//code will run once the page is loaded and ready. 
$(document).ready(function() {
  //we set increment at 0 because indexing always starts at 0; we tell i to be less than the length of cities (5) so that we have a stopping point for the for-loop; finally, we set the increment sequence at i++ which means the loop will move through the array one at a time, starting with 0 and moving to index num. 4 (SYD)
  for(i=0;i<cities.length;i++) {
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

  // listening for change on form in city-type, activate function. We create a variable city, which will give us the value of the city-type option within the select element. 
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    
    //if the selected option is NYC, then change the background to the 'nyc' class found in the CSS file. Each else if does the same thing with the corresponding cities.

    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});