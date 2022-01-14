
    const avenger = {
        nombre:'Tony',
        heroe :'Ironman',
        poder :'Traje'
     }

    // console.log(avenger.nombre);
    // console.log(avenger.heroe);
    // console.log(avenger.poder);

    const {nombre, heroe, poder } = avenger;

    // console.log(nombre);
    // console.log(heroe);
    // console.log(poder);

    const extraer = ( { nombre, poder}: any) => {
        console.log( nombre) ;
        console.log( poder) ;
    }

    // extraer(avenger);

    const avengers: string[] = ["thor","Iroman","Spiderman"];

    // console.log(avengers[0]);

    const [, b,  ] = avengers;
    // console.log(b);

    const extraerArr = ( [thor, ironman, spiderman ]: string[]) =>{
        console.log(thor);
    }

    extraerArr(avengers);