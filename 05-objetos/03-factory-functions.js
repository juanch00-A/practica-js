function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando archivo')
        }, 
    };
}

let user1 = crearUsuario('Juan', 'juan@gmail.com');
let user2 = crearUsuario('Yulied', 'yulied@gmail.com');

console.log(user1, user2)

