/*
* JavaScript Datatypes
* Booleans
* Strings
* Objects
* Numbers
* Null
* Undefined
* Symbol
*/

// Booleans
let userHasQuit = false;
/*
Example of when we could use a boolean to continuously do something for an unspecified amount of time
while(!userHasQuit) {
    const selection = window.prompt('do you want to quit', 'no')
    if(selection.toLowerCase().trim() === 'yes') {
        userHasQuit = true
    }
}
*/

/*
// Strings
const str = 'Hello World'
console.log(str.split('')); //This is simple array, will split each letter as a separate string in an array
const words = str.split(' '); //This will split words in a string and separate them into an array**
console.log(words)
console.log(str.charAt(2));
console.log(str.toLowerCase());
*/

// Numbers
const myNum = 32
console.log(myNum * myNum);

if(myNum > 5) {
    console.log("you are not a child");
}

// Null & Undefined
const socialLife = null;
let future

console.log(socialLife);
console.log(future);

/*
// Falsey Values
0
NaN
Undefined
Null
''
false
*/

// Arrays
const arr = [1, 2, 3]
// loop over an array
arr.forEach((num) => {
    console.log(num)
})

//get an item
console.log(arr[arr.length - 1])

// Functions
//reversing a string shortcut
// const reverseString = (str) => {
//     return str.split('').reverse().join('')
// }
// console.log(reverseString('arthur'))

//another way to reverse a string
// const reverseString = (str) => {
//     const newString = []
//     for (let i = str.length; i >= 0; i--) {
//         newString.push(str[i])
//     }
//     return newString.join('')
// }
// console.log(reverseString('arthur'))

// const maxOfThree = (num1, num2, num3) => {
//     const arr = [num1, num2, num3]
//     arr.sort((a, b) => {
//         return b - a
//     })
//     return arr[0]
// }
// console.log(maxOfThree(7,3,4))

/*Objects and Class */
//Object is a noun
//Object is an instance of a class

//Object Literal - when you take an object and you don't make it from your custom class - its a primitive object to store data
const myObj = {
    name: 'arthur',
    age: 'nunya'
}

// Class
class Cat {
    constructor(name, age, cuteness) {
        this.name = name;
        this.age = age;
        this.cuteness = cuteness;
        this.legs = 4;
        this.hasClaws = true
    }
    scratch() {
        if(this.age < 2 && this.hasClaws) {
            console.log('Your couch is destroyed')
        } else {
            console.log('Nothing happens to your couch')
        }
    }
}

const huey = new Cat('Huey', 4, Infinity)

console.log(huey);
huey.scratch()

class SuperCat extends Cat {
    constructor(name, age, cuteness, superPower) {
        super(name, age, cuteness)
        this.superPower = superPower
    }
}

const patches = new SuperCat('Patches', 9, Infinity, 'flying')

console.log(patches)

class CrazyCatMan {
    constructor() {
        this.felineFriends = []
    }
    adoptCat(catName, age) {
        const newFriend = new Cat(catName, age, Infinity)
        this.felineFriends.push(newFriend)
    }
}

const arthur = new CrazyCatMan()

arthur.adoptCat('patches jr', 0, Infinity -1)

console.log(arthur)

//GIT
// First thing is initialize the git repo by ``` git init ```
// Second is to check git status ```git status```
// Third is to stage our commit ```git add -A``` A means all files will be staged
// Fourth is to check git status again ```git status```
// Fifth is commit ```git commit -m "some message that described what you did in file"```
// Sixth is to check git status again ```git status```