// Same Keys and Values:

function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName
    }
  }

  // Computed Property Names:

const favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
  }

// Object Methods:

var instructor2 = {
    firstName: "Colt",
    sayHi(){
      return "Hi!";
    },
    sayBye(){
      return this.firstName + " says bye!";
    }
  }

// createAnimal function:

const createAnimal = (species, verb, noise) => ({
    species,
    [verb]() {
        return noise;
    }
})

