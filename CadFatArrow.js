//	A	curried	function 
var add = function (x) { return function (y) { return x + y; }; };
//	Simple	usage 
add(123)(456);
//	partially	applied 
var add123 = add(123);
//	fully	apply	the	function 
add123(456);
