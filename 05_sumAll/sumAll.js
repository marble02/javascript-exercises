const sumAll = function(num1, num2) {
    // validate inputs
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR"
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR"
    }

    let start;
    let end;
    if (num2 > num1) {
        start = num1;
        end = num2;
    } else {
        start = num2;
        end = num1;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    // console.log(sum);
    return sum
};

// sumAll(1, 4000)
// sumAll(10, "90")
// sumAll(123, 1)

// Do not edit below this line
module.exports = sumAll;
