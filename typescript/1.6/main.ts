
let myString = 'this is a string';

myString = 'new string';


// myString = 234;

let myNum: number;

myNum = 234;
// myNum = 'a string';

const array: strNumBool[] = [234523453425, 'dog', 'cat'];

array.push('new content');
array.push(0909);
array.push(true);

type strNumBool = boolean | number | string;


const first = array[0] as string;

// first.toLowerCase();

interface IUser {
  name: string;
  email: string
}


// const user: IUser = {
//   name: 'Bob',
// };


// user.email = 'email';

// function User(name) {
//   this.name = name;
// }


class User implements IUser {
  constructor(public name: string, public email: string) {
  }
}

const user = new User('Bob', 'bob@bob.com');


class Person extends User implements IPerson {
  constructor(name: string, email: string, public age: number = 99) {
    super(name, email);
  }

  sayHello(): string {
    console.log(`Hello ${this.name}`);
    return this.name;
  }
}

interface IPerson extends IUser {
  age: number;
}

const person = new Person('bob2', 'email');

const p: IPerson = { age: 234, name: 'Person', email: 'email' };

const name1 = person.sayHello();
