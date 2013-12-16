module("Board", {
	setup: function() {
		;//do nothing
	}, teardown: function() {
		;//do nothing
	} 
});
test("drawGridLabels() ", function() {
	ok(String.fromCharCode(65) === 'A', "65 -> A(1)");
	ok(String.fromCharCode(73) === 'I', "73 -> I : skip");
	ok(String.fromCharCode(74) === 'J', "74 -> J(9)");
	ok(String.fromCharCode(84) === 'T', "84 -> T(19)");
});