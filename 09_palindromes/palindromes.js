const palindromes = function (s) {
    pattern = /[0-9a-zA-Z]/g
    let original =s.split(" ").join("").toLowerCase()
    let reversed = s.match(pattern).reverse().join("").toString().toLowerCase()
    return original == reversed
};

// Do not edit below this line
module.exports = palindromes;
 