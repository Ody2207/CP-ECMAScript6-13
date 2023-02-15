var lastName = 'David';		// <-- Declarar y asiganar
lastName = 'Oscar';		 	// <-- Reasignar
console.log(lastName);
// var lastName = 'Pedro'; 	// <-- Redeclarar y reasignar


// Let tiene alcance de bloque
let fruit = 'apple';		// <-- Declarar y asignar
fruit = 'kiwi';				// <-- Reasignar 
console.log(fruit);

// const tiene alcance de bloque
const animal = 'Dog';		// <-- Declarar y asignar
fruit = 'Cat';				// <-- Reasignar NO SE PUEDE
console.log(fruit);

const fruits = () => {
	if(true) {
		var fruit1 = 'apple';
		let fruit2 = 'banana';
		const fruit3 = 'kiwi';
	}
	console.log(fruit1);
	console.log(fruit2);
	console.log(fruit3);
};

fruits();