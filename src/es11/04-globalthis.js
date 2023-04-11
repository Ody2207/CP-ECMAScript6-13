/*
El concepto de globalThis viene al querer que una aplicación viva dentro de varias 
estancias a la vez
*/

console.log(window);        // <-- Navegador
console.log(global);        // <-- Node 
console.log(self);          // <-- webworker
console.log(globalThis);
