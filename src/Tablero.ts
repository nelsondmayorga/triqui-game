import { Coordenada } from "./Coordenada";

export class Tablero {

    private casillas: string[][] = [[], [], []];
    private static DIMENSION: number = 3;
    private static VACIA: string = '_';

    constructor() {
        for (let i = 0; i < Tablero.DIMENSION; i++) {
            for (let j = 0; j < Tablero.DIMENSION; j++) {
                this.casillas[i][j] = Tablero.VACIA
            }
        }
    }

    mostrar() {
        let fila: string = '';
        for (let i = 0; i < this.casillas.length; i++) {
            for (let j = 0; j < this.casillas[i].length; j++) {
                fila = fila + ' ' + this.casillas[i][j];
            }
            console.log(fila);
            console.log('\r');
            fila = ''
        }
    }

    
    hayTriqui(): boolean {
        return this.hayTresEnRaya('x') || this.hayTresEnRaya('o');
    }

    private hayTresEnRaya(color: string): boolean {
        let filas: number[] = [0, 0, 0];
        let columnas: number[] = [0, 0, 0];
        let diagonal: number = 0;
        let secundaria: number = 0;

        for (let i = 0; i < this.casillas.length; i++) {
            for (let j = 0; j < this.casillas[i].length; j++) {
                if (color === this.casillas[i][j]) {
                    filas[i]++;
                    columnas[j]++;

                    if (i === j) diagonal++
                    if (i + j === 2) secundaria++
                }
            }
        }

        if (diagonal === 3 || secundaria === 3) {
            return true;
        } else {
            for (let i = 0; i < 3; i++) {
                if (filas[i] === 3 || columnas[i] === 3) {
                    return true;
                }
            }
        }

        return false;
    }

    ponerFicha(coordenada: Coordenada, color: string) {
        this.casillas[coordenada.getFila() - 1][coordenada.getColumna() - 1] = color;
    }

    ocupada(coordenada: Coordenada): boolean {
        return this.casillas[coordenada.getFila() - 1][coordenada.getColumna() - 1] !== Tablero.VACIA;
    }

}