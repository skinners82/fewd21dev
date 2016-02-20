document.getElementById('stopButton').onclick = illuminateRed;

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
 //above is equivalent to :<p id="stopLight" style="background-color:red;</P>"//
}



document.getElementById('slowButton').onclick = illuminateYellow;

function illuminateYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";

 //above is equivalent to :<p id="stopLight" style="background-color:yellow;</P>"//
}


document.getElementById('goButton').onclick = illuminateGreen;

function illuminateGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green"; //this overrides the function so that just green is illuminated//
  
 //above is equivalent to :<p id="stopLight" style="background-color:green;</P>"//
}

function clearLights() {
  document.getElementById('goLight').style.backgroundColor = "black";
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
}  //this defines the function and creates a default, which we can then override using IDs//