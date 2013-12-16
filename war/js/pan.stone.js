var pan; if (!pan) { pan = {}; }
pan.stone = (function (spec) {
	var diameter = spec.diameter || 24,
		stonePrefix = 's',
		//end of spec
		radius = diameter / 2,
		m_stoneNo = 0,
		getStoneNo = function () {
			return stonePrefix + m_stoneNo; 
		},
		getStoneNoAndAdd = function () {
			m_stoneNo++;
			return stonePrefix + m_stoneNo; 
		},
		initStoneNo = function () {
			m_stoneNo = 0;
		},
		decStoneNo = function () {
			assert(m_stoneNo > 0, 'decStoneNo()');
			m_stoneNo = m_stoneNo - 1;
			/*return stonePrefix + m_stoneNo;*/ 
		},
		turn = 'B',//for black
		getTurn = function () {
			return turn; 
		},
		setTurn = function (newTurn) {
			turn = newTurn; 
		},
		initTurn = function () {
			turn = 'B'; 
		},
		getTurnAndToggle = function () {
			var orgTurn = turn;
			if (turn === 'B') {
				turn = 'W';
			} else if (turn === 'W') {
				turn = 'B';
			}
			return orgTurn; 
		},
		drawImage = function (canvasId/*In DOM*/, imagePath/*full path*/) {	
			var canvas = $("#" + canvasId).get(0),
				ctx = pan.ut.IECanvas(canvas).getContext('2d'),
				image = new Image();
			image.onload = function() {
				ctx.drawImage(image, 0, 0, diameter, diameter);
			};
			image.src = imagePath;
		},
		prepGuide = function (color) {
			if (! $("#" + pan.c.boardPanel)[0]) { return; }
			var id = (color === "B" ? pan.c.guideBlack : pan.c.guideWhite),
				imagePath = pan.c.imgFolder + '/' 
							+ (color === "B" ? "black" : "white")
							+ '-' + diameter + '.png';
			drawImage(id, imagePath);
			//pan.ut.dispayCanvasProps(id);
		},
		//badukpan.js event handler에서 사용하는 함수
		stoneStyleStr = function (coord, zIndex) {
			return "left:" + coord.x + "px;" + "top:" + coord.y + "px;"
				 + "z-index:" + zIndex + ";"
		},
		stoneStyleInvisible = stoneStyleStr(new Point(-100, -100), -1),
    	hideGuide = function () {
			var guideBlack = document.getElementById(pan.c.guideBlack),
	    		guideWhite = document.getElementById(pan.c.guideWhite);
	        guideBlack.style.cssText = stoneStyleInvisible;
			guideWhite.style.cssText = stoneStyleInvisible;
		},
		setGuidePos = function (event) {
			var ne = pan.ut.normalizeEvent(event);
			if (! pan.board.withinBounds(ne)) {
				hideGuide();
				return;
			}
			var	guideBlack = document.getElementById(pan.c.guideBlack),
        		guideWhite = document.getElementById(pan.c.guideWhite),
        		stoneStyleVisible = stoneStyleStr(pan.board.quantCoord(ne), 0);
		    if (getTurn() === 'B') {
				guideBlack.style.cssText = stoneStyleVisible;
				guideWhite.style.cssText = stoneStyleInvisible;
			} else { //'W'
				guideBlack.style.cssText = stoneStyleInvisible;
				guideWhite.style.cssText = stoneStyleVisible;
			}
		},
		draw = function (coord, src, eventType) {
			var stone = document.createElement("canvas"),
				stoneId = getStoneNoAndAdd();
			
			stone.setAttribute("width", diameter); //ie not work
			stone.setAttribute("height", diameter);//ie not work
			stone.width = 24;	//ie not work
			stone.height = 24;	//ie not work
			stone.style.width = "24px";	//ie not work
			stone.style.height = "24px";//ie not work
			
			stone.setAttribute("id", stoneId);
			stone.setAttribute("class", "stone");
			
			document.getElementById(pan.c.stones).appendChild(stone);
			var imgSrc = pan.c.imgFolder + '/' 
						+ (getTurnAndToggle() === 'B' ? 'black' : 'white')
						+ '-' + diameter + '.png';
			drawImage(stoneId, imgSrc);
			//stone left/top test
			$("#" + stoneId).css("left", coord.x).css("top", coord.y);
			stone.setAttribute("left", coord.x);
			stone.setAttribute("top", coord.y);
			stone.left = coord.x;
			stone.top = coord.y;
			stone.style.left = coord.x + "px";	//ie not work
			stone.style.top = coord.y + "px";//ie not work
			
			//pan.ut.dispayCanvasProps(stoneId);
			D.f("stone.draw: " + src + " - " + eventType + "(" + stoneId + ")");
		},
		drawStone = function (event, src/*, third parameter needed? B or W etc...*/) {
			var ne = pan.ut.normalizeEvent(event);
			if (pan.board.withinBounds(ne)) {
				draw(pan.board.quantCoord(ne), src, event.type);
			}
		},
		//controller
		goPrev = function () {
			var stoneNo = getStoneNo();
			if (stoneNo.replace(stonePrefix, "") < 1) { return; };
			$("#" + stoneNo).remove();
			decStoneNo();
			getTurnAndToggle();
		},
		goFirst = function () {
			var stoneNo = getStoneNo();
			if (stoneNo.replace(stonePrefix, "") < 1) { return; };
			$("#" + pan.c.stones).empty();
			initStoneNo();
			initTurn();
		};
		//drawLabel();
		//drawMarks();
		//drawLastMoveMarker();
        
	return {
		draw: draw,
		prepGuide: prepGuide,
		getTurn: getTurn,
		setTurn: setTurn,
		initTurn: initTurn,
		getTurnAndToggle: getTurnAndToggle,
		diameter: diameter,
		radius: radius,
		initStoneNo: initStoneNo,
		hideGuide: hideGuide,
		setGuidePos: setGuidePos,
		drawStone: drawStone,
		getStoneNo: getStoneNo,
		getStoneNoAndAdd: getStoneNoAndAdd,
		decStoneNo: decStoneNo,
		goPrev: goPrev,
		goFirst: goFirst
	};
}({ /*diameter: 24*/ })
);