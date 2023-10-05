import { embaralhar } from "@/functions/arrays";

export default class RespostaModel{
    #valor: string;
    #certa: boolean;
    #revelada: boolean;

    constructor(valor: string, certa: boolean, revelada: boolean = false){
        this.#valor = valor;
        this.#certa = certa;
        this.#revelada = revelada;
    }

    static certa(valor: string): RespostaModel{
        return new RespostaModel(valor, true);
    }

    static errada(valor: string): RespostaModel{
        return new RespostaModel(valor, false);
    }

    get valor(): string{
        return this.#valor;
    }

    get certa(): boolean{
        return this.#certa;
    }

    get revelada(): boolean{
        return this.#revelada;
    }

    revelar(): RespostaModel{
        return new RespostaModel(this.#valor, this.#certa, true);
    }

    

    toObject(){
        return {
            valor: this.#valor,
            certa: this.#certa,
            revelada: this.#revelada,
        }
    }
}