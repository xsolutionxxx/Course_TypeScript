interface Car {
    name: "car";
    engine: string;
    wheels: {
        number: number;
        type: string;
    };
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

interface SuperAirplane {
    name: "smth";
    engine: string;
    wings: string;
}

type Vehicle = Car | Ship | Airplane | SuperAirplane;

function isCar(car: Vehicle): car is Car {
    return (car as Car).wheels.number !== undefined;
}

function isShip(ship: Vehicle): ship is Ship {
    return "sail" in ship;
}

function repairVehicle(vehicle: Vehicle) {
    /* if (isCar(vehicle)) {
        vehicle.wheels;
    } else if (isShip(vehicle)) {
        vehicle.sail;
    } else {
        // const smth: never = vehicle; // подія до якої ми ніколи не дійдемо приймає тип never
        // vehicle.wings // якщо сюди доходить і тут без перевірки залишається більше ніж одна структура, то тут вже буде помилка бо ми звертаємо до всіх залишених без перевірки структур
    } */

    switch (vehicle.name) {
        case "car":
            console.log(vehicle.wheels);
            break;
        case "ship":
            console.log(vehicle.sail);
            break;
        case "airplane":
            console.log(vehicle.wings);
            break;
        case "smth":
            console.log(vehicle.wings);
            break;
        default:
            const smth: never = vehicle;
            console.log("Ouuups!"); // якщо захочеми тут вивести vehicle, то буде помилка, бо буде тип never, в тому випадку, що в нас всього 3 транспорти в даній ситуації
    }
}
