/*
	Factory is used to abstract the details of
	object creation from object use.
	highlander is private and be accessed by closure
	of get function in the return below.
 */
function factory() {
	var highlander = {
		name: 'MacLeod'
	};
	return {
		get: function get() {
			return highlander
		}
	}
}

var singleton = factory(),//you don't have to use 'new' keyword.
	hero = singleton.get(),
	hero2 = singleton.get();

hero.sword = 'Katana';
console.log(hero.sword);
console.log(hero2.sword);
