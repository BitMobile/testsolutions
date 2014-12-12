function OnLoad()
{
	$.sv.Index = parseInt($.edtIndex.Text);
}

function NullOrDefault(value, defaultValue)
{
	if(value == null)
		return defaultValue;
	else
	    return value;
}

function Scroll(sender, text)
{	
	var index = parseInt(text);
	$.sv.Index = index;
}

function RefreshAndScroll(sender, text)
{
	var index = parseInt(text);
	DoRefresh(index)
}