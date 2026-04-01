function daysBetween() {
    let current = new Date();
    let past = new Date("2021-01-01");

    let diff = current.getTime() - past.getTime();

    let days = diff / (1000 * 60 * 60 * 24);

    return Math.floor(days);
}
console.log(daysBetween());