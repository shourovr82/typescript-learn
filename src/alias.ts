type CrushType = {
  name: string;
  age?: number;
  profession: string;
  address: string;
};

type CrushMarriedType = boolean;

const crush1: CrushType = {
  name: 'Moyna Pakhi',
  age: 22,
  profession: 'web developer',
  address: 'uganda'
};

const crush2: CrushType = {
  name: 'tia pahhi',
  profession: 'Next Level Web Developer',
  address: 'Mexico'
}

const isCrushMarried: CrushMarriedType = false;

type CourseNameType = string;

const courseName: CourseNameType = 'Next Level Web Development';

type OperationType = (x: number, y: number) => number

const calculate = (
  number1: number,
  number2: number,
  operation: OperationType
) => {
  return operation(number1, number2);
}

calculate(10, 20, (x, y) => x + y)
calculate(10, 20, (x, y) => x - y)
calculate(10, 20, (x, y) => x * y)
