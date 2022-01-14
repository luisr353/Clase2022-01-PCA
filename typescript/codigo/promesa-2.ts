const retirarDinero = (montoRetirar: number): Promise<number> => {
    let dineroActual = 10000; 

    return new Promise ( (res, rej )=>{
        if( montoRetirar > dineroActual){
            rej("No hay fondos suficientes");
        }else{
            dineroActual -= montoRetirar;
            res(dineroActual);
        }
    });
}

retirarDinero(5000)
.then(dineroActual => console.log(`Saldo disponible ${dineroActual}`))
.catch(console.warn)
;

