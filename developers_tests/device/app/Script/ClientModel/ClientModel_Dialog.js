function Alert() {
	Dialog.Alert("Alert!", DialogCallback, null, "Good", "Better", "The best");
}

function Ask() {
	Dialog.Ask("Ask!", DialogCallbackP, "lol", DialogCallbackN, "hon");
}

function Message() {
	Dialog.Message("Message!", DialogCallback, "dota");
}

function Debug() {
	Dialog.Debug("Debug!");
}

function DateTimeDialog() {
	Dialog.DateTime("DateTime!", BegOfWeek(CurrentDate()), DialogCallbackP, "",
			DialogCallbackN, null);
}

function Date() {
	Dialog.Date("Date!", BegOfWeek(CurrentDate()), DialogCallbackP, "",
			DialogCallbackN, null);
}

function Time() {
	Dialog.Time("Time!", BegOfWeek(CurrentDate()), DialogCallbackP, "",
			DialogCallbackN, null);
}

function Choose() {
	var items = [ [ 1, "Hello" ], [ 2, "World" ], [ 3, "!!!" ], [ 4, "My" ],
			[ 5, "name" ], [ 6, "is" ], [ 7, "Alex," ], [ 8, "I" ],
			[ 9, "am" ], [ 10, "programmer." ], [ 11, "Hello" ],
			[ 12, "World" ], [ 13, "!!!" ], [ 14, "My" ], [ 15, "name" ],
			[ 16, "is" ], [ 17, "Alex," ], [ 18, "I" ], [ 19, "am" ],
			[ 20, "programmer." ] ];
	Dialog.Choose("Choose!", items, 2, DialogCallbackP, "", DialogCallbackN,
			null);
}

function NullableChoose() {
	var items = [ [ 1, "Hello" ], [ 2, "World" ], [ null, "Null" ] ];
	Dialog.Choose("Select", items, ChooseCallback);
}

function DialogCallbackP(state, args) {
	DialogCallback(state, args, "Positive")
}

function DialogCallbackN(state, args) {
	DialogCallback(state, args, "Negative")
}

function DialogCallback(state, args, answer) {
	Console.WriteLine("State: " + state + "; Result: " + args.Result + "; "
			+ answer);
}

function ChooseCallback(state, args) {
	var message = args.Value;
	if (args.Key == null)
		message += "; key is null";
	Console.WriteLine(message);
}