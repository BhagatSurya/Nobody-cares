const hobbies = ['sporting','cooking']


//const coppyarray = hobbies.slice()
const coppyarray = [...hobbies]
console.log(coppyarray)

const person ={
    name: 'max',
    age: 20,
    greet() {
     console.log('Hi i am bhagat\t' + this.name)
    }
};


const coppyobject = {...person}
console.log(coppyobject)


const toarray = (arr1,arr2,arr3) =>{
    return [arr1,arr2,arr3]
}


console.log(toarray(1,2,3))

const toarraya = (...args) =>{
    return args
}


console.log(toarraya(1,2,3,7,8))