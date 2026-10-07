interface ICompany {
  name: string;
  debts: number;
  // departments: Department;
  departments: string[];
  management: {
    owner: string;
  };
}

interface Department {
  [key: string]: string;
}

const debts = "debts";
type CompanyDebtsType = ICompany[typeof debts];

// type CompanyDebtsType = ICompany["debts"]; // typeof ICompany.debts - помилка, бо ICompany - це інтерфейс, а не об'єкт, але використавши прийом Index Access Type, отримаємо те, що хотіли

type CompanyOwnerType = ICompany["management"]["owner"];
type CompanyDepartmentsType = ICompany["departments"][number];
type CompanyDepartmentsTypes = ICompany["departments"];

type Test = ICompany[keyof ICompany];

function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S,
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const google: ICompany = {
  name: "Google",
  debts: 123123,
  departments: ["sales", "dev"],
  management: {
    owner: "John",
  },
};

printDebts(google, "name", "debts");

type GoogleKeys = keyof typeof google; // google - це об'єкт, а не тип, тому без typeof буде помилка
const keys: GoogleKeys = "name";
