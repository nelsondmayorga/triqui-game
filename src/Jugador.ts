import { Tablero } from "./Tablero";
import { Coordenada } from "./Coordenada";

export class Jugador {

    private color: string;

    constructor(color: string) {
        this.color = color;
    }

    ponerFicha(tablero: Tablero) {
        console.log('Turno del jugador: ' + this.color)
        tablero.ponerFicha(this.recogerCoordenada(tablero), this.color)
    }

    recogerCoordenada(tablero: Tablero): Coordenada {
        let coordenada: Coordenada = new Coordenada();
        let error: boolean;
        do {
            coordenada.pedir();
            error = this.errorPuesta(tablero, coordenada);
            if (error) console.log('ESTA CASILLA ESTA OCUPADA!')
        } while (error)

        return coordenada;
        
    }

    errorPuesta(tablero: Tablero, coordenada: Coordenada, ): boolean {
        return tablero.ocupada(coordenada);
    }

    getColor() {
        return this.color;
    }

    cantarVictoria() {
        console.log(`!!!!!!!!!!!!!!!!!!!!LOS ${this.color} HAN GANADO!!!!!!!!!!!!!!!!!!!!`)
    }

    

}