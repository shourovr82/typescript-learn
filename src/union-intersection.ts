
type NoobDeveloper = {
  name: string;
}

// type JuniorDeveloper = {
//   name: string;
//   expertise: string;
//   experience: number;
// };
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};


// enum Level {
//   junior = 'Junior',
//   mid = 'Mid',
//   senior = 'Senior'
// }

type NextLevelDeveloper = JuniorDeveloper & {
  leaderShipExperience: number;
  level: "senior" | "mid" | "junior"
}


const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Shafin",
  expertise: 'Javascript',
  experience: 6,
}
const developer: NextLevelDeveloper = {
  name: 'Next Bhai',
  expertise: 'Typescript',
  experience: 2,
  leaderShipExperience: 1,
  level: "senior"
}