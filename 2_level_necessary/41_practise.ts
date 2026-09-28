type AnimalType = "cat" | "dog" | "bird";

enum AnimalStatus {
    AVAILABLE = "available",
    NOT_AVAILABLE = "not available",
}

// Request
interface Animal {
    animal: AnimalType;
    breed: string;
    sterilized?: string;
}

interface AnimalAvailableData extends Animal {
    location: string;
    age?: number;
}

interface AnimalNotAvailableData {
    message: string;
    nextUpdateIn: Date;
}

// Response #1
interface AnimalAvailibale {
    status: AnimalStatus.AVAILABLE;
    data: AnimalAvailableData;
}

// Response #2
interface AnimalNotAvailibale {
    status: AnimalStatus.NOT_AVAILABLE;
    data: AnimalNotAvailableData;
}

type Response = AnimalAvailibale | AnimalNotAvailibale;

function isAvailibale(response: Response): response is AnimalAvailibale {
    if (response.status === AnimalStatus.AVAILABLE) {
        return true;
    } else {
        return false;
    }
}

function checkAnimalData(animal: Response): AnimalAvailableData | string {
    if (isAvailibale(animal)) {
        return animal.data;
    } else {
        return `${animal.data}, you can try in ${animal.data.nextUpdateIn}`;
    }
}
