function Append() {
	$.layout.append("<c:TextView Text=\"0\"/><c:TextView Text=\"1\"/>").append(
			"<c:VerticalLayout CssClass=\"child\">"
					+ "<c:TextView Text=\"2\"/><c:TextView Text=\"3\"/>"
					+ "</c:VerticalLayout>").append(
			"\\DynamicContainers\\Component.xml").refresh();
}

function Prepend() {
	$.layout
			.prepend("<c:TextView Text=\"0\"/><c:TextView Text=\"1\"/>")
			.prepend(
					"<c:VerticalLayout CssClass=\"child\">"
							+ "<c:TextView Text=\"2\"/><c:TextView Text=\"3\"/>"
							+ "</c:VerticalLayout>").prepend(
					"\\DynamicContainers\\Component.xml").refresh();
}

function After() {
	$.anchor.after("<c:TextView Text=\"0\"/><c:TextView Text=\"1\"/>").after(
			"<c:VerticalLayout CssClass=\"child\">"
					+ "<c:TextView Text=\"2\"/><c:TextView Text=\"3\"/>"
					+ "</c:VerticalLayout>").after(
			"\\DynamicContainers\\Component.xml").refresh();
}

function Before() {
	$.anchor.before("<c:TextView Text=\"0\"/><c:TextView Text=\"1\"/>").before(
			"<c:VerticalLayout CssClass=\"child\">"
					+ "<c:TextView Text=\"2\"/><c:TextView Text=\"3\"/>"
					+ "</c:VerticalLayout>").before(
			"\\DynamicContainers\\Component.xml").refresh();
}

function RemoveFromStart() {
	$.layout.GetControl(0).remove().refresh();
}

function RemoveFromFinish() {
	var index = $.layout.Controls.Length - 1;
	$.layout.GetControl(index).remove().refresh();
}