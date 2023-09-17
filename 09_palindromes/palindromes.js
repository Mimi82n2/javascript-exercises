const palindromes = function (str) {
    l = 0;
    r = str.length - 1;

    while(l < r){
        if (!(
            (str[l] >= 'a' && str[l] <= 'z') || 
            (str[l] >= 'A' && str[l] <= 'Z') || 
            (str[l] >= '0' && str[l] <= '9'))){
            l += 1;
        }else if (!(
            (str[r] >= 'a' && str[r] <= 'z') || 
            (str[r] >= 'A' && str[r] <= 'Z') || 
            (str[r] >= '0' && str[r] <= '9'))){
            r -= 1;
        }else if(str[r].toLowerCase() !== str[l].toLowerCase()){
            return false;
        }else{
            l += 1;
            r -= 1;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
