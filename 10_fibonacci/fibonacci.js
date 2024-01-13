const fibonacci = function(n) {
    if (n==0){
        return 0
    }
    if (n<0){
        return 'OOPS'
    }
    let a = 0;
    let b = 1;
    let c = 1; 
    while(n>1){ // series terminating condition 
        c = a+b; //fibonacci series generator
        [a,b] = [b,c]; // element swapping
        n-- // series terminator
    }
    return c
};

// Do not edit below this line
module.exports = fibonacci;
