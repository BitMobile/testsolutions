function Show(sender, path) {
	Dialog.Ask("Gallery?", GalleryCallback, path, CameraCallback, path);
}

function GalleryCallback(state, args) {
	Gallery.Size = 300;
	Gallery.Copy(state);
}

function CameraCallback(state, args) {
	Camera.Size = 300;
	Camera.MakeSnapshot(state);
}
