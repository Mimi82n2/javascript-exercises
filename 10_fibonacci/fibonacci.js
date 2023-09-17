const fibonacci = function(n) {
    n = Number(n);
    if (n <= 0){
        return "OOPS";
    }
    let a = 1;
    let b = 1;

    for (let i = 0; i < n-1; i++){
        let temp = a;
        a = b
        b = temp + b;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
