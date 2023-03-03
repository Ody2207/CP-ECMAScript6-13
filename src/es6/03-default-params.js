function newUser(user, age, coutry) {
	var user = user || 'Rodrigo';
	var age = age || 18;
	var coutry = coutry || 'MX';
	console.log(user, age, coutry);
};

newUser();
newUser('Dilan', 23, 'CO');

// Despues de ES6

function newAdmin(name = 'Rodrigo', age = 22, coutry = 'CO') {
	console.log(name, age, coutry);
}

newAdmin();
newAdmin('Ana', 19, 'PE');