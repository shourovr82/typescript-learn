// normal function
// default parameter

function add(num1: number, num2: number = 20) {
  return num1 + num2;
}
add(30, 40)

// spread operator

const myFriends = ['chandler', 'joy', 'ross'];
const newFriends = ['monica', 'rachel', 'pheobe'];
const myBestFriend = {
  fullName: 'tanveer',
  age: 22,
}

const [bestfriend] = myFriends;
const { fullName: myFullName } = myBestFriend;

console.log(myFullName);

myFriends.push(...newFriends)

const addArrow = (num1: number, num2: number): number => num1 + num2;

const arr = [1, 4, 5];

const newArr = arr.map((elem: number) => elem * elem);


const person: {
  name: string,
  balance: number,
  addBalance(money: number): void
} = {
  name: 'Mezba',
  balance: 5,
  addBalance(money: number) {
    console.log(`My New Balnce is ${this.balance + money}`)
  }
}





// rest operator

const greeFriends = (...friends: string[]): void => friends.forEach(friend => console.log(`Hi ${friend}`))


// greeFriends('kashem', 'hashem', 'shourovr', 'salkdj', 'sadkl', 'sss')



// array and object destructuring

