//Implement the red light using jQuery. Don't forget to add the script tags.

$( document ).ready(function() {

	$('#stopButton').click(illuminateRed);
	$('#slowButton').click(illuminateYellow);
	$('#goButton').click(illuminateGreen);

function illuminateRed() {
    clearLights();
	$('#stopLight').css("background-color","red");
}

function illuminateYellow() {
		clearLights();
		$('#slowLight').css("background-color","yellow");
	}

function illuminateGreen() {
		clearLights();
		$('#goLight').css("background-color","green");

	}

function clearLights() {
	//$('#stopLight').css("background-color","black");
	//$('#slowLight').css("background-color","black");
	//$('#goLight').css("background-color","black");

	$('.bulb').css("background-color", "black");

}
});

















// //red lights//
// document.getElementById('stopButton').onclick = illuminateRed;

// function illuminateRed() {
//   clearLights();
//   document.getElementById('stopLight').style.backgroundColor = "red";
// }

// //green lights//
// document.getElementById('goButton').onclick = illuminateGreen;

// function illuminateGreen() {
//   clearLights();
//   document.getElementById('goLight').style.backgroundColor = "green";
// }

// //yellow lights//
// document.getElementById('slowButton').onclick = illuminateYellow;

// function illuminateYellow() {
//   clearLights();
//   document.getElementById('slowLight').style.backgroundColor = "yellow";
// }

// //clearlights//

// function clearLights() {
//   document.getElementById('goLight').style.backgroundColor = "black";
//   document.getElementById('slowLight').style.backgroundColor = "black";
//   document.getElementById('stopLight').style.backgroundColor = "black";
// }