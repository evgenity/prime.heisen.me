function getAllFactorsFor(numb) {
   
    let factors = [];
    var integer = parseInt(numb);

    setTimeout(stop_interval, 1000);
    function stop_interval()
    {
      clearInterval(getAllFactorsFor);
    }

    for (let i = 2; i <= integer; i++) {
        while ((integer % i) === 0) {
            factors.push(i);
            integer /= i;
        }
    }
   
    return document.getElementById("output").innerHTML = factors;
}