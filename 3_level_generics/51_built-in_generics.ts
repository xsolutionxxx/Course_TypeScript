const arr: Array<number> = [1, 2, 3];
const arr1: number[] = [1, 2, 3]; // обгортка над дженеріком, скорочений синтаксис

const roarr: ReadonlyArray<string> = ["asasd"];
// roarr[0] = "qewqwr"; // Error

interface IState {
    readonly data: {
        name: string;
    };
    tag?: string;
}

const state: Partial<IState> = {
    // Partial - вірніше називати типом, ніж джинеріком, додає всім властивостям модифікатор optional (?), роблячи їх необов'язковими, його повна протилежність тип Required

    data: {
        name: "John",
    },
};

const strictState: Required<IState> = {
    data: {
        name: "sd",
    },
    tag: "sdsd",
};

// strictState.data = 124;

function action(state: Readonly<IState>) {
    // state.data = "Asd"; // помилка, Readonly<IState> - не дає перезаписувати властивість, але це стосується тільки першого рівня вкладеності
    state.data.name = "asdasd"; // тут помилки не буде
}
