class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metdos
    #speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak} ${this.name}`;
    }

    // get and set
    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const superbebeloper = new user('David', 15);
console.log(superbebeloper.uAge);
console.log(superbebeloper.uAge = 20);