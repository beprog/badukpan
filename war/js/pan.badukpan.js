$(function() {
	//TODO: Safari(M)		- board blur
	//		Opera Classic(M)- board blur
	//		Opera Beta(M)	- board blur
	//						- screen blink

	//pan event definition
	$("#" + pan.c.boardPanel)
	  .bind('drawStone.' + pan.c.namespace, function(e, orgE) {
		D.f(this.id + ": " + e.type + "(" + orgE.type + ")");
		pan.stone.hideGuide();//drawStone 앞에 배치(순서 바뀌면 FireFox(M)에서 오류)
		pan.stone.drawStone(orgE, this.id);
	}).bind('setGuidePos.' + pan.c.namespace, function(e, orgE) {
		D.f(this.id + ": " + e.type + "(" + orgE.type + ")");
		pan.stone.setGuidePos(orgE);
	}).bind('hideGuide.' + pan.c.namespace, function(e, orgE) {
		D.f(this.id + ": " + e.type + "(" + orgE.type + ")");
		pan.stone.hideGuide();
	});
	
	//dom event mapping
	$("#" + pan.c.boardPanel) 
	  .bind('mouseup', function(e) { //touchend
		$(this).trigger('drawStone.' + pan.c.namespace, e);
	}).bind('touchend', function(e) {
		//D.f(this.id + ": " + e.type + " - DO NOTHING");
	}).bind('mousemove touchmove', function(e) { //mouseover
		$(this).trigger('setGuidePos.' + pan.c.namespace, e);
	}).bind('mouseout', function(e) { //touchstart
		$(this).trigger('hideGuide.' + pan.c.namespace, e);
	}).bind('touchstart', function(e) {
		//D.f(this.id + ": " + e.type + " - DO NOTHING");
	});
	
	//disable event	
	$("." + pan.c.guideStone).bind('click mousemove mouseout', false);
	$("#" + pan.c.stones)
		.bind('click mousemove mouseup touchend mouseout', false);

	//short cut for debug
	$("body").bind('keyup', function(e) {
		if (e.which === 49 && e.ctrlKey === true && e.shiftKey === true) {
			//Ctrl + Alt + 1 : debugPanel init
			$("#clearDebug").click();
		} else if (e.which === 50 && e.ctrlKey === true && e.shiftKey === true) {
			//Ctrl + Alt + 2 : board init
			$("#clearBoard").click();
		}
	});
	
	//review
	$("#goPrev").bind("click keypress", function(e){
		pan.stone.goPrev();
	});
	$("#goFirst").bind("click keypress", function(e){
		pan.stone.goFirst();
	});
	
});
(function preloadBadukpanImages() {
	if (! $("#" + pan.c.boardPanel)[0]) { return; }
	pan.ut.preloadImage(pan.c.imgFolder + '/black-' + pan.stone.diameter + '.png');
	pan.ut.preloadImage(pan.c.imgFolder + '/white-' + pan.stone.diameter + '.png');
	pan.ut.preloadImage(pan.c.imgFolder + '/wood.png');
	D.f("images preloaded");
}());
(function init() {
	pan.board.draw();
	pan.stone.prepGuide('B');
	pan.stone.prepGuide('W');
}());
(function aboutFunc() {
	$(".critical td:contains('X')").addClass('criticalFailure');
	$(".optional td:contains('X')").addClass('optionalFailure');
}());