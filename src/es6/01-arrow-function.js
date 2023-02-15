/* 
Una "fuction" la podemos ver como un camion nos permite hacer herramietnas muy ocmplejas
pero cuando quieres transportar una simple caja un camion queda muy grande para una 
simple caja, para eso existen las arrow fuction, nos permiten con menos funcionalidades pero 
mucho más amigables crear una funciones sencilla en pocas lineas de código
*/
function square(num) {
	return num * num;
};

const square = (num) => {
	return num * num;
};

const square = num => num * num;