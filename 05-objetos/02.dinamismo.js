const user = {
    id: 1, 
} 

user.name = 'Juan'
user.guardar = function () {
    console.log('Guardando', user.name)
}

user.guardar()

//si quiero borrar
// delete 
// user.name
// delete user.guardar
//console.log(user)


//para no cambiar sus propiedades y valores
// Object.freeze({})

//propiedades fijas pero que sus valores puedan cambiar
const user1 = Object.seal({id: 1})
user1.name = 'John'
user1.id = 2
console.log(user1)


