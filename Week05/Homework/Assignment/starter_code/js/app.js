//wait for the DOM elements to load before executing

jQuery(document).ready(function() {


// Create a function that runs whenever the submit button is clicked

	jQuery("#submit-btn").click(function() {


//prevent the submit button from refreshing the page

		event.preventDefault();


//Create a variable called cityinput and get the value of the #city-type; Also, correct for capitalization and spaces above

		var cityinput = jQuery('#city-type').val();
        jQuery('#city-type').val('');
    cityinput = cityinput.toLowerCase().trim();

// If the user inputs "New York," "New York City", or "nyc", change the background image to nyc.jpg

 		if (cityinput == "new york" || cityinput == "new york city" || cityinput == "nyc") {
            jQuery('body').attr('class','nyc');
			}
// If the user inputs "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
		else if (cityinput == "san francisco" || cityinput == "sf" || cityinput == "bay area") {
			jQuery ('body').attr('class', 'sf');
		}

// If the user inputs "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
		else if (cityinput == 'los Angeles' || cityinput == 'la' || cityinput =='lax') {
			jQuery ('body').attr('class', 'la');
		}

// If the user inputs "Austin" or "ATX" make the background of the page austin.jpg
		else if (cityinput == 'austin' || cityinput == 'atx') {
			jQuery ('body').attr('class', 'austin');
		}

// If the user inputs "Sydney" or "SYD" make the background of the page sydney.jpg
		else if (cityinput == 'sydney' || cityinput == 'syd') {
			jQuery ('body').attr('class', 'sydney');
		}

// If the user inputs "San Diego" or "SD" make the background of the page sd.jpg.
else if (cityinput == 'san diego' || cityinput == 'sd') {
			jQuery ('body').attr('class', 'sd');
		}


	}); //end click-submit function

}); //end document ready function




















