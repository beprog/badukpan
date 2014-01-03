assert2(true, "|----- BEFORE OUTER -----|");
/*test code*/
assert2(typeof outer==='function', "outer() is in scope");
assert2(typeof inner==='function', "inner() is in scope");
assert2(typeof a==='number', "a is in scope");
assert2(typeof b==='number', "b is in scope");
assert2(typeof c==='number', "c is in scope");


function outer() {
	assert2(true, "|----- INSIDE OUTER, BEFORE a -----|");
	/*test code*/
	assert2(typeof outer==='function', "outer() is in scope");
	assert2(typeof inner==='function', "inner() is in scope");
	assert2(typeof a==='number', "a is in scope");
	assert2(typeof b==='number', "b is in scope");
	assert2(typeof c==='number', "c is in scope");

	var a = 1;
	
	assert2(true, "|----- INSIDE OUTER, AFTER a -----|");
	/*test code*/
	assert2(typeof outer==='function', "outer() is in scope");
	assert2(typeof inner==='function', "inner() is in scope");
	assert2(typeof a==='number', "a is in scope");
	assert2(typeof b==='number', "b is in scope");
	assert2(typeof c==='number', "c is in scope");

	function inner() { /* does nothing */ }

	var b = 2;

	assert2(true, "|----- INSIDE OUTER, AFTER inner() AND b -----|");
	/*test code*/
	assert2(typeof outer==='function', "outer() is in scope");
	assert2(typeof inner==='function', "inner() is in scope");
	assert2(typeof a==='number', "a is in scope");
	assert2(typeof b==='number', "b is in scope");
	assert2(typeof c==='number', "c is in scope");

	if (a == 1) {
		var c = 3;
		
		assert2(true, "|----- INSIDE OUTER, INSIDE if -----|");
		/*test code*/
		assert2(typeof outer==='function', "outer() is in scope");
		assert2(typeof inner==='function', "inner() is in scope");
		assert2(typeof a==='number', "a is in scope");
		assert2(typeof b==='number', "b is in scope");
		assert2(typeof c==='number', "c is in scope");
	}

	assert2(true, "|----- INSIDE OUTER, OUTSIDE if -----|");
	/*test code*/
	assert2(typeof outer==='function', "outer() is in scope");
	assert2(typeof inner==='function', "inner() is in scope");
	assert2(typeof a==='number', "a is in scope");
	assert2(typeof b==='number', "b is in scope");
	assert2(typeof c==='number', "c is in scope");

}

outer();

assert2(true, "|----- AFTER OUTSIDE -----|");
/*test code*/
assert2(typeof outer==='function', "outer() is in scope");
assert2(typeof inner==='function', "inner() is in scope");
assert2(typeof a==='number', "a is in scope");
assert2(typeof b==='number', "b is in scope");
assert2(typeof c==='number', "c is in scope");
