
function Create(){
	var entity = DB.Create("Catalog.Stock");
	entity.Save();
	DoRefresh();
}

function DeleteLast(){
	var query = new Query("SELECT Id FROM Catalog_Stock");
	if(query.ExecuteCount() > 0){
		var ref = query.ExecuteScalar();
		DB.Delete(ref, false);
		DoRefresh();	
	}
}

function Select(){
	var query = new Query("SELECT * FROM Catalog_Stock");
	return query.Execute();
}