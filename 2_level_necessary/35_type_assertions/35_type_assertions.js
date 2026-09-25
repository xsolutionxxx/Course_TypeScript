var fetchData = function (url, method) {
    console.log(method);
};
var reqOptions = {
    url: "https://someurl.com",
    method: "GEThhh", // method: "GET" as "GET", // = method: "GET" як літерал властивості.
}; // as const; // допомогає зробити об'єктний літерал
var str = "str";
var method = "GET";
fetchData("qqq", "GET");
// fetchData(reqOptions.url, reqOptions.method as "GET");
fetchData(reqOptions.url, reqOptions.method);
var box = document.querySelector(".box"); // деякі властивості, такі як style, не доступні бо елемент має лише базовий тип Element, тому щоб достукатися до style треба затвердити, що цей елемент є HTMLElement
// box.style;
// box?.classList
// const input = document.querySelector("input") as HTMLInputElement;
var input = document.querySelector("input"); // в React не буде працювати такий запис
// const someNumber: number = +input.value;
var someNumber = input.value; // реальний, але не бажаний приклад затвердження
console.log(someNumber * 2); // по факту тут залишається рядок, але в JS ми можимо помножити рядок і він поверне значення числом, тому помилки тут не буде. Хоча премінення методу поверне тут помилку.
var a = "value";
var b = { f: 100 };
var c = []; // так працює лише з екземпляром
var value = "value";
var arr = ["sd", "dff"];
var obj = { f: 100 };
// let T0 = value as const; // це працювати не буде, бо ми працюємо з посиланням на літерал, а не з його екземпляром
// let T5 = (Math.round(Math.random() * 1) ? "yes" : "no") as const; // не можемо затвердити обчислення, так як дані коду ще не відомі.
