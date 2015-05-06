function DoSave()
{
    DB.Save();
}

function DoSync(indicator)
{
	if(indicator != null)
		indicator.Start();		
	
    DB.Sync(SyncCallback, indicator);
}

function SyncCallback(indicator){
	if(indicator != null)
		indicator.Stop();	
}
