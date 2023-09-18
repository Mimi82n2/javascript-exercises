const findTheOldest = function(people) {
    a = people.reduce((oldest, person) => {
        let oldDeath;
        if(!(oldest.yearOfDeath)){
            oldDeath = new Date().getFullYear();
        }else{
            oldDeath = oldest.yearOfDeath
        }

        let perDeath;
        if(!(person.yearOfDeath)){
            perDeath = new Date().getFullYear();
        }else{
            perDeath = person.yearOfDeath
        }

        if(perDeath - person.yearOfBirth > oldDeath - oldest.yearOfBirth){
            oldest = person;
        };
        return oldest;
    });
    return a;
};

// Do not edit below this line
module.exports = findTheOldest;
