// ternary operator

const age: number = 14;

const isAdult = age >= 18 ? 'Yes' : 'No';

// console.log(isAdult);

// Nullish coalescing operator
// Null and undefined

const isAuthenticatedUser = "";
const userName = isAuthenticatedUser ?? "Guest";
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
// console.log({ userName, userName2 });


type Manush = {
  name: string;
  age: number;
  address: {
    city: 'No city',
    road: 'No road',
    home?: ''
  }
}

const manush1: Manush = {
  name: 'Manush',
  age: 100,
  address: {
    city: 'No city',
    road: 'No road',

  }
}

const home = manush1?.address?.home ?? 'No Home';

console.log({ home });// default 'No Home'