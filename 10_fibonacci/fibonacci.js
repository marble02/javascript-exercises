const fibonacci = function(n) {
    n = parseInt(n);
    
    if (n < 0) {
        return "OOPS"
    } else if (n == 0 || n == 1) {
        return 1
    }

    let a = 1;
    let b = 1;
    let tmp = a;
    for (let i = 2; i < n; i++) {
        tmp = a + b;
        a = b;
        b = tmp;
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;
