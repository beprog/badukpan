function Ninja() { 
	this.skulk = function() { return this; };
}

var ninja1 = new Ninja();
var ninja2 = new Ninja();

assert2(ninja1.skulk() === ninja1, "The 1st ninja is skulking");
assert2(ninja2.skulk() === ninja2, "The 2nd ninja is skulking");
