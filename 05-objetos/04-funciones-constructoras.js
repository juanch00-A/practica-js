//{id:1, recuperarClave: funtion(){}}

function Usuario(){
    this.id = 1
    this.recuperarClave = function() { //metodo
        console.log('recuperando clave')
    }
}

let usuario = new Usuario()
console.log(usuario)

