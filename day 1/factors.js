function calculate(num) {
    var str = "1";
    for (var i = 2; i <= num; i++) {
        if (num % i == 0) {
            str += ',' + i;
        }
    }
    console.log(str);
}

calculate(25);