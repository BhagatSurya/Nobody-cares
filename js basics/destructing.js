const person ={
    name: 'max',
    age: 20,
    greet() {
     console.log('Hi i am bhagat\t' + this.name)
    }
};


const printname = (persondata) =>{
    console.log(persondata.name)
}

printname(person)

// object deconstraction 
const printnamede = ({name,age}) =>{
    console.log(name,age)
}
printnamede(person)


//secound way
const {name,age} =person;
console.log(name,age)


//array destrecting

const hobbies = ['sporting','cooking']

const [Hobby1,Hobby2] = hobbies

console.log(Hobby1,Hobby2)
