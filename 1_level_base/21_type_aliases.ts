type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
type AnimationID = string | number;

function createAnimation(
    id: AnimationID,
    animName: string,
    timingFunc: AnimationTimingFunc = "ease",
    duration: number,
    iterCount: "infinite" | number,
): void {
    // const elem = document.querySelector(`#${id}`) as HTMLElement;

    // if (elem) {
    console.log(`${animName} ${timingFunc} ${duration} ${iterCount}`);
    // elem.style.animation = `${animName} ${timingFunc} ${duration} ${iterCount}`;
    // }
}

createAnimation("id", "fade", "ease", 5, "infinite");
