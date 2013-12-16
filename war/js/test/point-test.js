module("Point", {
	setup: function() {
		;//do nothing
	}, teardown: function() {
		;//do nothing
	}
});
test("Point()", function() {
	var test_point = new Point(3, 4);
	ok(test_point.x === 3, "Point.x");
	ok(test_point.y === 4, "Point.y");
	/*
	ok(Point.distance(new Point(0, 0), new Point(3, 4)) === 5, 
		"Point.distance()");
	*/
});