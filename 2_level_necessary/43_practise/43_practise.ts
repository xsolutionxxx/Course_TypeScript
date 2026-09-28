const forms = document.querySelectorAll("form");
const emailInput = document.querySelector("#email") as HTMLInputElement;
const titleInput = document.querySelector("#title") as HTMLInputElement;
const textInput = document.querySelector("#text") as HTMLTextAreaElement;
const checkboxInput = document.querySelector("#checkbox") as HTMLInputElement;

interface IFormData {
    email: string;
    title: string;
    text: string;
    checkbox: boolean;
}

const formData: IFormData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        formData.email = emailInput.value;
        formData.title = titleInput.value;
        formData.text = textInput.value;
        formData.checkbox = checkboxInput.checked;

        validateFormData(formData)
            ? checkFormData(formData)
            : console.log("Validation error");
    });
});

function validateFormData(data: IFormData): boolean {
    if (Object.values(data).every((value) => value)) {
        return true;
    } else {
        console.log("Please, complete all fields");
        return false;
    }
}

function emailExist(email: string) {
    const emails: string[] = [
        "example@gmail.com",
        "example@ex.com",
        "admin@gmail.com",
    ];

    for (let i = 0; i < emails.length; i++) {
        if (email === emails[i]) {
            return false;
        } else {
            return true;
        }
    }
}

function checkFormData(data: IFormData) {
    // if (emails.some((e) => e === email)) {
    if (emailExist(data.email)) {
        console.log("This email is already exist");
    } else {
        console.log("Posting data...");
    }
}
