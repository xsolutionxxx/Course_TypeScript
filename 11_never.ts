const isBirthdayData: boolean = false;
let ageData: number = 30;
const userNameData: string = "Bob";

const createError = (message: string): never => {
  throw new Error(message);
  console.log("This line will never be executed.");
  /* while (true) {} */
};

/* const createError = (message: string) => {
  if (message) throw new Error(message);
  console.log("Void function ended without error.");
}; */

function logBrtMsg(isBirthday: boolean, age: number, userName: string): string {
  if (isBirthday === true) {
    return `Happy Birthday, ${userName.toUpperCase()}! You are now ${
      age + 1
    } years old.`;
  } else if (isBirthday === false) {
    return "Too bad";
  }

  return createError("Invalid birthday status"); // never
}

console.log(logBrtMsg(isBirthdayData, ageData, userNameData));
