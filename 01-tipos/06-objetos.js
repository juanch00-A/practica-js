//Personaje de tv
let nombre = 'Tanjito'
let anime = 'Demon Slayer'
let edad = 16

let personaje= {
    nombre: 'Tanjito',
    anime: 'Demon slayer',
    edad: 16 ,
}

console.log(personaje)
console.log(personaje.nombre)
console.log(personaje['anime'])

//Reasignar
personaje.edad = 13
personaje['edad'] = 18

//Borrar algun componente de este objeto

delete personaje.anime