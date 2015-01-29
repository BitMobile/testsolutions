function Sync() {
	$.sync.Start();
	FileSystem.SyncShared(SyncSharedCallback);
}

function SyncSharedCallback(args) {
	if (args.Result)
		FileSystem.UploadPrivate(UploadPrivateCallback);
	else {
		Dialog.Message(FileSystem.LastError);
		$.sync.Stop();
	}
}

function UploadPrivateCallback(args) {
	if (args.Result)
		Dialog.Message("Success");
	else
		Dialog.Message(FileSystem.LastError);
	$.sync.Stop();
}

function CreateDirectory(sender, path) {
	try {
		FileSystem.CreateDirectory(path);
	} catch (e) {
		Dialog.Message(e);
	}
}

function Delete(sender, path) {
	try {
		FileSystem.Delete(path);
	} catch (e) {
		Dialog.Message(e);
	}
}

function Exists(sender, path) {
	try {
		var r = FileSystem.Exists(path);
		Dialog.Message(r);
	} catch (e) {
		Dialog.Message(e);
	}
}

function Copy(sender, path) {
	try {
		FileSystem.Copy(path, "/private/copy.txt");
	} catch (e) {
		Dialog.Message(e);
	}
}

function DirFiles(sender, path) {
	try {
		var dir = FileSystem.DirFiles(path);
		var log = "";
		for (s in dir) {
			log += s;
			log += '\r\n';
		}
		Dialog.Message(log);
	} catch (e) {
		Dialog.Message(e);
	}
}

function DirFolders(sender, path) {
	try {
		var dir = FileSystem.DirFolders(path);
		var log = "";
		for (s in dir) {
			log += s;
			log += '\r\n';
		}
		Dialog.Message(log);
	} catch (e) {
		Dialog.Message(e);
	}
}

function CreateTextFile(sender, path) {
	try {
		FileSystem.CreateTextFile(path, "Hello World!");
	} catch (e) {
		Dialog.Message(e);
	}
}

function OpenTextFile(sender, path) {
	try {
		var text = FileSystem.OpenTextFile(path);
		Dialog.Message(text);
	} catch (e) {
		Dialog.Message(e);
	}
}
