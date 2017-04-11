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

function stampit(methods,state,enclose) {
	var obj;
	if (arguments.length === 3) {
		var obj = new enclose(),
		shareProp = Object.create(methods),
		obj = extend(obj,state,shareProp);
	}
	
	return {
		create: function create() {
			return obj
		},
		methods: function methods(methods) {
			obj = Object.create(methods);
			return this
		},
		state: function state(state) {
			obj = extend(obj,state);
			return obj
		}
	}
}

/*var Car = stampit(
	//methods
	{
		delegateMethod: function delegateMethod() {
			return {
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
		}
	},
	//state
	{
		color: 'pink',
		direction: 0,
		mph: 0
	},
	//enclose
	function () {
		var isParkingBrakeOn = false;
		this.isParked = function isParked() {
			return isParkingBrakeOn;
		}
		this.toggleParkingBrake = function toggleParkingBrake() {
			isParkingBrakeOn = !isParkingBrakeOn;
			return this
		}
	}
).create();*/

var Car = stampit().methods({
	delegateMethod: function delegateMethod() {
		return {
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
	}
}).state({
	color: 'pink',
	direction: 0,
	mph: 0
}).create();

// console.log(Car.delegateMethod());
console.log(Car);
console.log(Object.getPrototypeOf(Car).delegateMethod);
console.log(Car.color);
console.log(Car.hasOwnProperty('color'));
console.log(Car.hasOwnProperty('isParkingBrakeOn'));
console.log(Car.isParked());
