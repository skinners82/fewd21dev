//wait for the DOM elements to load before executing
jQuery(document).ready(function() {

    // Create a function that runs whenever the submit button is clicked
    jQuery("#submit-btn").click(function(e) {


        
        //prevent the submit button from refreshing the page
        e.preventDefault();

        //Create a variable called moodvalue and get the value of the #mood input
        var moodvalue = jQuery ("#mood").val();

        //Correct for capitalization
        moodvalue = moodvalue.toLowerCase().trim();

        // if the user inputs excited / ecstatic / fantastic change the CSS class to 'excited'
        if (moodvalue == "excited" || moodvalue == "ecstatic" || moodvalue == "fantastic") {
            jQuery('.moodring > div').attr('class', 'excited');
        }
//use double pipes to make compound if statements, like those above; means "or"; && means "and"; so above we are saying, if any of those things are true, we are going to target the mood ring
        //target the div that is the immediate child of .moodring, and set the class (while whiping out the old ones) whereas if it was class added, they would all add on top of each othert

        // if the user inputs happy/good/great change the CSS class to 'happy'

        if(moodvalue == "happy" || moodvalue =="good" || moodvalue == "great") {
            jQuery('.moodring > div').attr('class', 'happy');

        }

        // if the user inputs bad/angry change the CSS class to 'bad'
        if(moodvalue == "bad" || moodvalue =="angry") {
            jQuery('.moodring > div').attr('class', 'bad');

        }

}); //end click submit function


    // Listen for user interaction on the submit button.    

}); //end document-ready function