function TestGlobalSimple(){
	Global.TestDialog();
}

function TestGlobalResult(){
	return Global.TestResult();	
}

function GetImagePath(objectID, pictID, pictExt) {
    return Global.TestResult(objectID, pictID, pictExt);
}

function StringFormat(){
	return String.Format("String format: {0}!", "success")
}

function NewFormat(){
	return Format("String format: {0} {1}!", "success", ToString(42))
}

function GetType(){
	var query = new Query("SELECT Id FROM Catalog_User LIMIT 1");
	var ref = query.ExecuteScalar();
	var obj = ref.GetObject();
	return getType(obj);
}
