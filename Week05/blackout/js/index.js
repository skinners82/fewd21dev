var lights;

function switchLights() {
	if (lights == 'on') { //defaulting to no class. So no CSS is applied to the body at all. When we click the on button, we then want to add a class.
		lights ='off'; //the off isn't doing anything; it just means anything but on. You can put jibberish here and it would still work. 
		$('body').addClass('dark');
	}
	else {
		lights = 'on';
		$('body').removeClass('dark');
	}
}

$(document).ready(function() {
    $('#light_switch').click(switchLights);
});