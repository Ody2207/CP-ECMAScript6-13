// Así se concatenan strings antes de ES6

let hello = 'hello';
let world = 'world';
let epicPhrase = hello + ' ' + world + '!';
// console.log(epicPhrase);


// Despues de ES6

let epicPhrase2 = `${hello} ${world}!`;
console.log(epicPhrase);
console.log(epicPhrase2);


// ------------- Multi-line strings ------------

let lorem = 'Esto es un string \n' + 'Esto es otro string';

let lorem2 = `Esta es una frase epica
Esta es la continuación de esa frase epica
`;

console.log(lorem);
console.log(lorem2);
