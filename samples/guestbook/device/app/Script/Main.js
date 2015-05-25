
function NewMessage(){
	Workflow.Action("Message", []); // Вызвать событие "Сообщение" в текущем рабочем процессе
}

function LoadDocuments() {
	var query = new Query("SELECT G.Date, G.Description, U.UserName "
			+ "FROM Document_GuestBook G "
			+ "LEFT JOIN Catalog_User U ON (U.Id = G.User) "
			+ "ORDER BY G.Date DESC");
	return query.Execute();// Возвратить ссылку на итерируемую выборку
}

function Sync() {
	$.btnSync.Visible = false; // Глобальная переменная $ возмоляет получать доступ к компонентам экрана
	$.syncIndicator.Visible = true; // Некоторые свойства можно задавать не только как аттрибут в XML
	$.syncIndicator.Start(); // Некоторые компоненты имею методы
	DB.Sync(SyncCallback) // В качестве одного из параметров передана ссылка на функцию
}

function SyncCallback(state) {
	$.btnSync.Visible = true;
	$.syncIndicator.Visible = false;
	$.syncIndicator.Stop();
	if (!DB.SuccessSync) 
		Dialog.Message("#sync_error#"); // Таблицы локализации можно применять не только в разметке
	else
		Workflow.Refresh([]);
}