const isBirthdayData: boolean = false;
let ageData: number = 30;
const userNameData: string = "Bob";

function logBrtMsg(isBirthday: boolean, age: number, userName: string): string {
    if (isBirthday) {
        return `Happy Birthday, ${userName.toUpperCase()}! You are now ${age + 1} years old.`;
    } else {
        return "Error";
    }
}

/* const logBrtMsg = (isBirthday: boolean, age: number, userName: string): string => {
    if (isBirthday) {
        return `Happy Birthday, ${userName.toUpperCase()}! You are now ${age + 1} years old.`;
    } else {
        return "Error";
    }
} */

console.log(logBrtMsg(isBirthdayData, ageData, userNameData));