const removeFromArray = function(args) {
    const a = [...arguments];
    let arr = a[0];

    for (let i = 1; i < a.length; i++) {
        arr = arr.filter(item => item !== a[i])
    }

    // console.log(arr);
    return arr
};

// removeFromArray([1, 2, 3, 4], 3, 2)

// Do not edit below this line
module.exports = removeFromArray;
