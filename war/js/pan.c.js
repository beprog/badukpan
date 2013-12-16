var pan; if (! pan) { pan = {}; }
//dom constant definition
pan.c = (function () {
	var namespace = 'pan',
		imgFolder = 'img',
		boardPanel = 'boardPanel',
		board = 'board',
		guideStone = 'guideStone',
		guideBlack = 'guideBlack',
		guideWhite = 'guideWhite',
		stones = 'stones';
	return {
		namespace: namespace,
		imgFolder: imgFolder,
		boardPanel: boardPanel,
		board: board,
		guideStone: guideStone,
		guideBlack: guideBlack,
		guideWhite: guideWhite,
		stones: stones
	};
}());