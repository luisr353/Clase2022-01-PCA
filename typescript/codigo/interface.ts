
    interface Avenger {
        alias: string,
        edad: number,
        poder?: string
    }

    const enviarMision = ( avenger: Avenger )=>{
        console.log(`Enviando a ${avenger.alias} a la mision`);
    }

    const regresarDeLaMision = ( avenger: Avenger )=>{
        console.log(`Regreso ${avenger.alias} de la mision`);
    }
    
    
    const heroe: Avenger = {
        alias: 'Iroman',
        edad: 50,
        poder:  'Rayo'
    }

    enviarMision(heroe);
    regresarDeLaMision(heroe);

