export class Cliente {
  constructor(cpf, nome, senha) {
    this._cpf = cpf;
    this._nome = nome;
    this._senha = senha
  }

  autenticar(){
    return true
  }

  get senha() {
    return this._senha;
  }
}
