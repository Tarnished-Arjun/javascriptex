function getcurrentdate() {
    let d = new Date();

    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();

    let formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
}
console.log(getcurrentdate());