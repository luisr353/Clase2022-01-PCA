import { Injectable } from '@angular/core';

@Injectable()
export class VillanosService{

    private villanos: Villano[] = [
        {
          nombre: "Loki",
          bio: "Loki es el único villano que los niños quieren ser. Es carismático, tiene rollazo, tiene estilo, habla como si fuera Shakespeare, viste como una estrella del rock, su historia es trágica, nos ha vacilado más veces de las que podamos recordar... y si preguntas a alguien por un villano de Marvel, es el primero que les va a venir a la mente. Tom Hiddleston, a tus pies",
          img: "assets/img/loki.jpg",
          aparicion: "1941-11-01",
          casa:"Marvel"
        },
        {
          nombre: "Killmonger",
          bio: "resulta tener razón y acaba haciendo cambiar al héroe de parecer. Luego se vuelve un poco crazy, vale, pero ¿a qué Rey no le ha pasado? ¡Hasta el nuestro tuvo problemas con su hermano!",
          img: "assets/img/Killmonger.jpg",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Thanos",
          bio: "Thanos es lo más grande que ha dado Marvel en cuanto a villanos y puede que el más reconocible, pero no por ello el mejor. Sí, es un personaje muy bien calculado y pensado, pero le acaba de faltar un punto de humanidad. Y de empatía con el público: no quieres que gane.",
          img: "assets/img/Thanos.jpg",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hela",
          bio: "Hela ha venido a jugar, y la Blanchett disfruta cada segundo que está en pantalla, porque es imposible molar más que Cate Blanchett ahora mismo. La primera villana de Marvel que... La primera villana de Marvel. ¡LA ÚNICA VILLANA DE MARVEL!",
          img: "assets/img/Hela.jpg",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Joker",
          bio: "Considerado el mejor villano de cómics, el Joker es el villano perfecto. Tiene muchos orígenes diferentes, y en la actualidad, en DC Rebirth, existen hasta tres Jokers diferentes. Antes de ser un villano, era un patético comediante que tuvo que recurrir a realizar actos delictivos para poder pagar algunas deudas. Se tuvo que poner la máscara roja de Red Hood, pero tuvo la mala suerte de encontrarse cara a cara con Batman, cayendo en residuos tóxicos que le dejaron la cara destrozada... Como villano de Batman, es impredecible, psicopático y muy astuto, habiendo sido capaz de asesinar a Jason Tood, el segundo Robin de Batman, y dejó parapléjica a Bargirl después de disparale a bocarrajo. Por otro lado, ha asesinado en dos ocasiones a Lois Lane en universos paralelos.",
          img: "assets/img/Joker.jpg",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
    
      constructor(){
          console.log("Servicio listo para consumir");
      }
      getVillanos():Villano[]{
          return this.villanos;
      }
      getVillano( idx: number){
        return this.villanos[idx];
      }
      buscarVillano( termino: string): Villano[]{
          let villanosArr: Villano[] = [];
          termino = termino.toLowerCase();

          for (let index = 0; index < this.villanos.length; index++) {
            let villano = this.villanos[index];
            let nombre = villano.nombre.toLowerCase();
            if( nombre.indexOf(termino) >=0 ){
              villano.idx = index;
              villanosArr.push(villano);
            }
            
          }
          return villanosArr;
      }

}
export interface Villano{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
    idx?: number;
}