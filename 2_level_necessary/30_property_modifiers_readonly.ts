interface User {
    readonly login: string;
    password: string;
    age: number;
    readonly addr?: string;
}

const user: User = {
    login: "first!",
    password: "qwerty",
    age: 50,
};

const userFreeze: Readonly<User> = {
    // синтаксис за допомогою generic, що робить те саме, що і readonly
    login: "first!",
    password: "qwerty",
    age: 50,
};

// userFreeze.age = 4134; // не можливо змінити

// user.login = "asdsd"; // не можливо змінити властивість - помилка
user.password = "sdasd";

class Animal {
    readonly name: string = "name";
}

// const basicPorts: ReadonlyArray<number> = [3001, 3002, 3003]; // варіант з generic
const basicPorts: readonly number[] = [3001, 3002, 3003];
// basicPorts[0] = 5; // не можливо змінити - масив доступний тільки для читання
// basicPorts.push(456);

const basicPortsTuple: readonly [number, ...string[]] = [3001, "3002", "3003"];
// basicPorts[0] = 5; // не можливо змінити - кортеж доступний тільки для читання
// basicPorts.push(456);
