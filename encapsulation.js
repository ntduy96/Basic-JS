function Point(id,name,position,direction) {
	var ahead = true;//this variable is private => encapsulation
	this.id = id || 0;
	this.name = name || 'guest';
	this.position = position || {
		x: 0,
		y: 0
	};
	this.direction = function (direction) {
		switch(direction) {
			case 'left': function turnLeft() {
				this.position = {
					x: x++,
					y: y
				};
				return this
			}
			case 'right': function turnLeft() {
				this.position = {
					x: x--,
					y: y
				};
				return this
			}
		}
	}
}

var pnt = new Point(101,'Vespa',{x:2,y:3},'left');
console.log(pnt);//You can't access pnt.ahead

var Point = {
	//...=>Object literal can't create private variables=>non-encapsulation
}
