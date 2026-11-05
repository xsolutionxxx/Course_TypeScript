// Condition ? true : false;

const str: string = "Hello";

// SomeType extends OtherType ? TrueType : FalseType;
type Example = "string " extends "Hello" ? string : number;
// type Example = "string " extends typeof str ? string : number;

type FromUserOrFromBase<T extends string | number> = T extends string
    ? IDataFromUser
    : IDataFromBase;

// const test: FromUserOrFromBase<number> =

interface User<T extends "created" | Date> {
    created: T extends "created" ? "created" : Date;
}

const user: User<"created"> = {
    created: "created",
};

interface IDataFromUser {
    weight: string;
}

interface IDataFromBase {
    calories: number;
}

/* function calculateDailyCalories(str: string): IDataFromUser;
function calculateDailyCalories(num: number): IDataFromBase; */
function calculateDailyCalories<T extends string | number>(
    numOrStr: T,
): T extends string ? IDataFromUser : IDataFromBase {
    if (typeof numOrStr === "string") {
        const obj: IDataFromUser = {
            weight: numOrStr,
        };

        // return obj; // Error
        // return obj as T extends string ? IDataFromUser : IDataFromBase;
        return obj as FromUserOrFromBase<T>;
    } else {
        const obj: IDataFromBase = {
            calories: numOrStr,
        };

        // return obj; // Error
        // return obj as T extends string ? IDataFromUser : IDataFromBase;
        return obj as FromUserOrFromBase<T>;
    }
}

type GetStringType<T extends "hello" | "world" | string> = T extends "hello"
    ? "hello"
    : T extends "world"
      ? "world"
      : string;

type GetFirstType<T> = T extends Array<infer First> ? First : T;

type Ex = GetFirstType<number[]>; // number

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T;

type ToArray<Type> = Type extends any ? Type[] : never;

type ExArray = ToArray<number>; // number[]
type ExArray2 = ToArray<Ex | string>; // number[] | string[]
