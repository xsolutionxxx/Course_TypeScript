function calculate(a: number, b: number): number {
    return a * b;
}

type CalculateRT = ReturnType<typeof calculate>; // number // отримання типу, який вертажє передана функція

let anotherRes: CalculateRT = 5;

type CalculatePT = Parameters<typeof calculate>; // [a: number, b:number] // отримання типів аргументів функції у вигляді кортежа
type CalculatePT2 = Parameters<typeof calculate>[1]; // number // отримання типу окремого аргумента

type PT1 = Parameters<(a: number) => number>;
type PT2 = Parameters<<T>(arg: T) => T>;

class Example {
    constructor(a: number) {}
}

type T0 = ConstructorParameters<typeof Example>; // отримання типів аргументів в класі
