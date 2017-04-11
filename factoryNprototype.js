function each(array,func) {
	var args = [].slice.call(arguments,0),
		array = args[0],
		func = args[1];
	array.forEach(function(index,val) {
		func(index,val);
	});
}//Create a function to handle array

var extend = function extend(obj) {
	var tmpObj = {},
		objArray = [].slice.call(arguments,0);
	/*objArray.forEach(function(src) {
		for(var prop in src) {
			tmpObj[prop] = src[prop]
		}
	});*/
	each([].slice.call(arguments,0),function(src) {
		for(var prop in src) {
			tmpObj[prop] = src[prop]
		}
	});
	return tmpObj
}//extend(desObj,srcObj)

var carPrototype = {
	color: 'pink',
	direction: 0,
	mph: 0,
	gas: function gas(amount) {
		amount = amount || 10;
		this.mph += amount;
		return this
	},
	brake: function brake(amount) {
		amount = amount || 10;
		this.mph = ((this.mph - amount)<0)?
					0:
					this.mph-amount;
		return this
	}
}

var Car = function Car(options) {
	return extend(Object.create(carPrototype),options);
}
var options = {
	color: 'red'
}
var newCar = Car(options);
console.log(newCar);
