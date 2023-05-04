// type GenericTyple<X, Y> = [X, Y];

// const relation: GenericTyple<string, string> = ["Shafin", "Kate Winslet"]


// // type RelationWithType = { name: string, salary: number }

// interface RelationWithSalaryInterface {
//   name: string, salary: number
// }

// const relationWithSalary: GenericTyple<RelationWithSalaryInterface, string> = [
//   {
//     name: "shafin",
//     salary: 100000,
//   },
//   "kate winslet"
// ]


// type GenericArray<T> = Array<T>               // T ===type or props
// type NameRollType = { name: string, roll: number }

// const rollNumberss: GenericArray<number> = [34, 234, 65];
// const rollNumberss2: GenericArray<string> = ["42", "33", "4"]
// const rollNumberss3: GenericArray<boolean> = [true, false];
// const userNameRollNumber: GenericArray<NameRollType> = [
//   { name: 'shafin', roll: 2 },
//   { name: "tumi", roll: 1 }
// ]











// // function generateAdder(a: number): (b: number) => number {
// //   return function (b: number) {
// //     return a + b
// //   }
// // }

// // const addTwof = generateAdder(2);
// // console.log(addTwof(3));
// // console.log(addTwof(5));