"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = __importDefault(require("readline-sync"));
var Coordenada = /** @class */ (function () {
    function Coordenada() {
        this.fila = 0;
        this.columna = 0;
    }
    Coordenada.prototype.setCoordenada = function (fila, columna) {
        this.fila = fila;
        this.columna = columna;
    };
    Coordenada.prototype.getFila = function () {
        return this.fila;
    };
    Coordenada.prototype.getColumna = function () {
        return this.columna;
    };
    Coordenada.prototype.pedir = function () {
        var valida = false;
        do {
            console.log('Introducir coordenadas');
            var fila = readline_sync_1.default.question('Fila: ');
            this.fila = parseInt(fila);
            var columna = readline_sync_1.default.question('Columna: ');
            this.columna = parseInt(columna);
            valida = this.valida();
            if (!valida)
                console.log('Error, valor fuera de rango!');
        } while (!valida);
    };
    Coordenada.prototype.valida = function () {
        return (this.fila >= 1 && this.fila <= 3) && (this.columna >= 1 && this.columna <= 3);
    };
    Coordenada.prototype.igual = function (coordenada) {
        return this.fila === coordenada.getFila() && this.columna === coordenada.getColumna();
    };
    return Coordenada;
}());
exports.Coordenada = Coordenada;
