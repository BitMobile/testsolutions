function Exit() {
	Application.Exit();
}

function LogOut(){
	Application.Logout();	
}

function SendLog()
{
	var result = Application.SendDatabase();
	if(result)
		Dialog.Message("Success");
	else
		Dialog.Message("Fail");
}

function ClearLog()
{
	Application.ClearLog();
}

function GetDBSize()
{
	var size = DB.Size.ToString();
	Dialog.Message(size);
}

function GetCoreVersion()
{
	var ver = Application.CoreVersion;
	Dialog.Message(ver);
}

function GetResourceVersion()
{
	var ver = Application.ResourceVersion;
	Dialog.Message(ver);
}