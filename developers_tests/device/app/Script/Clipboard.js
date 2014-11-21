function Set(sender, text){
	Clipboard.SetString(text);
}

function Get(sender, tv){
	if(Clipboard.HasStringValue)
		tv.Text = Clipboard.GetString();
	else
		tv.Text = "";
}