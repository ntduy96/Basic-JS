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
}

var Phone = {
	state: true,
	meta: {
		name: 'power on'
	},
	isOn: function isOn() {
		return this.state
	},
	getState: function getState() {
		return this.state?'active':'unactive'
	},
	toggle: function toggle() {
		this.state = !this.state
	}
}

var Network = {
	active: true,
	isTransfer: function isTransfer() {
		return this.active
	}
}

var normalPhone = extend({},Phone);
console.log(normalPhone);
var phone = Object.create(Phone);
console.log(phone);
Phone.state = false;
console.log('state of normal phone: '+normalPhone.state);
console.log('state of phone: '+phone.state);
