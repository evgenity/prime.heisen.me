function getAllFactorsFor(numb) {
   
    let factors = [];
    let integer = parseInt(numb);
    let timeIn = new Date().getSeconds();

    for (let i = 2; i <= integer; i++) {
        let timeOut = new Date().getSeconds();
        if (timeOut < timeIn + 5){
        while ((integer % i) === 0) {
            factors.push(i);
            integer /= i;
        }
    }
    else {
        return document.getElementById("output").innerHTML = "Time - out!"
    }
    }
   
    return document.getElementById("output").innerHTML = "N = " + factors;
}