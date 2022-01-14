const nombre = "Martin";
const apellido = "Diaz";
const edad = 32;

function getEdad(){
    return 32+1;
}

console.log("Hola, "+ nombre+" "+apellido+" tienes ("+ getEdad() +") años de edad");

const salida = ` Hola, ${nombre} ${apellido} tienes ${ getEdad() } años de edad!`;

console.log(salida);