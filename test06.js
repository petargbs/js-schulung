/**
 * Test 06 - Arguments
 */

var foo = function() {
	// slice first argument out
	// Note, arguments isn't really a javascript Array ...at least not in ECMA <= 6 :)
	var args = Array.prototype.slice.call(arguments, 1);
	console.log(args);
};

foo('Arg1', 'Arg2', 'Arg3', 'Arg4');
