function NullableChoose() {
	var items = [ [ 1, "Hello" ], [ 2, "World" ], [ null, "Null" ] ];
	Dialog.Choose("Select", items, ChooseCallback);
}

function ChooseCallback(state, args) {
	var message = args.Value;
	if (args.Key == null)
		message += "; key is null";
	Dialog.Message(message);
}