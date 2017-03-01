var arra = [{"name": "Superman", "job title": "being super"}, 
{"name": "Batman", "job title": "fighting bats"}, 
{"name": "Aquaman", "job title": "desalination"}];

// function nameTitle () {
// 	for (key in arra) {
// 		return {`The name of the person is ${key.name} and their job is ${key["job title"]}`};
// 	}
// };

// Why does a for in loop not work in this situation? Is it because for in does not work with arrays?

function nameTitle(key) {
	console.log(`The name of the person is ${key.name} and their job is ${key["job title"]}.`);
}

arra.forEach(nameTitle);