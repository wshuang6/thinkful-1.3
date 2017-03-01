//Cracking the code with an object
//'craft block argon meter bells brown croon droop'
// a=2 b=3 c=4 d=5

var decoded = {}
function splitter (strin) {
	let wordArray = strin.split(" ");
	wordArray.forEach(decoder);
	function decoder (arrayString) {
		if (arrayString[0] === "a") {
			decoded[arrayString] = arrayString[1];
		} 
		else if (arrayString[0] === "b") {
			decoded[arrayString] = arrayString[2];
		} 
		else if (arrayString[0] === "c") {
			decoded[arrayString] = arrayString[3];
		} 
		else if (arrayString[0] === "d") {
			decoded[arrayString] = arrayString[4];
		}
		else {
			decoded[arrayString] = "";
		} 
	}
}
splitter('craft block argon meter bells brown croon droop');
console.log(decoded);