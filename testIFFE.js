for (var i = 0; i < 5; i++) {
	// console.log(i);
	setTimeout(function() {
		console.log(i+' second');
	}, 1000);
}

//Output is not what we expected
//5 second
//5 second
//5 second
//5 second
//5 second

//Use a IFFE to solve the problem
for (var i = 0; i < 5; i++) {
	(function (fixValue) {
		setTimeout(function() {
			console.log(fixValue+' second');
		}, 1000);
	})(i); 
	
}
//Output is what we expected
//0 second
//1 second
//2 second
//3 second
//4 second
