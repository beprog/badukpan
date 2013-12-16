/* javascript module for test
 * VERSION 	: 1. 20130422: D.mode(), D.f() format available
 * 			  2. 20130428: even when mode is false, let f() be operate
 * 			  3. 20130504: D.err(), Board button add
 * 			  4. 20130623: clear button, event handler added
 * 			  5. 20130702: #debugContents introduced
 * 			  6. 20130703: prepend to top of contents
 * 			  7. 20130705: spec object introduced
 */
var D = (function (spec) {
	var _mode = 	 spec.mode 		 || false,	//debug mode
		debugId = 	 spec.debugId 	 || "debug",
		headerId = 	 spec.headerId 	 || "debugHeader",
		contentsId = spec.contentsId || "debugContents",
		itemNormal = spec.itemNormal || "debugItem",
		itemShaded = spec.itemShaded || "debugItemShaded",
		prompt = "> ",
		
		mode = function (newMode) {	//GETTER, SETTER define together
			if (newMode === undefined) {
				return _mode;
			} else if (typeof newMode === "boolean") {
				_mode = newMode;
				$("#" + debugId)
					.css("display", _mode === true ? "block" : "none");
			} 
		},
		prepareFrame = function (debugElem) {
		    if (! $("#" + headerId)[0]) { 
		    	$("<div id='" + headerId + "' />")
		    		.append("<button id='clearDebug'>CLEAR DEBUG</button>")
		    		.append("<button id='clearBoard'>CLEAR BOARD</button>")
		    		.appendTo(debugElem);
		    }
		    if (! $("#" + contentsId)[0]) { 	
		    	$("<div id='" + contentsId + "' />")
		    		.insertAfter("#" + headerId);
		    }
		},
		f = function (msg) {
			var $debug = $("#" + debugId);
			if (! $debug[0]) { return false }
			
		    prepareFrame($debug);
			$debugContents = $("#" + contentsId);
			$("<div />").html(prompt + msg)
				.attr("class", $debugContents.children().length % 2 === 1 ? 
						itemShaded : itemNormal)
				.prependTo("#" + contentsId);
			return true;
		},
		err = function (e) {
			f('**ERROR: ' + e.name + " - " + e.message);
		};
	//event	handler
	$(function() {
		$(document).on("click keypress", "button#clearDebug", function(e){
		    $("#" + contentsId).empty();
		});
		$(document).on("click keypress", "button#clearBoard", function(e){
			$("#stones").empty();
			pan.stone.initStoneNo();
			pan.stone.setTurn('B');
		});
	});
	return {
		mode: mode,
		f: f,
		err: err,
		//expose for test
		debugId: debugId,
		headerId: headerId,
		contentsId: contentsId,
		itemNormal: itemNormal,
		itemShaded: itemShaded
	};
}({ mode: true,
	debugId: "debug",
	headerId: "debugHeader",
	contentsId: "debugContents",
	itemNormal: "debugItem",
	itemShaded: "debugItemShaded" })
);