class Animal {
  // public name: string;
  // public species: string;
  // public sound: string;

  // Parameter properties
  constructor(public name: string, public species: string, public sound: string) {
    // this.name = name;
    // this.species = species;
    // this.sound = sound;
  }
  public makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
    // "german shephard says ghew ghew"
  }
}

const dog = new Animal("German Shepard", "dog", "Ghew Ghew");
const cat = new Animal("Shafin", "cat", "mew mew")
dog.makeSound()
cat.makeSound()

cat.name = "Special Cat"