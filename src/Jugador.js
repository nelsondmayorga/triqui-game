"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coordenada_1 = require("./Coordenada");
var Jugador = /** @class */ (function () {
    function Jugador(color) {
        this.color = color;
    }
    Jugador.prototype.ponerFicha = function (tablero) {
        console.log('Turno del jugador: ' + this.color);
        tablero.ponerFicha(this.recogerCoordenada(tablero), this.color);
    };
    Jugador.prototype.recogerCoordenada = function (tablero) {
        var coordenada = new Coordenada_1.Coordenada();
        var error;
        do {
            coordenada.pedir();
            error = this.errorPuesta(tablero, coordenada);
            if (error)
                console.log('ESTA CASILLA ESTA OCUPADA!');
        } while (error);
        return coordenada;
    };
    Jugador.prototype.errorPuesta = function (tablero, coordenada) {
        return tablero.ocupada(coordenada);
    };
    Jugador.prototype.getColor = function () {
        return this.color;
    };
    Jugador.prototype.cantarVictoria = function () {
        console.log("!!!!!!!!!!!!!!!!!!!!LOS " + this.color + " HAN GANADO!!!!!!!!!!!!!!!!!!!!");
    };
    return Jugador;
}());
exports.Jugador = Jugador;
