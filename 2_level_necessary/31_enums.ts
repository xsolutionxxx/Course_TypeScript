const TOP = "Top";
const RIGHT = "Right";

const enum Direction {
    TOP,
    RIGHT,
    LEFT,
    BOTTOM,
}

enum TimingFunction {
    BASE,
    EASE = "ease",
    EASE_OUT = `${EASE}-out`,
    EASE_IN = 2,
    LINEAR = EASE_IN * 2,
}

function frame(elem: string, dir: Direction, tFunc: TimingFunction): void {
    if (dir === Direction.RIGHT) {
        console.log(tFunc);
    }
}

frame("id", Direction.RIGHT, TimingFunction.EASE_OUT);
