type FromPomise = Awaited<Promise<number>>; // number, а не Promise<number>

type FromPomise2 = Awaited<Promise<Promise<number>>>;

interface User {
    name: string;
}

async function fetchUsers(): Promise<User[]> {
    const users: User[] = [
        {
            name: "Alex",
        },
    ];

    return users;
}

const users = fetchUsers(); // users type Promise<User[]>

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // User[]

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T; // до v4.5 в коді TS можна було зустріти ручне створенн типу Awaited
type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>>; // User[]
