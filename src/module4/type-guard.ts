// type guard

// key of guard
type Alphanumeric = string | number;
function addT(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric {
  if (typeof param1 === 'number' && typeof param2 === 'number') {
    return param1 + param2;
  } else {
    return param1.toString() + param2.toString();
  }
}


addT("1", "2")



// in guard

type NormalUserType = {
  name: string;

}

type AdminUserType = {
  name: string;
  role: "admin"
}

function getUser(user: NormalUserType | AdminUserType): string {
  if ("role" in user) {
    return ` I am an admin and my role is ${user.role}`
  } else {
    return `I am a normal user`
  }
}

const normalUser1: NormalUserType = { name: "Mr. Kallu" }
const adminUser1: AdminUserType = { name: "shafin", role: "admin" }

console.log(getUser(normalUser1));
console.log(getUser(adminUser1));


// instance of guard

class Animall {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }


  makeSoundA() {
    console.log(`I am making sound`);
  }
}


class Dogs extends Animall {
  constructor(name: string, species: string) {
    super(name, species)
  }
  makeBark() {
    console.log(`I am barking`);
  }
}


class Cats extends Animall {
  constructor(name: string, species: string) {
    super(name, species)
  }
  makeMeaw() {
    console.log(' I am meawing');
  }
}


function isDog(animal: Animall): animal is Dogs {
  return animal instanceof Dogs
}

function isCat(animal: Animall): animal is Cats {
  return animal instanceof Cats;
}

function getAnimal(anim: Animall) {
  if (isDog(anim)) {
    anim.makeBark()
  }
  else if (isCat(anim)) {
    anim.makeMeaw()
  }
  else {
    animal1.makeSoundA();
  }

}


const animal1 = new Dogs("German bhai", "dog")   // instance --> Dog

const animal2 = new Cats("srv", "cat")   // instance --> cat

getAnimal(animal2)