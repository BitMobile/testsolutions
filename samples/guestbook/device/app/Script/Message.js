function AddMessage(text){
	var message = DB.Create("Document.GuestBook"); // Создание новой сущности
	message.Date = CurrentDate();
	message.User = $.common.UserRef; // Ссылка на текущего авторизованного пользователя
	message.Description = text;
	message.Save(); // Записывает сущность в БД
	Workflow.Commit(); // Зафиксировать транзакцию и завершить рабочий процесс
}

function Back(){
	Workflow.Back(); // Вернуться на шаг назад. Если доступных шагов нет, рабочий процесс завершается 
}