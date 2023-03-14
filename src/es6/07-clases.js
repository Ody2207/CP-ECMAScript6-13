// Declarando
// jInstancia de una clase 
// const newUser = new User();

class User {
// metodos
    greeting() {    // <--- una funcion sin la palabra reservada fuction()
        return 'hello';
    }
};

const ody = new User();
console.log(ody.greeting());

const bebeloper = new User();
console.log(bebeloper.greeting());

// constructor 

class user {
    // Constructor
    constructor() {
        console.log('Nueve Usuario');
    }
    greeting() {    // <--- una funcion sin la palabra reservada fuction()
        return 'hello';
    }
}

const david = new user();

// this
// this hace referencia al elemento padre que lo contiene

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'Hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

// setters and getters

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metdos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak} ${this.name}`;
    }

    // get and set
    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const superbebeloper = new user('David', 15);
console.log(superbebeloper.uAge);
console.log(superbebeloper.uAge = 20);