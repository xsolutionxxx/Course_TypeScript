type voidFunc = () => void;

const retString: voidFunc = () => {
    // ... some magic
    return "string";
};

const s = retString();
console.log(s); // void

const retNum: voidFunc = () => {
    // ... some magic
    return 6;
};

const n = retNum();
console.log(n); // void

function f2(): void {
    // return false; // error
}

const f3 = function (): void {
    // return true; // error
};

const names = ["Ann", "Jhon"];
const newArr = names.slice();

names.forEach((name, i, arr) => {
    arr.push("Hey!");
});
