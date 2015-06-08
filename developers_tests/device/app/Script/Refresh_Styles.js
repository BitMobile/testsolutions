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

	$.root.Refresh();
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

	$.root.Refresh();
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
	}

	$.vl_child_ex.Refresh(); // because root layouts has auto width or height, refresh applied to its parent 
}