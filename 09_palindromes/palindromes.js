const palindromes = function (text) {
    let arr = text.split('');
    arr = arr.filter(char => /[a-zA-Z]/.test(char));
    // console.log(arr);
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        if (arr[i].toLowerCase() != arr[arr.length - i - 1].toLowerCase()) {
            return false
        }
    }
    return true

};

// console.log(palindromes(' race car . !'))

// Do not edit below this line
module.exports = palindromes;
