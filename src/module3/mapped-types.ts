const arrayOfNumbers = [1, 2, 3];            // ["1","2","3"]

const arrayOfStrings = arrayOfNumbers.map((number) => number.toString())
console.log(arrayOfStrings);


type AreaNumber = {
  height: number;
  width: number;
}


type A = AreaNumber["height"]        // look up types
type B = keyof AreaNumber;       // "width"  | "height"


type Volume = {
  height: string;
  width: number;
  depth: number;
}

type Area<T> = {
  // [key in keyof Volume]: Volume[key]   // volume["height"] --->number
  // generic
  readonly [key in keyof T]: T[key]
}

const area1: Area<{ name: string, width: string }> = { name: "shafin", width: '4' }



type AreaString = {
  height: string;
  width: string;
}

type AreaReadonly = {
  readonly height: number;
  readonly width: number;
}

const rectangularArea: AreaReadonly = {
  height: 10,
  width: 20
}

// rectangularArea.width = 10






