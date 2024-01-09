let i = 0

//Primero se enfoca en la condicion y leugo ejecuta el codigo
while (i < 10) {
    if (i % 2 == 0) {
        console.log('Numero par', i)
    }
    i++
}

//Ejecuta el codigo y luego de si la condicion se cumple
do {
    if (i % 2 == 0) {
        console.log('Numero par', i)
    }
    i++
}  while (i < 10) 
