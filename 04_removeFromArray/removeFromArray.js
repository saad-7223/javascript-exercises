const removeFromArray = function(arr , ...args) {
    const na = []
    arr.forEach(element => {
      if(!args.includes(element)){
        na.push(element)
      }  
    })
    return na
};

// Do not edit below this line
module.exports = removeFromArray;
