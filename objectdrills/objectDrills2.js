var objec = {
	foo: "fo",
	bar: "ba", 
	fum: "fu", 
	quux: "quu",
	spam: "spa"
}

for (word in objec) {
	console.log(`Value of ${word} is ${this.word}`);
}

//WHy is it that using objec.word instead of this.word returns undefined?