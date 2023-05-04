type User = {
  name: string;
  age: number;
}

interface IUser {
  name: string;
  age: number;
}

interface IExtendedUser extends IUser {
  role: string;
}

type rollNumber = number;

// Object, function, array

type addNumbersType = (num1: number, num2: number) => number;

interface IAddNumbers {
  (num1: number, num2: number): number
}

const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;



type extendedUser = User & {
  role: string
}



const userExtended: IExtendedUser = {
  name: "shafin",
  age: 20000,
  role: "admin"
}


// const userWithTypeAlias: User = {
//   name: "type alias",
//   age: 100
// }
// userWithTypeAlias.

// const userWithInterface: IUser = {
//   name: "Interface",
//   age: 200
// }
// userWithInterface.









// array
type rollNumbersType = number[]
interface IRollNumbers {
  [index: number]: number
}

const rollNumbers: IRollNumbers = [1, 53, 56]