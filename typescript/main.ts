
const myString = 'a string';

// myString = 'another string';

let aString = 'a string that can change';

aString = 'something else';


let myNum: number;


myNum = 234;

// myNum = 'not a number';

const array: strNumBool[] = ['cat', 'dog', 'horse'];

array.push(999);
array.push(true);

type strNumBool = string | number | boolean;



const first = array[0] as string;

first.toLowerCase();


// const user: IUser = {
//     username: 'Bob',
// };

// user.email = 'some email';


// function User(name) {
//     this.name = name;
// }

interface IUser {
    name: string;
    email: string;
}


class User implements IUser {
    constructor(public name: string, public email: string) {
    }
}

const user = new User('Bob', 'bob@bob.com');

class Person extends User implements IPerson { 
    constructor(name, email, public age: number = 99) {
        super(name, email);
    }

    private sayHello(): void {
        console.log(`Hello ${this.name}`);
    }
}

interface IPerson extends IUser {
    age: number;
}

const person = new Person('Person', 'person@email.com');

function doStuff(stuff: string): string {
    return stuff + ' more stuff';
}

function map<T, TResult>(array: T[], callback: (element: T, index: number) => TResult) {
    const results: TResult[] = [];

    for (let index = 0; index < array.length; index++) {
        results.push(callback(array[index], index))
    }

    return results;
}

const stringArray = ['cat', 'dog', '1', '4'];
const numArray = [1, 2, 3, 4, 5, 6, 6];

const results = map(numArray, (element, index) => { 
    return element * index + '';
});


