function Scan()
{
	BarcodeScanner.Scan(Callback);
}

function Callback(result, state)
{
	Dialog.Message(result);
}