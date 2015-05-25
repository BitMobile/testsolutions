function SetFocus(sender, edt) {
	edt.SetFocus();
}

function OnGetFocus(sender, txt) {
	txt.Text = "<In progress...>";
	$.txtCurrent.Text = sender.Id;
}

function OnLostFocus(sender, txt) {
	txt.Text = sender.Text;
	$.txtCurrent.Text = "";
}

function EnableDisable(sender, editText, memoEdit){	
	$.edtEditText.Enabled = !$.edtEditText.Enabled;
	$.edtMemoEdit.Enabled = !$.edtMemoEdit.Enabled;
}

function OnChange(sender){
	Console.WriteLine(sender.Text);
}

function OnChangeNum(sender){
	Console.WriteLine(Number(sender.Text));
}