function compareDates(givenDate) {
    let current = new Date();      
    let given = new Date(givenDate);

    let currentTime = current.getTime();
    let givenTime = given.getTime();

    if (currentTime === givenTime) {
        console.log("Both dates are equal");
    } else if (givenTime < currentTime) {
        console.log("Given date is in the past");
    } else {
        console.log("Given date is in the future");
    }
}
compareDates("2026-1-4");