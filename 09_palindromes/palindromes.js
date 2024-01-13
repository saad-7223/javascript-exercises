const palindromes = function (s) {
    pattern = /[0-9a-zA-Z]/g
    let original =s.match(pattern).join("").toLowerCase() //contains only alphanum and not any punctuations
    let reversed = s.match(pattern).reverse().join("").toString().toLowerCase() //contains the reversed alphanum
    return original == reversed
};

// Do not edit below this line
module.exports = palindromes;
 