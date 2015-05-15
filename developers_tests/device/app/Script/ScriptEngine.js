function OnLoading(name){
	Console.WriteLine("OnLoading: " + name);
}

function OnLoad(name){
	Console.WriteLine("OnLoad: " + name);
}


function TestGlobalSimple() {
	Global.TestDialog();
}

function TestGlobalResult() {
	return Global.TestResult();
}

function GetImagePath(objectID, pictID, pictExt) {
	return Global.TestResult(objectID, pictID, pictExt);
}

function StringFormat() {
	return String.Format("String format: {0}!", "success")
}

function NewFormat() {
	return Format("String format: {0} {1}!", "success", ToString(42))
}

function GetType() {
	var query = new Query("SELECT Id FROM Catalog_User LIMIT 1");
	var ref = query.ExecuteScalar();
	var obj = ref.GetObject();
	return getType(obj);
}

function CreateArray(arr) {
	if(arr != null)
		return arr;
	
	var arr = [ 4, 3, 2, 1, 0 ];
	if (arr != null) // check
		arr.reverse();
	Console.WriteLine(arr.shift());
	arr.unshift(0);
	arr[arr.length] = 5;
	arr.push(6);
	Console.WriteLine(arr.join(";"));
	Console.WriteLine(arr.concat([ 7 ], [ 8, 9, 10 ]).toString());
	Console.WriteLine(arr.join());
	Console.WriteLine(arr.pop());
	Console.WriteLine(arr.slice(5).join());

	return arr;
}

function Create2DArray(arr) {
	if(arr != null)
		return arr;
		
	var items = [];
	items[0] = ["00", "01", "00", "00"];
	items[0][2] = "02";
	(items[0])[3] = "03";
	items[1] = [];
	items[1][0] = "10";
	(items[1])[1] = "11";
	items[1].push("12");
	(items[1]).push("13");
	
	Console.WriteLine(items[0].join());
	Console.WriteLine((items[1]).join());
	
	return items;
}

function ShowArray(sender, arr, arr2d, nullArr) {

	if (arr === null) {
		Dialog.Message("arr == null error");
	} else if (arr != null) {
		Console.WriteLine("Simple array: " + arr.length);
		Console.WriteLine(arr.join());		
	}
	else{
		Dialog.Message("arr != null error");
	}

	if (arr2d === null) {
		Dialog.Message("arr2d == null error");
	} else if (arr2d != null) {
		Console.WriteLine("2d array: " + arr2d.length);		
		for(var i = 0; i < arr2d.length; i++)
			Console.WriteLine(arr2d[i].join());
	}
	else{
		Dialog.Message("arr2d != null error");
	}

	if (nullArr === null) {
	} else
		Dialog.Message("nullArr == null error");

	if (nullArr != null)
		Dialog.Message("nullArr != null error");
}

function RefreshArrays(sender, arr, arr2d){
	arr.push("refreshed");
	for(var i = 0; i < arr2d.length; i++)
		arr2d[i].push("refreshed");
	DoRefresh(arr, arr2d);
}
