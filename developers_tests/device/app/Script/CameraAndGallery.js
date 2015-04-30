function Ask(sender, path) {
	Dialog.Alert("Camera or gallery?", AlertCallback, path, "Camera",
			"Gallery", "Cancel");
}

function AlertCallback(path, args) {
	if (args.Result == 0)
		CameraCallback(path);
	else if (args.Result == 1)
		GalleryCallback(path);
}

function Choose(sender, path) {
	var items = [ [ 1, "Gallery" ], [ 2, "Camera" ] ];
	Dialog.Choose("Choose your destiny!", items, CallbackChoose, path);
}

function CallbackChoose(path, args) {
	if (args.Result == 1) {
		GalleryCallback(path);
	} else if (args.Result == 2) {
		CameraCallback(path);
	}
}

function GalleryCallback(path) {
	Gallery.Size = Number($.size.Text);
	Gallery.Copy(path, DoRefresh);
}

function CameraCallback(path) {
	Camera.Size = Number($.size.Text);
	Camera.MakeSnapshot(path, DoRefresh);
}
