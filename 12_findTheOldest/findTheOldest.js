const findTheOldest = function(obj) {

    function getAge(person) {
        let age;
        let currentDate = new Date();
        if (person.yearOfDeath == undefined) {
            age = currentDate.getFullYear() - person.yearOfBirth;
        } else {
            age = person.yearOfDeath - person.yearOfBirth
        }
        return age
    }

    return obj.reduce((oldest, current) => {
        if (getAge(current) > getAge(oldest)) {
            return current
        } else {
            return oldest
        }
    }, obj[0])

};

// Do not edit below this line
module.exports = findTheOldest;
