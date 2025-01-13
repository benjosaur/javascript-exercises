const findTheOldest = function (people) {
  const d = new Date();
  const currentYear = d.getFullYear();

  getAge = (person) => {
    age = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : currentYear - person.yearOfBirth;
    return age;
  };

  return people.reduce((oldest, person) => {
    oldest = getAge(oldest) < getAge(person) ? person : oldest;
    return oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
