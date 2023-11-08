let name = "max";
let age =20
let has_hobbies = true;
console.log(name);

function usediscrption(username,hisage=10,ishobby) {
    return (
        username + "hello\n" +
        `his age ${hisage}\n` +
         `do he a have a hobby ? ${ishobby}`
    )
    
}

const consolea = usediscrption(name,age,has_hobbies)

console.log(consolea)


//const 

const name2 = "max";
const age2 =20
const has_hobbies2 = true;
console.log(name2);

//way of writting a function 

const sunrize = function(username,hisage=10,ishobby) {
    return (
        username + "hello\n" +
        `his age ${hisage}\n` +
         `do he a have a hobby ? ${ishobby}`
    )
    
}


// other way of writing the function

const sunrize2 = (username,hisage=10,ishobby) => {
    this
    return (
        username + "hello\n" +
        `his age ${hisage}\n` +
         `do he a have a hobby ? ${ishobby}`
    )
    
}

//short way to write a function

const add =(a,b) => {
    return a+b
}

console.log(add(2,4))

//short way to write a function without retun statument 

const add1 =(a,b) => a+b
console.log(add(2,4))


//writing function without arugments 
cosnt_two_number = () => 5 + 3
console.log(cosnt_two_number())

//another way  of writting code 
function usediscrption(username,hisage=10,ishobby) {
    return (
        username + "hello\n" +
        `his age ${hisage}\n` +
         `do he a have a hobby ? ${ishobby}`
    )
    
}

const consolea2 = usediscrption(name2,age2,has_hobbies2)

console.log(consolea2)