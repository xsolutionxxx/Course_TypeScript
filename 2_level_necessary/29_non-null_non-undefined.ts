interface User {
    login: string;
    password: string;
    age: number;
    addr: string | undefined;
    parents?: {
        mother?: string;
        father?: string;
    };
}

const user: User = {
    login: "first!",
    password: "qwerty",
    age: 50,
    addr: "asdfd",
    parents: {
        mother: "Sad",
    },
};

let dbName: string;
sendUserData(user, "asdddd");

console.log(dbName!);

function sendUserData(obj: User, db?: string): void {
    dbName = "12456";
    console.log(obj.parents!.mother?.toLowerCase(), db!.toLowerCase());
}
