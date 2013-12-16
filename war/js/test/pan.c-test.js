module("C", {
	setup: function() {
		;//do nothing
	}, teardown: function() {
		;//do nothing
	} 
});
test("contant", function() {
	ok(pan.c.boardPanel === 'boardPanel', "boardPanel");
	ok(pan.c.board === 'board', "board");
	ok(pan.c.guideStone === 'guideStone', "guideStone");
	ok(pan.c.guideBlack === 'guideBlack', "guideBlack");
	ok(pan.c.guideWhite === 'guideWhite', "guideWhite");
	ok(pan.c.stones === 'stones', "stones");
});