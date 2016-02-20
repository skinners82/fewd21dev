$( document ).ready(function() {

	$('#grayButton').click(switchGray);
	$('#whiteButton').click(switchWhite);

	
	function switchGray() {
		$('body').css("background-color", "gray");
		console.log ("I'm gray!");
	}

	function switchWhite() {
		$('body').css("background-color", "white");

	}
    //console.log( "ready!" );//
});







// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }
