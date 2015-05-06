// Попытка соединения с сервисом Telegram
// Параметры:
//	 $.phone - номер телефона отправителя
// Возвращает:
// 	"success" - соединение успешно
// 	"sms" - необходима авторизация, sms сообщение было выслано на соответствующий номер телефона
// 	текст ошибки
function connect() {
	try {
		var client = Telegram.Client($.phone);
		if(!client.Authorized)
			if (!client.Connect())
				return "sms";
				
		return "success";
	} catch (e) {
		return e.Message;
	}
}

//Попытка авторизации по sms
//Параметры:
//	$.phone - номер телефона отправителя
//	$.sms - смс код
//Возвращает:
//	"success" - авторизация успешна
//	текст ошибки
function authorize() {
	try {
		var client = Telegram.Client($.phone);
		client.Authorize($.sms);
		return "success";
	} catch (e) {
		return e.Message;
	}
}

//Попытка отправки сообщения
//Параметры:
//	$.phone - номер телефона отправителя
//	$.user - телефон адресата
//	$.message - текст сообщения
//Возвращает:
//	"success" - сообщение успешно отправлено
//	текст ошибки
function send(){
	try {
		var client = Telegram.Client($.phone);
		client.SendMessage($.user, $.message);
		return "success";
	} catch (e) {
		return e.Message;
	}
}

function regUserId() {
	try {
		var client = Telegram.Client($.phone);
		var result = client.Rpc("auth.checkPhone", $.user);
		if (result.phone_invited.Name == "boolFalse") {
			var boolFalse = Telegram.Comb("boolFalse");
			var contact = Telegram.Comb("inputPhoneContact", [ 1, $.user,
					"User", "Name" ]);
			var vector = Telegram.Comb("vector", "InputContact", [ contact ]);

			result = client.Rpc("contacts.importContacts",
					[ vector, boolFalse ]);
		}
		result = client.Rpc("contacts.getContacts", "");
		for ( var user in result.users) {
			if (user.phone == $.user)
				return user.id;
		}

		return "User not found";

	} catch (e) {
		return e.Message;
	}
}

function sendMessage(){
	try {
		var client = Telegram.Client($.phone);
		client.Rpc("messages.sendMessage", 
				[Telegram.Comb("inputPeerContact", $.userId), $.message, Telegram.GetRandom()]);
		return "success";
	} catch (e) {
		return e.Message;
	}
}

function getUpdates(){
	try {
		var client = Telegram.Client($.phone);
		var updates = client.GetUpdates();
		var result = "";
		for (var update in updates) {
			result += "; " + update.ToString();
		}
		return result;		
	} catch (e) {
		return e.Message;
	}	
} 
