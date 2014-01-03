var assert = function(condition, message) { 
    if (! condition)
        throw Error("Assert failed" + (typeof message !== "undefined" ? ": " + message : ""));
};

/*	for ninja	*/
function assert2(value, desc) {
	var li = document.createElement("li");
	li.className = value ? "pass" : "fail";
	li.appendChild(document.createTextNode(desc));
	document.getElementById("results").appendChild(li);
}