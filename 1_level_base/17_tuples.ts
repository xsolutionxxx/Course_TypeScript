/* const userDataTuple: [boolean, number, ...string[]] = [
    true,
    40,
    "John",
    "Alex",
    "Ann",
];
const userDataTuple: [...boolean[], number, string] = [true, true, 40, "John"]; */
const userDataTuple: [boolean, number, string] = [true, 40, "John"];

/* userDataTuple[3];
userDataTuple.push(32);
userDataTuple[3]; */

const res = userDataTuple.map((t) => `${t} - data`);

const [birth, age, name] = userDataTuple;
birth ? console.log(`Your name - ${name}. Your age ${age}`) : "Nothing";
