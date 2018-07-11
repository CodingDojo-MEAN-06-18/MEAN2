var myString = 'a string';
// myString = 'another string';
var aString = 'a string that can change';
aString = 'something else';
var myNum;
myNum = 234;
// myNum = 'not a number';
var array = ['cat', 'dog', 'horse'];
array.push(999);
array.push(true);
var first = array[0];
first.toLowerCase();
// const user: IUser = {
//     username: 'Bob',
// };
// user.email = 'some email';
// function User(name) {
//     this.name = name;
// }
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
var user = new User('Bob', 'bob@bob.com');
