class User<T, S> {
    name: T;
    age: S;

    constructor(name: T, age: S) {
        this.name = name;
        this.age = age;
    }

    sayMyFullName<T>(surname: T): string {
        if (typeof surname !== "string") {
            return `I have only name: ${this.name}`;
        } else {
            return `My name: ${this.name} ${surname}`;
        }
    }
}

class AdminUser<T> extends User<string, number> {} // <T, S> - тут дадуть помилку, тому чіткі типи

const nazar = new User("Nazar", 22);
console.log(nazar);
console.log(nazar.sayMyFullName("Talaievych"));

const nameData = "Alex";
const ageData = 54;

const alex = new User<string, number>(nameData, ageData);
