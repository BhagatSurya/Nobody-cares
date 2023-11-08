const person ={
    name: 'max',
    age: 20,
    greet() {
     console.log('Hi i am bhagat\t' + this.name)
    }
};

// Here is the mistake
console.log(person.greet()) // <-- This line is causing 'undefined' to be printed. 
// You're trying to print the result of person.greet(). But person.greet() doesn't have a result - it just prints a message. So, it gives back undefined, and that's what gets printed.
//console.log(person.greet())
person.greet();

const hobbies = ['sporting','cooking']

//for loop in js
for(let i of hobbies) {
    console.log(i)

}

console.log(hobbies)

//map method
console.log(hobbies.map(hobby => {
    return 'Hobby:' + hobby
}))
