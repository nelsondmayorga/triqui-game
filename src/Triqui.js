"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tablero_1 = require("./Tablero");
var Jugador_1 = require("./Jugador");
var Turno_1 = require("./Turno");
var Triqui = /** @class */ (function () {
    function Triqui() {
        this.jugadores = [];
        this.tablero = new Tablero_1.Tablero();
        this.jugadores[0] = new Jugador_1.Jugador('x');
        this.jugadores[1] = new Jugador_1.Jugador('o');
        this.turno = new Turno_1.Turno();
    }
    Triqui.prototype.jugar = function () {
        do {
            this.tablero.mostrar();
            this.jugadores[this.turno.toca()].ponerFicha(this.tablero);
            this.turno.cambiar();
        } while (!this.tablero.hayTriqui());
        this.jugadores[this.turno.noToca()].cantarVictoria();
    };
    return Triqui;
}());
exports.Triqui = Triqui;
