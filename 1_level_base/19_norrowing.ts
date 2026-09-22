const message: string | number = 5;
const messages: string[] | number[] = ["a", "b", "c"];
/* const messages: (string | number)[] = ["a", "b", "c", 5]; */

function printMsg(msg: string | number): void {
    // console.log(msg.toLowerCase) // цей метод є тільки в string-и, не спрацює на числі - видасть помилку

    if (typeof msg === "string") {
        console.log(msg.toLowerCase());
    } else {
        console.log(msg.toExponential());
    }

    console.log(msg);
}

/* function printMsg(msg: string | number | boolean): void {
    if (typeof msg === "string" || typeof msg === "number") {
        console.log(msg.toString());
    } else {
        console.log(msg.valueOf());
    }

    console.log(msg);
} */

/* function printMsg(msg: string[] | number | boolean): void {
    if (Array.isArray(msg)) {
        msg.forEach((item) => console.log(item));
    } else if (typeof msg === "number") {
        console.log(msg.toFixed());
    } else {
        console.log(msg);
    }

    console.log(msg);
} */

const printReadings = (a: string | number, b: number | boolean): void => {
    if (a === b) {
        console.log(a);
    }
};

const printReadings2 = (a: string | number[]): void => {
    console.log(a.slice(0, 3));
};

const checkReadings = (
    readings: { system: number } | { user: number },
): void => {
    if ("system" in readings) {
        console.log(readings.system);
    } else {
        console.log(readings.user);
    }
};

function logValue(x: string | Date) {
    if (x instanceof Date) {
        console.log(x.getDate());
    } else {
        console.log(x.trim());
    }
}
