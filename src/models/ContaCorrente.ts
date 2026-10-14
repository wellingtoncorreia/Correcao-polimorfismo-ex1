import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "../interfaces/ContaProps.js";


export class ContaCorrente extends ContaBancaria<ContaCorrenteProps>{
    constructor(props:ContaCorrenteProps){
        super(props);
    }

    get getLimite(): number { return this.props.limite}

    set setLimite(novoLimite: number) {
        if (novoLimite == 0) {
            console.log("\n ERRO: O Limite não pode ser vazio!");
            return;
        }
        this.props.limite = novoLimite;
    }

     public exibirExtrato(): void {
        console.log(
            `
            [Conta Corrente] 
              Numero da conta: ${this.getNumero} 
            | Agencia: ${this.getAgencia} 
            | Titular: ${this.getTitular}
            | Saldo: ${this.getSaldo}
            | Limite: ${this.getLimite}
            `
        );
    }
}