export class Conta {
  constructor(saldoInicial, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata.")
    }

    this._saldo = saldoInicial;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  withdraw(valor) {
    throw new Error('O método Withdraw da conta é abstrato')
  }

  _withdraw(valor, taxa) {
    const valorSacado = taxa * valor;

    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  deposit(valor) {
    this._saldo += valor;
  }

  transfer(valor, conta) {
    const valorSacado = this.withdraw(valor);
    conta.deposit(valorSacado);
  }
}
