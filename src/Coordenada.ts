import readline from 'readline-sync'

export class Coordenada {

    private fila: number = 0;
    private columna: number = 0;
    

    setCoordenada (fila: number, columna: number) {
        this.fila = fila;
        this.columna = columna;
    }

    getFila() {
        return this.fila;
    }

    getColumna() {
        return this.columna;
    }

    pedir() {
        let valida: boolean = false;
        do {
            console.log('Introducir coordenadas');
            let fila = readline.question('Fila: ')
            this.fila = parseInt(fila);
            let columna = readline.question('Columna: ') ;
            this.columna = parseInt(columna);
            valida = this.valida();
            if (!valida) console.log('Error, valor fuera de rango!')
        } while (!valida)
    }

    valida(): boolean {
        return (this.fila >= 1 && this.fila <= 3) && (this.columna >= 1 && this.columna <= 3)
    }

    igual(coordenada: Coordenada): boolean {
        return this.fila === coordenada.getFila() && this.columna === coordenada.getColumna();
    }

}