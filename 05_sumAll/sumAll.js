const sumAll = function(start,stop) {
    if (!Number.isInteger(start) || !Number.isInteger(stop)){
        return 'ERROR'
    }
    if (start < 0 || stop < 0){
        return 'ERROR'
    }
    if (start > stop){
        [start,stop] = [stop,start]
        
    }
    let sm = 0;
    for(let i=start;i<=stop;i++){
        sm+=i;
    }
    return sm
}

// Do not edit below this line
module.exports = sumAll;
