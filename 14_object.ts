const isBirthdayData: boolean = false;
let ageData: number = 30;
const userNameData: string = "Bob";

const createError = (message: string) => {
  throw new Error(message);
};

function logBrtMsg(isBirthday: boolean, age: number, userName: string): string {
  if (isBirthday === true) {
    return `Happy Birthday, ${userName.toUpperCase()}! You are now ${
      age + 1
    } years old.`;
  } else if (isBirthday === false) {
    return "Not your birthday";
  }

  return createError("Invalid birthday status"); // never
}

console.log(logBrtMsg(isBirthdayData, ageData, userNameData));
