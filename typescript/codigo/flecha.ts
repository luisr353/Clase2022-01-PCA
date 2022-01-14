
// function sumar( numero1: number, numero2: number){
//     return numero1 + numero2;
// }

// let misuma = function( numero1: number, numero2: number){
//     return numero1 + numero2;
// }

// const miFuncion = function (nombre: string) {
//     return nombre.toUpperCase();
// }

// const miFuncionF = (nombre: string ) => nombre.toUpperCase();

// const miSumaF = (numero1: number, numero2: number) => numero1 + numero2;

// console.log( miSumaF(20, 20) );

const hulk = {
    nombre: "Hulk",
    smash(){
        // setTimeout( function(){
        setTimeout( ()=>{
            console.log(` ${ this.nombre} smash!!!`);
        },1000);
    }
}

hulk.smash();

