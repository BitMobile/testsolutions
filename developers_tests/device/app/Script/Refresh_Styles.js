function Empty() {

}

function RefreshButtons() {
	if ($.root.CssClass == "root") {
		$.root.CssClass = "root-new";
		$.button.CssClass = "button-new";
		$.button_ex.CssClass = "button-new-ex";
	}
	else {
		$.root.CssClass = "root";
		$.button.CssClass = "button-initial";
		$.button_ex.CssClass = "button-initial-ex";
	}

	$.button_ex.Refresh();
}

function RefreshTextViews() {
	if ($.root.CssClass == "root") {
		$.root.CssClass = "root-new";
		$.textView.CssClass = "textView-new";
		$.textView_ex.CssClass = "textView-new-ex";
	}
	else {
		$.root.CssClass = "root";
		$.textView.CssClass = "textView-initial";
		$.textView_ex.CssClass = "textView-initial-ex";
	}

	$.textView.Refresh();
}

function RefreshLayouts(){
	if ($.hl.CssClass == "root") {
		$.hl.CssClass = "root-new";
		$.hl_child.CssClass = "child-new";
		$.hl_child_ex.CssClass = "child-ex-new";
		$.dl.CssClass = "root-new";
		$.dl_child.CssClass = "child-new";
		$.dl_child_ex.CssClass = "child-ex-new";
		$.dl_child1.CssClass = "child-new";
		$.vl.CssClass = "root-new";
		$.vl_child.CssClass = "child-new";
		$.vl_child_ex.CssClass = "child-ex-new";
		$.line.CssClass = "huge-line";
	}
	else {
		$.hl.CssClass = "root";
		$.hl_child.CssClass = "child";
		$.hl_child_ex.CssClass = "child-ex";
		$.dl.CssClass = "root";
		$.dl_child.CssClass = "child";
		$.dl_child_ex.CssClass = "child-ex";
		$.dl_child1.CssClass = "child";
		$.vl.CssClass = "root";
		$.vl_child.CssClass = "child";
		$.vl_child_ex.CssClass = "child-ex";
		$.line.CssClass = "small-line";
	}

	// because root layouts has resizable width or height, refresh applied to its parent
	$.vl_child_ex.Refresh();  
}

function RefreshEditText(){
	if ($.root.CssClass == "root") {
		$.root.CssClass = "root-new";
		$.editText.CssClass = "new";
		$.editText_ex.CssClass = "new";
	}
	else {
		$.root.CssClass = "root";
		$.editText.CssClass = "initial";
		$.editText_ex.CssClass = "initial";
	}

	$.editText_ex.Refresh();
}

function RefreshMemoEdit(){
	if ($.root.CssClass == "root") {
		$.root.CssClass = "root-new";
		$.memoEdit.CssClass = "new";
		$.memoEdit_ex.CssClass = "new";
	}
	else {
		$.root.CssClass = "root";
		$.memoEdit.CssClass = "initial";
		$.memoEdit_ex.CssClass = "initial";
	}

	$.memoEdit.Refresh();
}

function RefreshSwipeLayouts(){
	if ($.root.CssClass == "root") {
		$.root.CssClass = "root-new";
		$.shl.CssClass = "new";
		$.svl.CssClass = "new";
	}
	else {
		$.root.CssClass = "root";
		$.shl.CssClass = "initial";
		$.svl.CssClass = "initial";
	}

	$.shl.Refresh();
}

function RefreshImage(){
	if ($.root.CssClass == "root") {
		$.root.CssClass = "root-new";
		$.img.CssClass = "new";		
	}
	else {
		$.root.CssClass = "root";
		$.img.CssClass = "initial";		
	}

	$.img.Refresh();
}

function RefreshScrollView(){
	if ($.root.CssClass == "root") {
		$.root.CssClass = "root-new";
		$.sv.CssClass = "new";		
		$.img0.CssClass = "cat9";
		$.img1.CssClass = "cat8";
		$.img2.CssClass = "cat7";
		$.img3.CssClass = "cat6";
		$.img4.CssClass = "cat5";
		$.img5.CssClass = "cat4";
		$.img6.CssClass = "cat3";
		$.img7.CssClass = "cat2";
		$.img8.CssClass = "cat1";
		$.img9.CssClass = "cat0";
	}
	else {
		$.root.CssClass = "root";
		$.sv.CssClass = "initial";		
		$.img0.CssClass = "cat0";
		$.img1.CssClass = "cat1";
		$.img2.CssClass = "cat2";
		$.img3.CssClass = "cat3";
		$.img4.CssClass = "cat4";
		$.img5.CssClass = "cat5";
		$.img6.CssClass = "cat6";
		$.img7.CssClass = "cat7";
		$.img8.CssClass = "cat8";
		$.img9.CssClass = "cat9";
	}

	$.img0.Refresh();
}