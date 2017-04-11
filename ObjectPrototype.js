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

console.log(Phone);

// if (!Object.create) {
// 	Object.create = function (obj) {
// 		if (arguments.length > 1) {
// 			return Error('Object.create method only accept the first parameter!')
// 		}
// 		function F() {}
// 		F.prototype = obj;
// 		return new F();
// 	}
// }
var newPhone = Object.create(Phone);
var anotherPhone = Object.create(Phone);
console.log(newPhone.state);
newPhone.toggle();
console.log('State of newPhone: '+newPhone.isOn());
console.log('State of anotherPhone: '+anotherPhone.isOn());
console.log('State of Phone: '+Phone.isOn());

console.log(Phone.meta);
newPhone.meta.name = 'power off';//mutate the meta property=>Replace meta for whole object
console.log(Phone.meta);
console.log(newPhone.meta);

newPhone.meta = {
	name:'power on'
};//Replace for newPhone instance only
console.log(Phone.meta);
console.log(newPhone.meta);
