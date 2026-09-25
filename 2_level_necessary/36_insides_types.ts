let num: Number = new Number(5); // Number
let num2: number = 5; // number
let num3 = Number(5); // number

num = num2; // доступимо, бо значення не явно перевтілилося
// num2 = num; // не доступимо, бо тут намагаємося перетворити обернутий об'єкт в примітив

const num5 = 5;
const strNum: string = num5.toString();
const str = "5";
const numStr: number = +str;

interface Department {
    name: string;
    budget: number;
}

const department: Department = {
    name: "web-dev",
    budget: 4444,
};

interface Project {
    name: string;
    projectBudget: number;
}

function transformDepartment(department: Department, amount: number): Project {
    return {
        name: department.name,
        projectBudget: amount,
    };
}

const mainProjec: Project = transformDepartment(department, 4000);
