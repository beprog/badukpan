function creep() { return this; }

assert2(creep() === window, "Creeping in the window");

var sneak = creep;

assert2(sneak() === window, "Sneaking in the window");

var ninja1 = {
		skulk: creep
};

assert2(ninja1.skulk() === ninja1, "The 1st ninja is skulking");

var ninja2 = {
		skulk: creep
};

assert2(ninja2.skulk() === ninja2, "The 2nd ninja is skulking");