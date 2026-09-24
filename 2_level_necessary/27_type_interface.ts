let a = "string"; // TS сам розуміє, що це string

let salary;
salary = 1000; // TS не розуміє, що це number, для нього це any

const userData =
    '{"isBirthdayData": true, "ageData": 25, "userNameData": "Alice"}';

const arr = ["sss", 5, true, "3412"];

const userObj = JSON.parse(userData);
console.log(userObj.smt); // Вивід типів тут теж не працює, бо ми отримуємо тип any на рядку вище, а значить TS не підскаже нам, що такого методу на цьому об'єкті не існує

// Рішення

interface user {
    isBirthdayData: boolean;
    ageData: number;
    userNameData: string;
}

const userInfo: user = JSON.parse(userData);
/* console.log(userInfo.smt); */ // тепер каже про помилку

const isOkey = true; // при створенні змінної через const - TS підставе сам літеральний тип, з об'єктами та масивами ситуація інакша вказується саме тип задіяних примітивів, а не літеральний
let movment: boolean | string = false;

if (isOkey) {
    movment = "moving";
}
