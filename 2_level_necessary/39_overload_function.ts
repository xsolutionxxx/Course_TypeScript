interface Square {
    side: number;
    area: number;
}

interface Rect {
    a: number;
    b: number;
    area: number;
}

function calculArea(side: number): Square; // 3 првила використання: 1. записується доосновного тіла функції 2. длпустимо називати аргументи іншими іменами 3. всі overload мають співпадати з головною функцією
function calculArea(a: number, b?: number): Rect; // це і є прегрузка функції, така собі документація в середині коду
function calculArea(a: number, b?: number): Square | Rect {
    if (b) {
        const rect: Rect = {
            a,
            b,
            area: a * b,
        };

        return rect;
    } else {
        const sqr: Square = {
            side: a,
            area: a ** 2,
        };

        return sqr;
    }
}

calculArea(1);
calculArea(2, 6); // тепер при наведдені TS знає, що нам підсказувати, в залежності від вводу аргументів
