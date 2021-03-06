function entries()
{
    $.Push("title", GetTitle());
    $.Push("entries", GetGuestBookEntries());
    return View.TemplateView("guestbook.xml");
}

function submitEntry()
{
    AddEntry($.message);
    return entries();
}

function GetGuestBookEntries()
{
    var qry = DB.CreateCommand();
    qry.Text = "SELECT TOP 10 D.[Date], U.[Description] AS [UserName], D.[Description] FROM [Document].[Guestbook] D JOIN [Catalog].[User] U ON U.[Id] = D.[User] ORDER BY [Date] DESC";
    return qry.Select();
}

function AddEntry(Message)
{
    var qry = DB.CreateCommand();
    qry.Text = "INSERT INTO [Document].[Guestbook]([Id],[Date],[User],[Description]) VALUES(@Id,@Date,@User,@Description)";
    qry.AddParameter("Id", Guid.NewGuid());
    qry.AddParameter("Date", DateTime.Now);
    qry.AddParameter("User", new Guid("53c19deb-cba6-11df-8012-00155dd2910d")); //guest user Id
    qry.AddParameter("Description", Message);
    qry.Execute();
}

function GetTitle()
{
    return "BIT:Mobile server pages demo !";
}
