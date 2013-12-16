var pan; if (! pan) { pan = {}; }
pan.ut = (function () {
	var IECanvas = function (canvasElem) {	//IE를 위한 전처리
			if (canvasElem !== null) {
				if (! Modernizr.canvas) {
					//test
					G_vmlCanvasManager.initElement(canvasElem);
				}
			}
			return canvasElem;
		},
		//FF need normali zeEvent() function
		normalizeEvent = function (event) {
			if(! event.offsetX) {
				event.offsetX = (event.pageX - $(event.target).offset().left);
				event.offsetY = (event.pageY - $(event.target).offset().top);
			}
			return event;
		},
		dispayCanvasProps = function (canvasId) {
			var canvas = $("#" + canvasId)[0],
				canvasProps = ['width',
				               'height'
				],
			    styleProps = ['top',
			                  'left',
			  			      //'overflow',
			  			      'cssText'
	  			];
			D.f("[dispayCanvasProp: " + canvasId + "]");
			for (var i = 0; i < canvasProps.length; i += 1) { 
				D.f(canvasProps[i] + ": " + canvas[canvasProps[i]]);
			}
			for (var i = 0; i < styleProps.length; i += 1) { 
				D.f(styleProps[i] + ": " + canvas['style'][styleProps[i]]);
			}
		},
		preloadImage = function (src) {
			(new Image()).src = src;
		},
		throwError = function (name, message) {
			throw {
				name: name || "badukpanError",
				message: message || "badukpan error message"
			};
		},
		adjustX = function (event, childElem, radius) {
			return event.clientX - childElem.parentElement.offsetLeft - radius;
		},
		adjustY = function (event, childElem, radius) {
			return event.clientY - childElem.parentElement.offsetTop - radius;
		};
	return {
		IECanvas: IECanvas,
		normalizeEvent: normalizeEvent,
		dispayCanvasProps: dispayCanvasProps,
		preloadImage: preloadImage,
		throwError: throwError,
		adjustX: adjustX,
		adjustY: adjustY
	};
}());