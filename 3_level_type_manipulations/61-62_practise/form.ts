interface IForm {
    login: string;
    password: string;
    chekbox: boolean;
}

interface ValidationData {
    isValid: boolean;
    errorMsg?: string;
}

type FormsTypes<T> = {
    [P in keyof T]: ValidationData;
};
type validationTypes = FormsTypes<IForm>;

// Необходимо типизировать объект валидации
// Учтите, что данные в форме могут расширяться и эти поля
// должны появиться и в объекте валидации

const validationData: validationTypes = {
    login: { isValid: false, errorMsg: "At least 3 characters" },
    password: { isValid: true },
    chekbox: { isValid: true },
};
