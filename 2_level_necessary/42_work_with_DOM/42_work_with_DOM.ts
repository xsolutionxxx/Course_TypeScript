const box = document.querySelector(".box") as HTMLElement;
const input = document.querySelector("input"); // якщо витягуємо елемент за тегом, він автоматично отримує саме спцалізовану властивість, в даному випадку HTMLInputElement
const link = document.querySelector("a");
const p = document.querySelector(".paragraph") as HTMLParagraphElement;

const links = document.querySelectorAll("a");
// const links = document.querySelectorAll(".a");

// box?.textContent = "asdasdasd"; // помилки не буде, поки не примінимо optional chain (?)

if (link) {
    link.href = "asdsd";
}

input?.value;

const elem = document.createElement("a");

link?.addEventListener("scroll", (e) => {
    e.preventDefault();
});
