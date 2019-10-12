export class Turno {
    
    private valor: number;

    constructor() {
        this.valor = Math.round(Math.random());
    }

    toca(): number {
        return this.valor;
    }

    noToca(): number {
        return (this.valor + 1) % 2;
    }

    cambiar() {
        this.valor = this.noToca();
    }

}