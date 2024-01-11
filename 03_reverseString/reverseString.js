const reverseString = function(s) {
    let ns = "";
    for (let i=1;i<=s.length;i++){
        ns+=s.at(-i)
    }
    return ns
};

// Do not edit below this line
module.exports = reverseString;
