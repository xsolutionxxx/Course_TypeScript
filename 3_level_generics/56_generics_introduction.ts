function processingData<T>(data: T): T {
    // заглушка(узагальнення), можна підставити любе значення
    //...

    return data;
}

let res1 = processingData(1);
let res2 = processingData("1");

const num = 10;

const res3 = processingData<number>(num); // '10' - помилка

interface PrintUK {
    design: number;
}

interface PrintES {
    design: string;
}

interface Print<Type> {
    design: Type;
}

const somePrint: Print<string> = {
    design: "ten",
};

const someOther: Print<number> = {
    design: 10,
};

// Array<T>
// RefferalSystem<UserID, UserRefferals>

// стандартні значення: T - type U V S, P - property K/V - key/value
