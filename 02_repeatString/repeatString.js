const repeatString = function(s,n) {
    if(n!=-1){
        let ns = ""  //empty string
        for (let i=0;i<n;i++){
            ns += s  //adds string to empty string
        }
        return ns // returns the concatenated string
    }else{
        return 'ERROR' // return error if number is negative
    }
};

// Do not edit below this line
module.exports = repeatString;
