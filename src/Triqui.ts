import { Tablero } from './Tablero';
import { Jugador } from './Jugador';
import { Turno } from './Turno';

export class Triqui {

    tablero: Tablero;
    jugadores: Jugador[] = [];
    turno: Turno;

    constructor() {
        this.tablero = new Tablero();
        this.jugadores[0] = new Jugador('x');
        this.jugadores[1] = new Jugador('o');
        this.turno = new Turno();
    }

    
    public jugar(): void {

        do {
            this.tablero.mostrar();
            this.jugadores[this.turno.toca()].ponerFicha(this.tablero);
            this.turno.cambiar();
        } while(!this.tablero.hayTriqui())

        this.jugadores[this.turno.noToca()].cantarVictoria();
        
    }
}