function AddMessage(text){
	var message = DB.Create("Document.GuestBook"); // �������� ����� ��������
	message.Date = CurrentDate();
	message.User = $.common.UserRef; // ������ �� �������� ��������������� ������������
	message.Description = text;
	message.Save(); // ���������� �������� � ��
	Workflow.Commit(); // ������������� ���������� � ��������� ������� �������
}

function Back(){
	Workflow.Back(); // ��������� �� ��� �����. ���� ��������� ����� ���, ������� ������� ����������� 
}