console.log("Inicio");

const promesa = new Promise( ( resolve, reject )=>{
      
     setTimeout( ()=>{
        reject(' se termino correctamente' ); 
     }, 2000 )   

});

promesa
.then( mensaje => console.log(mensaje))
.catch(error => console.warn(error));

console.log("Termino");