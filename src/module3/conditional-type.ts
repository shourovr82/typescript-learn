// a type is dependent on another type

type a1 = null;
type a3 = undefined;
type a4 = number;
type a2 = a1 extends string ? string : null;

// nested conditional type

type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null : never;




type Sheikh = {
  wife1: string;
  wife2: string;
}

type A = keyof Sheikh;    // wife 1 | wife 2
// "wife1" extends "wife1" | "wife2"


type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

type CheckWife1 = CheckProperty<Sheikh, "wife1">


// check korbe ei sheikh type a wife1 property ache kina ? true : false


// Matha kharap example

type Bandhubi = "monika" | "rachel" | "pheobe";

type RemoveBandhubi<T, K> = T extends K ? never : T;


type CurrentBandhubi = RemoveBandhubi<Bandhubi, "pheobe">;