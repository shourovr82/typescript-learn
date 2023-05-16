// PICK

interface NewPerson2 {
  name: string;
  email?: string;
  contactNo: string;
}

type Email = Pick<NewPerson2, "email">
type Contact = Pick<NewPerson2, "contactNo" | "email">

// Omit

type NewName = Omit<NewPerson2, "email" | "contactNo">

// Partial and Required

// to make all the properties be optional type

type Optional = Partial<NewPerson2>;
type RequiredProps = Required<NewPerson2>;


// readonly

const newperson: Readonly<NewPerson2> = {
  name: "Shafin",
  email: "abc@gmail.com",
  contactNo: "2233"
}


// newperson.name = "Forhan"

// Record type -----------------

// type myObject = {
//   a: string;
//   b: string;
//   c: string;
// }

// using index signature

// type myObject = {
//   [key: "a" | "b" | "c"]: string;
// }

// Record "a" | "b" "c"
// type myObject = Record<string, string>
type myObject = Record<"a" | "b" | "c", string>

const objj: myObject = {
  a: "1",
  b: "2",
  c: "3"
}