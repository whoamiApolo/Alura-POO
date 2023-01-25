import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static AllAccounts = 0
    
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
        ContaCorrente.AllAccounts += 1;
    }

    withdraw(valor){
        const taxa = 1.1
        return this._withdraw(valor, taxa)
    }
}