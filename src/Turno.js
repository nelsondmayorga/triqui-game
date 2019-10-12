"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Turno = /** @class */ (function () {
    function Turno() {
        this.valor = Math.round(Math.random());
    }
    Turno.prototype.toca = function () {
        return this.valor;
    };
    Turno.prototype.noToca = function () {
        return (this.valor + 1) % 2;
    };
    Turno.prototype.cambiar = function () {
        this.valor = this.noToca();
    };
    return Turno;
}());
exports.Turno = Turno;
