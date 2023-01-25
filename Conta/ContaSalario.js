import { Conta } from "./Conta.js"

export class ContaSalario extends Conta {
    static AllAccounts = 0

    constructor(cliente) {
        super(0, cliente, 3000)
        ContaSalario.AllAccounts += 1;
    }

    withdraw(valor){
        const taxa = 1.05 
        return this._withdraw(valor, taxa)
    }
}