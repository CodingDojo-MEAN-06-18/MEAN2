var myString = 'this is a string';
myString = 'new string';
// myString = 234;
var myNum;
myNum = 234;
// myNum = 'a string';
var array = [234523453425, 'dog', 'cat'];
array.push('new content');
array.push(0909);
array.push(true);
var first = array[0];
// const user: IUser = {
//   name: 'Bob',
// };
// user.email = 'email';
// function User(name) {
//   this.name = name;
// }
var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
var user = new User('Bob', 'bob@bob.com');
