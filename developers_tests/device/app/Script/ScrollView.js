function OnLoad()
{
	$.sv.Index = parseInt($.edtIndex.Text);
}

function Scroll(sender, text)
{	
	var index = parseInt(text);
	$.sv.Index = index;
}