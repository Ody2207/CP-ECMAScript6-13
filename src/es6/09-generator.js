function* iterate (array) {
    for (let value of array) {
        yield value;
    }
}
x
const it = iterate(['Oscar', 'Davis', 'Ana', 'Dilan', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);