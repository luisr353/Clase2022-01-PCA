//  FUNCION CON PARAMETRO OBLIGATORIO
//  function activar(quien: string){
//     console.log(` ${quien} activo.`)
//  }

//  FUNCION CON PARAMETRO OBLIGATORIO Y UN PARAMETRO POR DEFECTO
// function activar(quien: string, objeto = "la alarma"){   
//     console.log(` ${quien} activo ${objeto}`)
//  }

function activar(quien: string,  
    momento?: string,
    objeto = "alarma"
    ){        
    
        if(momento){
            console.log(` ${quien} activo la ${objeto}, en la ${momento}`);
        }else{
            console.log(` ${quien} activo la ${objeto}`);
        }
 }

 activar("Gordon");