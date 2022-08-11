const repeatString = function(text, num) {
    if (num < 0) {
        return "ERROR"
    }
    let res = "";
    for (let i = 0; i < num; i++) {
        res += text;
    }
    // console.log(res);
    return res
};

// repeatString("hey", 3)

// Do not edit below this line
module.exports = repeatString;
