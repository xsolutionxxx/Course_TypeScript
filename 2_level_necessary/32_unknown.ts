/* let smth: any; */
let smth: unknown;

smth = "str";

/* let data: string[] = smth;
data.find((e) => e); */

// const someValue: any = 10; // any - похуй, unknown - не похуй
const someValue: unknown = 10;
// someValue.method();

function fetchData(data: unknown): void {
    if (typeof data === "string") {
        // string
        console.log(data.toLowerCase);
    }
    data; // unknown
}

const userData =
    '{"isBirthdayData": true, "ageData": 25, "userNameData": "Alice"}';

function safeParse(s: string): unknown {
    return JSON.parse(s);
}

const data = safeParse(userData);
// data.method(); // помилка - unknown каже, що він не знає, що там буде, тому не можна примінти цей метод

function transferData(d: unknown): void {
    if (typeof d === "string") {
        console.log(d.toLowerCase());
    } else if (typeof d === "object" && d) {
        console.log(data);
    } else {
        console.log("Some error");
    }
}

transferData(data);

try {
    if (1) {
        throw new Error("error");
    }
} catch (e) {
    console.log(typeof e);
    if (e instanceof Error) {
        console.log(typeof e);
        console.log(e.message);
    } else if (typeof e === "string") {
        console.log(e);
    }
}

type T0 = any | unknown;
type T1 = number | unknown; // unknown домінує над будь-яким типом крім any
type T2 = any & unknown;
type T3 = string & unknown; // при використанні intersection оператора unknown завжди буде перекритий іншими типами
