function OnLoad()
{
	var indx = parseInt($.edtIndex.Text);
	if(indx != -1)
		$.sv.Index = indx;
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