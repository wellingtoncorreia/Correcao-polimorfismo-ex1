import { ContaCorrete } from "./src/models/ContaCorrete.js";
import { ContaPoupanca } from "./src/models/ContaPoupanca.js";
import { ContaBancaria } from "./src/models/ContaBancaria.js";

console.log("=== SISTEMA DA LOJA ===");

const ContaCorrete = new ContaCorrete({
    numero: "111.222.333-44",
    titular: "Carlos Silva",
    agencia: "11999999999",
    saldo: 10000,
    limite: 1000
});

const ContaPoupanca = new ContaPoupanca({
    numero: "111.222.333-44",
    titular: "Carlos Silva",
    agencia: "11999999999",
    saldo: 10000,
    taxaAniversario: 10
});

ContaCorrente.props.sacar(200);
ContaCorrente.props.depositar(3000);

ContaPoupanca.props.sacar(100);
ContaPoupanca.props.depositar(2000);

console.log("\n--- DEMONSTRAÇÃO DE POLIMORFISMO ---");

// Array tipado com a Classe Abstrata recebe as subclasses
const bancoDeDados: ContaBancaria[] = [ContaCorrente, ContaPoupanca];

// O polimorfismo em ação: O mesmo método se comporta diferente para cada objeto
for (const conta of bancoDeDados) {
    conta.exibirExtrato();
}