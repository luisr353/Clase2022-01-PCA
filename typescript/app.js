"use strict";
(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(nombre, equipo, nombreReal, peleasGanadas) {
            if (peleasGanadas === void 0) { peleasGanadas = 0; }
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.peleasGanadas = peleasGanadas;
        }
        return Avenger;
    }());
    var antman = new Avenger("Antman", "Capitan");
    console.log(antman);
})();
