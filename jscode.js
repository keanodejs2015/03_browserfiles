// you can delete this before you put your own code in here

var x = {
	helloString : 'Hello',
	worldString : 'World',
	concatenation : function () {
		return this.helloString + ' ' + this.worldString;
	}
}

console.log(x.concatenation());