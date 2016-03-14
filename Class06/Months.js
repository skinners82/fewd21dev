var months = [];
            month[1] = "January";
			month[2] = "February";
			month[3] ="March";
			month[4] = "April";
			month[5] = "May";
			month[6] ="June";
			month[7] = "July";
			month[8] = "August";
            month[9] ="September";
            month[10] ="October";
            month[11] ="November";
            month[12] = "December";

function getMonthName() {
	for(var i = 0; i < months.length; i++) {
		console.log(months[i]);
	}
}

getMonthName(month[3]);