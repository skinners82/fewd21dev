var images = [ "images/animal2.jpg",
			   "images/animal3.jpg",
			   "images/animal4.jpg",
			   "images/animal5.jpg",
			   "images/animal6.jpg",
			   "images/animal7.jpg", ];

var i = 0;
var maxImages = images.length -1; //we don't want to hardcode # of 
//images, so this allows flexible to add or take out images if we need to


//function for back button
function previousImage(){
     //If the increment variable > 0, increment bac; else, stay at max images
     // else, increment image// using --, means go back, go back; using ++ means go forward, go forward
     if(i > 0) {
     	i--;
     }
     else {
     	i = maxImages;
     }
     changeImage(i);

}

//function for the next button

function nextImage(){
	//if increment var is less than maxImages, increment; else, start at 0;
	//else, change image. Here's how we code that:
	if(i < maxImages) {
		i++;
	}
	else {
		i = 0;
	}
	changeImage(i);
}

//function to change the image

function changeImage() {
	//Update img source to the current image.
	jQuery("#carousel-image").attr("src", images[i]);
}



//Event listeners (we want to create this first, before starting on other functions)

jQuery(document).ready(function() {
	//next image click
	jQuery("#next").on("click", nextImage);
	//previous image click
	jQuery("#back").on("click", previousImage);

});