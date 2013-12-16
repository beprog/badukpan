var orgMode = null;
var $orgDebugHeader = null;
var $orgDebugContents = null;

module("D", {
	setup: function() {
		orgMode = D.mode();	//mode backup
		$orgDebugHeader = $("#" + D.headerId); //header backup
		$orgDebugContents = $("#" + D.contentsId); //contents backup
		$("#" + D.debugId).empty();
	}, teardown: function() {
		D.mode(orgMode);
		$("#" + D.debugId).empty();	//mode restore
		$orgDebugHeader.appendTo("#" + D.debugId);//header restore
		$orgDebugContents.appendTo("#" + D.debugId);//contents restore
	}
});
test("mode()", function() {
	D.mode(true);
	ok(D.mode() === true, "D.mode() set/get test1");
	D.mode(false);
	ok(D.mode() === false, "D.mode() set/get test2");
});	
test("f()", function() {
	D.mode(true);
	equal(D.f("f() TEST1"), true, "D.f() success1");
	equal(D.f("f() TEST2"), true, "D.f() success2");
	equal(!! $("." + D.itemNormal)[0], true, "." + D.itemNormal + " exist");
	equal(!! $("." + D.itemShaded)[0], true, "." + D.itemShaded + " exist");
});