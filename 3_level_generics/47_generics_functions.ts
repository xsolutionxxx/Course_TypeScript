function processingData<T, S>(data: T[], options: S): string {
    data.length;
    switch (typeof data) {
        case "string":
            return `${data}, speed: ${options}`;
            break;
        case "number":
            return `${data}, speed: ${options}`;
            break;
        default:
            return "Not valid";
    }
}

let res1 = processingData([1], "fast");
let res2 = processingData(["1"], "slow");
const res3 = processingData<number, string>([10], "slow");

function processing<T>(data: T): T {
    return data;
}

interface ProcessingFn {
    <T>(data: T): T;
}

interface DataSaver {
    // processing: <T>(data: T) => T;
    // processing: typeof processing;
    processing: ProcessingFn;
}

// let NewFunc: <T>(data: T) => T = processing;
let NewFunc: ProcessingFn = processing;

const saver: DataSaver = {
    /* processing(data) {
        console.log(data);
        return data;
    }, */

    /* processing: <T>(data: T) => {
        // = processing: (data) => {
        return data;
    }, */
    processing: processing,
};
