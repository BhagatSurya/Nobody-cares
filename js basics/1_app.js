var name = "max";
var age =20
var has_hobbies = true;
console.log(name);

function usediscrption(username,hisage,ishobby) {
    return (
        username + "hello\n" +
        `his age ${hisage}\n` +
         `do he a have a hobby ? ${ishobby}`
    )
    
}

const consolea = usediscrption(name,age,has_hobbies)

console.log(consolea)