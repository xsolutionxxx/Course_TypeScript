interface Car {
    name: "car";
    engine: string;
    wheels: number;
}

interface Ship {
    name: "ship";
    engine: string;
    sail: string;
}

interface Airplane {
    name: "airplane";
    engine: string;
    wings: string;
}

interface ComplexVehicle {
    name: "car" | "ship" | "airplane";
    engine: string;
    wheels?: number;
    sail?: string;
    wings?: string;
}

type Vehicle = Car | Ship | Airplane;

function isCar(car: Vehicle): car is Car {
    return (car as Car).wheels !== undefined;
}

function isShip(ship: Vehicle): ship is Ship {
    return "sail" in ship;
}

const car: ComplexVehicle = {
    // уявимо, що цей об'єкт прийшов до нас з стороннього API/сервісу
    name: "car",
    engine: "V8",
};

function repairVehicle(vehicle: ComplexVehicle) {
    switch (vehicle.name) {
        case "car":
            // console.log(vehicle.sail); // помилки не буде, бо sail є не обов'язковим полем через ComplexVehicle
            console.log(vehicle.wheels! * 2); // помилку тут навіть не видно, а проблема в тому, що car, який ми приймаємо, наприклад, немає такої властивості як wheels,а значить тут буде undefined, що в результаті дасть нам undefined * 2 = NaN
            break;
        case "ship":
            console.log(vehicle.sail);
            break;
        case "airplane":
            console.log(vehicle.wings);
            break;
        default:
            // const smth: never = vehicle; // з одним загальним інтерфейсом (ComplexVehicle) - тут буде помилка
            console.log("Ouuups!");
    }
}

repairVehicle(car); // і тут помилки ми не побачимо. Буде NaN
