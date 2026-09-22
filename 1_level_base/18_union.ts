const message: string | number = 5;
const messages: string[] | number[] = ["a", "b", "c"];
/* const messages: (string | number)[] = ["a", "b", "c", 5]; */

function printMsg(msg: string | number): void {
    console.log(msg);
    // console.log(msg.toLowerCase) // цей метод є тільки в string-и, не спрацює на числі - видасть помилку
}

printMsg(4);
printMsg("Doodle");
