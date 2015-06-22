function OnPushMessage(message)
{
	$.notifications.Text += "\n" + message;
}

function SendAll(){
	var rst = new Query("SELECT Id FROM Catalog_User").Execute();
	var arr = [];
	while (rst.Next())	
		arr.push(ToString(rst.Id.Guid));	 
	 
	PushNotification.SendMessage($.edtText.Text, arr);
}
