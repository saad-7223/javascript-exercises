const add = function(a,b) {
    return a+b;
};

const subtract = function(a,b) {
    return a-b;
};

const sum = function(array) {
	sm = 0;
  for(let i=0;i<array.length;i++){
    sm+=array[i];
  }
  return sm;
};

const multiply = function(array) {
  prod = 1;
  for(let i=0;i<array.length;i++){
    prod*=array[i];
  }
  return prod;
};

const power = function(b,p) {
	return b**p
}; 

const factorial = function(n) {
    if (n<2){
      return 1
    }
    else{
      return n*factorial(n-1)
    }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
