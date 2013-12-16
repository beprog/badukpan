var pan; if (!pan) { pan = {}; }
pan.board = (function (spec) {
	var boardSize = spec.boardSize || 19,
		gridLabel = spec.gridLabel || true,
		// end of spec
		boardName = pan.c.board, 
		paddingRate = gridLabel === true ? 0.06 : 0.045,
		board = pan.ut.IECanvas(document.getElementById(boardName)),
		ctx = board === null ? null : board.getContext('2d'),
		width = board === null ? 0 : $("#" + boardName).attr("width"),
		height = board === null ? 0 : $("#" + boardName).attr("height"),
		paddingRow = width * paddingRate,
		paddingCol = height * paddingRate,
		pieceWidth = (width - 2 * paddingRow) / (boardSize - 1), 
		pieceHeight = (height - 2 * paddingCol) / (boardSize - 1),
		drawGrid = function () {
			ctx.beginPath();
			for (var idx = 0; idx < boardSize; idx++) {
				ctx.moveTo(paddingRow, paddingCol + idx * pieceHeight);
				ctx.lineTo(width - paddingRow, paddingCol + idx * pieceHeight);
				ctx.moveTo(paddingRow + idx * pieceWidth, paddingCol);
				ctx.lineTo(paddingRow + idx * pieceWidth, height - paddingCol);
			}
			for (var xIdx = 0; xIdx < 3; xIdx++){
				for (var xCoord = 0, yCoord = 0, yIdx = 0; yIdx < 3; yIdx++) {
					xCoord = paddingRow + (3 + 6 * xIdx) * pieceWidth;
					yCoord = paddingCol + (3 + 6 * yIdx) * pieceHeight;
					ctx.moveTo(xCoord, yCoord);
					ctx.arc(xCoord, yCoord, 2, 0, 2 * Math.PI, false);
				}
			}
			ctx.fill();
			ctx.stroke();
		},
		drawGridLabels = function () {
			if (! gridLabel) { return; }
			ctx.font = "normal 10px sans-serif";
			ctx.fillStyle = '#333333';
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			for (var char = 65/*A*/, label = null, xCoord = 0, yCoord = 0, 
					 idx = 0; idx < boardSize; idx++, char++) {
				yCoord = height - paddingCol - idx * pieceHeight;
				ctx.fillText(idx + 1,paddingRow / 4, yCoord);
				ctx.fillText(idx + 1, width - paddingRow / 4, yCoord);
				if (char === 73/*skip 'I'*/) { char++; }
				label = String.fromCharCode(char);
				xCoord = paddingRow + idx * pieceWidth;
				ctx.fillText(label, xCoord,paddingCol / 4);
				ctx.fillText(label, xCoord, width - paddingCol / 4);
			}
		},
		draw = function () {
			if (board === null) { return; }
			var boardImg = new Image();
			window.onload = function() {
				//error occur in IE if use boardImg.onload
				//D.f("Board.draw - ctx: " + ctx);
				
				ctx.drawImage(boardImg, 0, 0);
				drawGrid();
				drawGridLabels();
			};
			boardImg.src = pan.c.imgFolder + '/wood.png';
		},
		quantCoord = function (event) {
			var quantPos = function (pos, padding, pieceLength) {
					return Math.round((pos - padding) / pieceLength)
						 * pieceLength + padding - pan.stone.radius;
				},
				x = quantPos(event.offsetX, paddingRow, pieceWidth),
            	y = quantPos(event.offsetY, paddingCol, pieceHeight);
			return new Point(x,y);
        },
		withinBounds = function (event) {
			var radius = pan.stone.radius,
				x = event.offsetX,
				y = event.offsetY;
			D.f('x: ' + x + ', y: ' + y);
			if (x < paddingRow - radius ||
				x > (width - paddingRow) + radius ||
				y < paddingCol - radius ||
				y > (height - paddingCol) + radius) {
				//D.f('withinBounds: false');
				return false;
			} else if (isNaN(x) || isNaN(y)) {	//touchmove event in mobile
				//D.f('withinBounds: false(NaN)');
				return false;
			} else {
				//D.f('withinBounds: true');
				return true;
			}
		};
	return {
		draw: draw,
		quantCoord: quantCoord,
		withinBounds: withinBounds,
		width: width,
		height: height,
		paddingRow: paddingRow,
		paddingCol: paddingCol,
		pieceWidth: pieceWidth,
		pieceHeight: pieceHeight
	};
}({ /*boardSize: 19,
	gridLabel: true*/ })
);