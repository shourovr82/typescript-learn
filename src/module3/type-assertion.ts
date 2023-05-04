let emni: any;
emni = "Nex level ";
(emni as string).length;
<string>emni.length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted Result is : ${value} gram`
  } if (typeof param === "number") {
    const value = param * 1000;
    return value
  }
}

const resultToBeNumber = kgToGram(2) as number;
const resultToBeString = <string>kgToGram("5");

type CustomErrorType = {
  message: string
}

try {

} catch (error) {
  console.log((error as CustomErrorType).message);
}