const reverseString = function(input) {
    const initial = input.split('');
    let res = [];
    for (let i of initial) {
        res.unshift(i);
    }
    // console.log(res.join(''));
    return res.join('')
};

// reverseString('hello')

// Do not edit below this line
module.exports = reverseString;
