type Currencies = {
    usa: "usd";
    china?: "cny";
    ukraine: "uah";
    readonly kz: "tenge";
};

type ROnlyCurr = Readonly<Currencies>;

/* type CustomCurrencies = {
    usa: string;
    china: string;
    ukraine: string;
    kz: string;
}; */

type CreateCustomCurr<T> = {
    -readonly [P in keyof T]-?: string;
};

type CustomCurrencies = CreateCustomCurr<Currencies>;

/* type СпівставнийТип = {
    [користувацькийІдентифікатор in Множина] : ДовільнийТипДаних
} */

type Keys = "name" | "age" | "role";

type User = {
    [K in Keys]: string;
};

const alex: User = {
    name: "Alex",
    age: "21",
    role: "admin",
};
