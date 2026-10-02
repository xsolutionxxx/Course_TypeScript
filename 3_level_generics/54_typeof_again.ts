interface ICompany {
    name: string;
    debts: number;
}

function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T,
    name: K,
    debts: S,
) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const hh: ICompany = {
    name: "HH",
    debts: 414124,
};

printDebts(hh, "name", "debts");

const google: ICompany = {
    name: "Google",
    debts: 123123,
};

printDebts(google, "name", "debts");

type GoogleKeys = keyof typeof google; // google - це об'єкт, а не тип, тому без typeof буде помилка
const keys: GoogleKeys = "name";
