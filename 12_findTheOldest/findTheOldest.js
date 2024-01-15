const findTheOldest = function(array) {
  let oldest = ""
  let oldest_age = 0
  const now = new Date()
  array.forEach(element => {
    let b = element.yearOfBirth
    let d = element.yearOfDeath
    if(d == null || !d) d = now.getFullYear()   
    if (oldest_age < d-b){
      oldest = element
      oldest_age = d-b
    }
  });    
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
