export default class PortaModel {
    private numero: number;
    private temPresente: boolean;
    private selecionada: boolean;
    private aberta: boolean;

    constructor(numero: number, temPresente = false, selecionada = false, aberta = false) {
        this.numero = numero;
        this.temPresente = temPresente;
        this.selecionada = selecionada;
        this.aberta = aberta;
    }

    get Numero(): number {
        return this.numero;
    }

    get TemPresente(): boolean {
        return this.temPresente;
    }

    get Selecionada(): boolean {
        return this.selecionada;
    }

    get Aberta(): boolean {
        return this.aberta;
    }

    get Fechada(): boolean {
        return !this.aberta;
    }

    desselecionar(){
        const selecionada = false;
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
    }

    alternarSelecao(){
        const selecionada = !this.selecionada;
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
    }
    
    abrir(){
        const aberta = true;
        return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta);
    }


}