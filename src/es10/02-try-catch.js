try {
    hello()
} catch(error) {
    console.log(error);
}

// ahora podemos personalizar los errores,pero esto solo se ocupa en situaciones 
// espesificas
 
try {
    anotherFuction()
} catch {
    console.log('Esto es un error');
}