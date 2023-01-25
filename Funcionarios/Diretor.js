import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor(cpf, nome, salario){
        super(nome, salario, cpf)
        this._bonificacao = 2
    }
}