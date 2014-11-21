function Maybe(first, second) {
	if (first == null)
		return second;
	return first;
}

function Refresh(sender) {
	DoRefresh($.edt1.Text, $.edt2.Text, $.edt3.Text);
}
