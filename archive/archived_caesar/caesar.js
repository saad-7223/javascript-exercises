const caesar = function(s,n) {//s - String and n - increment value 
    ns = ""
    for (let i = 0; i < s.length; i++) {
        loh = s[i].charCodeAt(0)
        if(loh >=97 && loh <=122){ // 97 and 122 represents the ascii value for a-z
          ns+=low_shift(s[i],n)
        }
        else if(loh >=65 && loh <= 90){ //65 to 90 represents the ascii value for A-Z
            ns+=up_shift(s[i],n)
        }
        else{
            // if its not a aplhabet
            ns+=s[i]
        }
    }
    return ns
};
const low_shift = function(letter,increment){
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let pointer = alpha.indexOf(letter);
    let incremented_val = pointer + (increment);

    if (incremented_val >= 0 && incremented_val <= 25) // if incremented value is within the cycle
        return alpha[incremented_val];

    if (incremented_val > 25){ // if increment value beyond the cycle that is after 'z'
        while(increment > 0){
            pointer ++;
            if (pointer > 25){
                pointer = 0;
            }
            increment --;
        }
        return alpha[pointer];
    }
    if (incremented_val < 0){ // if increment value befor the cycle that is befor 'a' 
        while(increment < 0){
            pointer --;
            if (pointer < 0){
              pointer = 25;
            }
            increment ++;
        }
        return alpha[pointer];
    }
}
const up_shift = function(letter,increment){
    let alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let pointer = alpha.indexOf(letter);
    let incremented_val = pointer + (increment);

    if (incremented_val >= 0 && incremented_val <= 25)// if increment value beyond the cycle that is after 'z'
        return alpha[incremented_val];

    if (incremented_val > 25){
        while(increment > 0){
            pointer ++;
            if (pointer > 25){
                pointer = 0;
            }
            increment --;
        }
        return alpha[pointer];
    }
    if (incremented_val < 0){// if increment value befor the cycle that is befor 'a'
        while(increment < 0){
            pointer --;
            if (pointer < 0){
                pointer = 25;
            }
            increment ++;
        }
        return alpha[pointer];
    }
}

// Do not edit below this line
module.exports = caesar;
