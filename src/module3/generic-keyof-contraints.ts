// type PersonType = {
//   name: string;
//   age: number;
//   address: string;
// }

// type newType = 'name' | "age" | "address"

// type newTypeUsingKeyOf = keyof PersonType;

// // const a: newType = "age";
// // const b: newTypeUsingKeyOf = "address"



// // ({ name: "Mr. X", age: 100 }, "age")     // Mr.X

// function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
//   obj[key]
// }

// const property = getProperty({ name: "Mr.X", age: 100, address: "jhapra" }, "address");

// // const a = {
// //   name: "Mr. X",
// //   age: 100
// // }
// // a["age"]