var box = document.querySelector(".box");
var input = document.querySelector("input"); // якщо витягуємо елемент за тегом, він автоматично отримує саме спцалізовану властивість, в даному випадку HTMLInputElement
var link = document.querySelector("a");
var p = document.querySelector(".paragraph");
var links = document.querySelectorAll("a");
// const links = document.querySelectorAll(".a");
// box?.textContent = "asdasdasd"; // помилки не буде, поки не примінимо optional chain (?)
if (link) {
    link.href = "asdsd";
}
input === null || input === void 0 ? void 0 : input.value;
var elem = document.createElement("a");
link === null || link === void 0 ? void 0 : link.addEventListener("scroll", function (e) {
    e.preventDefault();
});
