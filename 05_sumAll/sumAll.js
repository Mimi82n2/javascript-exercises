const sumAll = function(s, e) {
    if (typeof(s) !== 'number' || typeof(e) !== 'number' || s < 0 || e < 0){
        return "ERROR";
    }
    total = 0;
    if (e < s){
        [s,e] = [e,s];
    }
    for (let i = s; i <= e; i++){
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
