



// // Mocking



// // Json placeholder data fetch

// interface ITodo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean
// }

// const getTodo = async (): Promise<ITodo> => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return await response.json();
// }


// const getTodoData = async (): Promise<void> => {
//   const result = await getTodo();
//   console.log(result);
// }

// getTodoData()



// const makePromise = (): Promise<string> => {
//   return new Promise<string>((resolve, reject) => {
//     const data: string = "Data is Fetched";
//     if (data) {
//       resolve(data)
//     } else {
//       reject("Failed to fetch data")
//     }
//   })
// }


// const getPromiseData = async (): Promise<string> => {
//   const data = await makePromise()
//   return data
// }



// const makePromiseBoolean = (): Promise<boolean> => {
//   return new Promise<boolean>((resolve, reject) => {
//     const data: boolean = true;
//     if (data) {
//       resolve(data)
//     } else {
//       reject("Failed to fetch data")
//     }
//   })
// }
// const getPromiseDataBoolean = async (): Promise<boolean> => {
//   const data = await makePromiseBoolean()
//   return data
// }


// // object

// interface DataType {
//   data: string;
// }

// const makePromiseObject = (): Promise<DataType> => {
//   return new Promise<DataType>((resolve, reject) => {
//     const data: DataType = { data: "data is fetched" };
//     if (data) {
//       resolve(data)
//     } else {
//       reject("Failed to fetch data")
//     }
//   })
// }
// const getPromiseDataObject = async (): Promise<DataType> => {
//   const data = await makePromiseObject()
//   return data;
// }
// // const result1 = makePromise();
// // console.log(result1);

// // Promise<string> Promise<boolean> Promise<object>