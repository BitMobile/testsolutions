function Ask(sender, path) {
	Dialog.Ask("Gallery?", GalleryCallback, path, CameraCallback, path);
}

function Choose(sender, path){
	var items = [[1, "Gallery"],[2, "Camera"]];
	Dialog.Choose("Choose your destiny!", items, CallbackChoose, path);	
}

function CallbackChoose(path, args){
	if (args.Result == 1){
		GalleryCallback(path);
	}	
	else if(args.Result == 2){
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