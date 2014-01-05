function juggle() {
	var result = 0;
	for (var n = 0; n < arguments.length; n++) {
		result += arguments[n];
	}
	this.result = result;
}

var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1,2,3,4]);
juggle.call(ninja2, 5,6,7,8);

assert2(ninja1.result === 10, "juggle via apply");
assert2(ninja2.result === 26, "juggle via call");
