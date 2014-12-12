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

function DBSize()
{
	return DB.Size.ToString();
}