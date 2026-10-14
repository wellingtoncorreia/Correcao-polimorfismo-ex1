import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "../interfaces/ContaProps.js";

export class ContaPoupanca extends ContaBancaria<ContaPoupancaProps>{
    constructor(props:ContaPoupancaProps){
        super(props);
    }

    get getTaxaAniversario(): number { return this.props.taxaAniversario}

    set setTaxaAniversario(novoTaxaAniversario: string) {
        if (novoTaxaAniversario.trim().length === 0) {
            console.log("\n ERRO: O TaxaAniversario não pode ser vazio!");
            return;
        }
        this.props.taxaAniversario = novoTaxaAniversario;
    }

    renderJuros(){
        this.props.saldo += (this.props.saldo * 0.15);
    }

     public exibirExtrato(): void {
        console.log(
            `
            [Conta Poupanca] 
              Numero da conta: ${this.getNumero} 
            | Agencia: ${this.getAgencia} 
            | Titular: ${this.getTitular}
            | Saldo: ${this.getSaldo}
            | Taxa Aniversario: ${this.getTaxaAniversario}
            `
        );
    }
}