function Start(sender, delay) {
	delay = parseFloat(delay);
	if(delay != NaN)		
		GPS.StartTracking(delay);
	else
		GPS.StartTracking();	
	
	$.tvStatus.Text = "In progress...";
}

function Stop() {
	GPS.StopTracking();
	$.tvStatus.Text = "Disabled";
}

function Show() {
	if (GPS.CurrentLocation.NotEmpty) {
		$.tvStatus.Text = "" + GPS.CurrentLocation.Time + ": "
				+ GPS.CurrentLocation.Latitude + "; "
				+ GPS.CurrentLocation.Longitude;
	}
	else
		$.tvStatus.Text = "Empty";
}

function Update() {
	if (GPS.Update(10)) {
		Show();
	} else {
		$.tvStatus.Text = "Updating error";
	}
}