"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tablero = /** @class */ (function () {
    function Tablero() {
        this.casillas = [[], [], []];
        for (var i = 0; i < Tablero.DIMENSION; i++) {
            for (var j = 0; j < Tablero.DIMENSION; j++) {
                this.casillas[i][j] = Tablero.VACIA;
            }
        }
    }
    Tablero.prototype.mostrar = function () {
        var fila = '';
        for (var i = 0; i < this.casillas.length; i++) {
            for (var j = 0; j < this.casillas[i].length; j++) {
                fila = fila + ' ' + this.casillas[i][j];
            }
            console.log(fila);
            console.log('\r');
            fila = '';
        }
    };
    Tablero.prototype.hayTriqui = function () {
        return this.hayTresEnRaya('x') || this.hayTresEnRaya('o');
    };
    Tablero.prototype.hayTresEnRaya = function (color) {
        var filas = [0, 0, 0];
        var columnas = [0, 0, 0];
        var diagonal = 0;
        var secundaria = 0;
        for (var i = 0; i < this.casillas.length; i++) {
            for (var j = 0; j < this.casillas[i].length; j++) {
                if (color === this.casillas[i][j]) {
                    filas[i]++;
                    columnas[j]++;
                    if (i === j)
                        diagonal++;
                    if (i + j === 2)
                        secundaria++;
                }
            }
        }
        if (diagonal === 3 || secundaria === 3) {
            return true;
        }
        else {
            for (var i = 0; i < 3; i++) {
                if (filas[i] === 3 || columnas[i] === 3) {
                    return true;
                }
            }
        }
        return false;
    };
    Tablero.prototype.ponerFicha = function (coordenada, color) {
        this.casillas[coordenada.getFila() - 1][coordenada.getColumna() - 1] = color;
    };
    Tablero.prototype.ocupada = function (coordenada) {
        return this.casillas[coordenada.getFila() - 1][coordenada.getColumna() - 1] !== Tablero.VACIA;
    };
    Tablero.DIMENSION = 3;
    Tablero.VACIA = '_';
    return Tablero;
}());
exports.Tablero = Tablero;
