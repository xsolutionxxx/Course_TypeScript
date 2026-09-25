const fetchData = (url: string, method: "GET" | "POST"): void => {
    console.log(method);
};

const reqOptions = {
    url: "https://someurl.com",
    method: "GEThhh", // method: "GET" as "GET", // = method: "GET" як літерал властивості.
}; // as const; // допомогає зробити об'єктний літерал

const str = "str";
const method = "GET";

fetchData("qqq", "GET");
// fetchData(reqOptions.url, reqOptions.method as "GET");
fetchData(reqOptions.url, <"GET">reqOptions.method);

const box = document.querySelector(".box") as HTMLElement; // деякі властивості, такі як style, не доступні бо елемент має лише базовий тип Element, тому щоб достукатися до style треба затвердити, що цей елемент є HTMLElement

// box.style;
// box?.classList

// const input = document.querySelector("input") as HTMLInputElement;
const input = <HTMLInputElement>document.querySelector("input"); // в React не буде працювати такий запис

// const someNumber: number = +input.value;
const someNumber: number = input.value as any as number; // реальний, але не бажаний приклад затвердження
console.log(someNumber * 2); // по факту тут залишається рядок, але в JS ми можимо помножити рядок і він поверне значення числом, тому помилки тут не буде. Хоча премінення методу поверне тут помилку.

let a = "value" as const;
let b = { f: 100 } as const;
let c: number[] = [] as const; // так працює лише з екземпляром

let value = "value";
let arr = ["sd", "dff"];
let obj = { f: 100 };

// let T0 = value as const; // це працювати не буде, бо ми працюємо з посиланням на літерал, а не з його екземпляром

// let T5 = (Math.round(Math.random() * 1) ? "yes" : "no") as const; // не можемо затвердити обчислення, так як дані коду ще не відомі.
