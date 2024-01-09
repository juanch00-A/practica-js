function nombreResolucion(ancho,alto) {

    if (ancho > 7680 && alto > 4230){
        return '8K'
    }else if (ancho >= 3280 && alto >= 2160){
        return '4K'
    }else if (ancho >= 2560 && alto >= 1440){
        return 'WQHD'
    }else if (ancho >= 1920 && alto >= 1080){
        return 'FHD'
    }else if (ancho >= 1280 && alto >= 720){
        return 'HD'
    } else{
        return false
    }

}   



let nombre = nombreResolucion(1920,1180)
console.log(nombre)