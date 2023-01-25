import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    static AllAccounts = 0
    
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia)
        ContaPoupanca.AllAccounts += 1
    }

    withdraw(valor){
        const taxa = 1.05
        return this._withdraw(valor, taxa)
    }
}