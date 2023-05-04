class ParentClass {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // method
  makeSleep(hours: number): string {
    return `This ${this.name} will sleep for ${hours}`
  }

}


class Student extends ParentClass {

  constructor(name: string, age: number, address: string) {
    super(name, age, address)

  }

  // // method
  // makeSleep(hours: number): string {
  //   return `This ${this.name} will sleep for ${hours}`
  // }

}


const student1 = new Student("shafin", 22, "jhapra")



//

class Teacher extends ParentClass {
  designation: string;

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address)
    this.designation = designation;
  }

  takeClasses(numOfClass: number): string {     // different 
    return `This ${this.name} will take ${numOfClass} classes`
  }


}

const teacher1 = new Teacher("Shafin", 23, "jhapra", "Professor");

