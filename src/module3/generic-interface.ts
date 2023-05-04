// // Generic interface

// interface CrushInterface<T, U = null, V = null> {
//   name: string;
//   husband: T;
//   wife?: U;
//   friend?: V;
// }

// interface PersonInterface {
//   name: string,
//   salary: number
// }
// interface PersonInterface2 {
//   name: string,
//   age: number
// }

// const newCrush: CrushInterface<string,boolean, number> = {
//   name: 'mim',
//   husband: 'true',
//   wife: true,
//   friend:3

// }

// const crush4: CrushInterface<
//   PersonInterface,
//   PersonInterface2
// > = {
//   name: "Kate",
//   husband: {
//     name: "sahifn",
//     salary: 40
//   },
//   wife: {
//     name: "Winslet",
//     age: 40
//   }
// }



// const crushh1: CrushInterface<boolean, string> = {
//   name: "kate winslet",
//   husband: true,
//   wife: 'sokhina'
// }

// const crush23: CrushInterface<string> = {
//   name: "kate winslet",
//   husband: "shafin"
// }

// interface HusbandInterface { name: string, salary: number }

// const crush3: CrushInterface<HusbandInterface> = {
//   name: "kate winslet",
//   husband: {
//     name: "shaifn",
//     salary: 4904
//   }
// }

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