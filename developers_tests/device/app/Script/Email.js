function Send(){
	Email.Create($.edtAddress.Text
			, $.edtText.Text
			, $.edtSubject.Text
			, $.edtAttachment.Text
			, EmailCallback
			, "Send");
}

function SendAll(){
	var address = [$.edtAddress.Text, $.edtAddress1.Text, $.edtAddress2.Text];
	var attachment = [$.edtAttachment.Text, $.edtAttachment1.Text, $.edtAttachment2.Text];
	Email.Create(address
			, $.edtText.Text
			, $.edtSubject.Text
			, attachment
			, EmailCallback
			, "SendAll");
}

function SendEmpty(){
	Email.Create(null, null, null);
}

function EmailCallback(state, args){
	Dialog.Message(state);
}