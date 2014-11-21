function Start()
{	
    GPSTracking.IsBestAccuracy = $.chxAccuracy.Checked;
    GPSTracking.MinInterval = parseInt($.edtMinInterval.Text);
    GPSTracking.MinDistance = parseInt($.edtMinDistance.Text);
    GPSTracking.DistanceFilter = parseInt($.edtDistanceFilter.Text);
    GPSTracking.SendInterval = parseInt($.edtSendInterval.Text);
    
	GPSTracking.Start();	
	$.tvStatus.Text = "In progress...";
}

function Stop()
{
	GPSTracking.Stop();	
	$.tvStatus.Text = "";
}