// On click white button set colors white
document.getElementById('grayButton').onclick = switchToGrey;
// On click grey button set colors grey
document.getElementById('whiteButton').onclick = switchToWhite;



// function to make colors white
function switchToWhite(){
        // change background
        document.body.style.backgroundColor = "white";
        // change text colors
        document.body.style.color = "black";
}

// function to make colors grey
function switchToGrey() {
	document.body.style.backgroundColor = "grey";
	document.body.style.color = "white";
}

       