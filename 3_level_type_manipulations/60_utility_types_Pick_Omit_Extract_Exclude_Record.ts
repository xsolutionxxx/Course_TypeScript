type Currencies = {
    usa: "usd";
    china: "cny";
    ukraine: "uah";
    // kz: "tenge";
};

type CurrWithoutUSA = Omit<Currencies, "usa">; // виключити властивості з іншого типу
type CurrUSAAndUkraine = Pick<Currencies, "usa" | "ukraine">; // фільтрація типу за заданими властивостями
type CountriesWithoutUSA = Exclude<keyof Currencies, "usa">; // видалення з union типу

type FadeType = Exclude<MyAnimation, "swipe">; // видалення з union типу
type SwipeType = Extract<MyAnimation, "swipe">; // вибір підходящого типу

type CreateCustomCurr<T> = {
    // [P in keyof T as MyAnimation]: string;
    [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};

type PlayersNames = "alex" | "john";
type CustomCurrencies = CreateCustomCurr<Currencies>;
type GameDataCurr = Record<PlayersNames, CustomCurrencies>; // сконстроювати інший тип в форматі ключ-значення

const gameData: GameDataCurr = {
    alex: {
        customUsa: "wdqrt",
        customChina: "123dg",
        customUkraine: "sd51a",
        // customKz: "sda",
    },
    john: {
        customUsa: "ws21dqrt",
        customChina: "112423dg",
        customUkraine: "sd54121a",
        // customKz: "4sda",
    },
};

type MyAnimation = "fade" | "swipe";
type Direction = "in" | "out";

type MyNewAnimation = `${MyAnimation}${Capitalize<Direction>}`;
