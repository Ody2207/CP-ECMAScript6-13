// arrays destructuring

let fruits = ['apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);	// <-- Posicion en nuestro array (recordad que inicia en la posicion 0)

/*
Es mucho más facil utilizar este metodo de destructuracion ya que podemos asignar el valor 'apple' y 'banana'
y poder utilizarlos y de esta forma mostrar la información 

Un incoveniente de utilizar la posicion es cuando tenemos arrays muy grandes y no estamos seguros de la 
posicion exacta, por eso es mucho más amigable destructurar la información y de esta forma utilizarla en una
variable
*/

// object destructuring

let user = {username: 'Pedro', age: 35}
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);	// <-- Otra forma de llamar el elemento

// spread operator 

let person = { name: 'Rodrigo', age: 18 }
let coutry = 'MX'

let data = { id: 24, ...person, coutry }
console.log(data);

/*
output

{ id: 24, name: 'Rodrigo', age: 18, coutry: 'MX' }
*/

// rest 

function sum(num, ...values) {
	console.log(values);
	console.log(num + values[0]);
	return num + values[0];
}

sum(1, 2,3,3,5);

/*
output

[ 2, 3, 3, 5 ]
3
*/

