// Se agraga una nueva forma de trabajar con las promesas 

const primise1 = new Promise((resolve, reject) => reject('Reject'));
const primise2 = new Promise((resolve, reject) => resolve('Resolve'));
const primise3 = new Promise((resolve, reject) => resolve('Resolve2'));

Promise.allSettled([primise1, primise2, primise3])
    .then(response => console.log(response))
