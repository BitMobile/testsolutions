var headers = [];

function HttpAddHeader(controlName, controlValue) {
	headers.push([ controlName.Text, controlValue.Text ]);
	controlName.Text = "";
	controlValue.Text = "";
}

function HttpGet(address, query) {
	try {
		request = CreateRequest(address);
		var result = request.Get(query);
		Dialog.Message(result);
	} catch (e) {
		Dialog.Message(e.StatusCode + ": " + e.Message);
	}

}

function HttpPost(address, query, text) {
	try {
		request = CreateRequest(address);
		var result = request.Post(query, text);
		Dialog.Message(result);
	} catch (e) {
		Dialog.Message(e.StatusCode + ": " + e.Message);
	}

}

function CreateRequest(address) {
	var request = new HttpRequest(address);

	if (headers.length > 0)
		for (var i = 0; i < headers.length; i++) {
			var h = headers[i];
			request.AddHeader(h[0], h[1]);
		}

	request.UserName = "demosr";
	request.Password = "demosr";
	return request;
}