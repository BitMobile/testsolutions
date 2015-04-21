function ChangeAlignment(sender, alignment){	 
	if(alignment == "Center")
		var newAlignment = "Default";	
	else
		var newAlignment = "Center";
	
	DoRefresh(newAlignment);	
}

function SwipeTo(sender, index){
	$.swipeLayout.Index = Number(index);
}