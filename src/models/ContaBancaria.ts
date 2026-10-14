import {ContaProps} from "../interfaces/ContaProps.js"

export abstract class ContaBancaria<T extends ContaProps = ContaProps>{
    constructor(protected props: T){}

    get getNumero(): string { return this.props.numero}
    get getAgencia(): string { return this.props.agencia}
    get getTitular(): string { return this.props.titular}
    get getSaldo(): number { return this.props.saldo}

    set setNumero(novoNumero: string) {
        if (novoNumero.trim().length === 0) {
            console.log("\n ERRO: O Numero não pode ser vazio!");
            return;
        }
        this.props.numero = novoNumero;
    }

    set setAgencia(novoAgencia: string) {
        if (novoAgencia.trim().length === 0) {
            console.log("\n ERRO: O Agencia não pode ser vazio!");
            return;
        }
        this.props.agencia = novoAgencia;
    }

    set setTitular(novoTitular: string) {
        if (novoTitular.trim().length === 0) {
            console.log("\n ERRO: O Titular não pode ser vazio!");
            return;
        }
        this.props.titular = novoTitular;
    }

    set setSaldo(novoSaldo: string) {
        if (novoSaldo.trim().length === 0) {
            console.log("\n ERRO: O Saldo não pode ser vazio!");
            return;
        }
        this.props.saldo = novoSaldo;
    }

    sacar(valor:number){
        this.props.saldo -= valor;
    }

    depositar(valor:number){
        this.props.saldo += valor;
    }

    abstract  exibirExtrato(): void;  

}