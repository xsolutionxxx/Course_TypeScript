interface ProcessingFn<T> {
    (data: T): T;
}

function processing<T>(data: T): T {
    return data;
}

let NewFunc: ProcessingFn<number> = processing;

type Smth<T> = T;

const num: Smth<number> = 5;

/* type User<T> = {
    login: T;
    age: number;
}; */

/* const user: User<string> = {
    login: "str",
    age: 45,
}; */

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5];

interface ParentsOfUser {
    mother: string;
    father: string;
}

interface User<ParentsData extends ParentsOfUser> {
    login: string;
    age: number;
    parents: ParentsData;
}

const user: User<{ mother: string; father: string; married: boolean }> = {
    login: "str",
    age: 45,
    parents: { mother: "Anna", father: "no data", married: true },
};

/* const user2: User<string> = {
    login: "str",
    age: 45,
    parents: "",
}; */

/* const depositMoney = <T extends number | string>(amount: T): T => {
    console.log(`req to server with amount: ${amount}`);
    return amount;
};

depositMoney(500);
depositMoney("500"); */
// depositMoney(false); // Error

const depositMoney = (amount: number | string): number | string => {
    console.log(`req to server with amount: ${amount}`);
    return amount;
};

depositMoney(500);
depositMoney("500");
// depositMoney(false); // Error
