//complete this code
// Animal Class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log sound
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// Cat Class
class Cat extends Animal {
  // Method to log "purr"
  purr() {
    console.log("purr");
  }
}

// Dog Class
class Dog extends Animal {
  // Method to log "woof"
  bark() {
    console.log("woof");
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr();      // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark();      // Output: woof


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
