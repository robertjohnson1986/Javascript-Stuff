// Author: Todd Enders

var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

// print John's age
console.log(users[1].age);

// print the name of the first object
console.log(users[0].name);

// print the name and age of each user using a for loop
for (var i = 0; i < users.length; i++){
    console.log(users[i].name, "-", users[i].age);
}