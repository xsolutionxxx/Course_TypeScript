const userData = {
  name: "Bob",
  age: 30,
  isBirthday: true,
  messages: {
    error: "An unexpected error occurred.",
  },
};

const createError = (message: string) => {
  throw new Error(message);
};

function logBrtMsg({
  isBirthday,
  age,
  name,
  messages: { error },
}: {
  isBirthday: boolean;
  age: number;
  name: string;
  messages: { error: string };
}): string {
  if (isBirthday) {
    return `Happy Birthday, ${name.toUpperCase()}! You are now ${
      age + 1
    } years old.`;
  } else {
    return createError(error);
  }
}

console.log(logBrtMsg(userData));
