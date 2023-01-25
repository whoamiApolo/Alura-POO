export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaAutenticacao.isAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);
    }

    return false;
  }

  static isAutenticavel(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
