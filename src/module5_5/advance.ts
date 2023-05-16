// Properties ------->
interface Model<TData, TMethods> {
  data: TData;
  methods: TMethods;
}

interface IUsers {
  firstName: string;
  lastName: string;
}

// Methods ----------->
interface IMethods {
  fullName(): string;
}


type model = Model<IUsers, IMethods>

class Users implements model {
  data: IUsers;
  methods: IMethods;

  constructor(firstName: string, lastName: string) {
    this.data = { firstName, lastName }
    this.methods = {
      fullName: () => `${firstName} ${lastName}`
    }
  }
}

// instance
const user1 = new Users("Shafin", "Rahman")
console.log(user1.methods.fullName()); 
