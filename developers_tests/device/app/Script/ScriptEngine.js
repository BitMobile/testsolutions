function OnLoading(name){
	Dialog.Debug("OnLoading: " + name);
}

function OnLoad(name){
	Dialog.Debug("OnLoad: " + name);
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

function RefreshCompare(sender, arg1, arg2, c1, c2){
	$.tvComparer.Text ="Compare: " + Compare(arg1, arg2, c1, c2);
}

function Compare(arg1, arg2, c1, c2){
	var result = "\n\r Text: ";
	result += CompareInternal(arg1, arg2);
	result += ";\n\r Controls: ";
	result += CompareInternal(c1, c2);
	result += ";\n\r Numbers constans: ";
	result += CompareInternal(42, 42);
	result += ";\n\r Numbers: ";
	result += CompareInternal(Number(42), Number("42"));	
	result += ";\n\r Dates: ";
	result += CompareInternal(Date("15.05.2015 12:45"), Date("15.05.2015 12:45"));	
	result += ";\n\r Booleans constans: ";
	result += CompareInternal(true, true);
	result += ";\n\r Booleans: ";
	result += CompareInternal(Boolean("true"), Boolean(1));
	return result;
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
		Dialog.Debug("Simple array: " + arr.length);
		Console.WriteLine(arr.join());		
	}
	else{
		Dialog.Message("arr != null error");
	}

	if (arr2d === null) {
		Dialog.Message("arr2d == null error");
	} else if (arr2d != null) {
		Dialog.Debug("2d array: " + arr2d.length);		
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

function CompareInternal(arg1, arg2){
	if(arg1 == arg2){
		if(arg1 != arg2)
			return "Error";		
		return "True";
	}
	return "False"	
}

