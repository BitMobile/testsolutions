function Create() {
	var entity = DB.Create("Catalog.Stock");
	entity.Save();
	DoRefresh();
}

function DeleteLast() {
	var query = new Query("SELECT Id FROM Catalog_Stock");
	if (query.ExecuteCount() > 0) {
		var ref = query.ExecuteScalar();
		DB.Delete(ref, false);
		DoRefresh();
	}
}

function Select() {
	var query = new Query("SELECT * FROM Catalog_Stock");
	return query.Execute();
}

function CreateUserTable(sender, name) {
	if (name != null && !IsBlankString(name)) {
		DB.CreateTable(name, [ "Text" ]);
		DoRefresh(name);
	}
}

function ClearUserTable(sender, name) {
	if (name != null && !IsBlankString(name)) {
		DB.TruncateTable(name);
		DoRefresh(name);
	}
}

function DropUserTable(sender, name) {
	if (name != null && !IsBlankString(name)) {
		DB.DropTable(name);
		DoRefresh();
	}
}

function InsertUserTable(sender, name, value) {
	if (name != null && !IsBlankString(name)) {		
		var q = new Query("VALUES('" + value + "')");
		q.ExecuteInto(name);
		DoRefresh(name);
	}
}

function SelectUserTable(name) {
	if (name != null && !IsBlankString(name)) {
		var q = new Query("SELECT * FROM UT_" + name);
		return q.Execute();
	}
	return [];
}
