import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPouponca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";

import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const clienteZero = new Cliente(11122233344, "Pantera Negra", 123456789);
const clienteZeroUm = new Cliente(55566677788, "Super Choque", 987654321);

const contaCorrente = new ContaCorrente(clienteZeroUm, 1001, 0);
const contaPoupanca = new ContaPoupanca(0, clienteZero, 2001);
const contaSalario = new ContaSalario(clienteZeroUm);

console.log(clienteZero);
console.log(contaCorrente);
console.log(contaPoupanca);
console.log(contaSalario);

contaCorrente.deposit(9999);
contaPoupanca.deposit(7777);
contaSalario.deposit(3333);

contaCorrente.transfer(1111, contaSalario);
contaPoupanca.withdraw(777);

const totalDeContasAtivas =
  ContaCorrente.AllAccounts +
  ContaPoupanca.AllAccounts +
  ContaSalario.AllAccounts;

console.log(`Total de contas em utilização: ${totalDeContasAtivas}.`);

const diretor = new Diretor(12345678901, "Spider Man", 100000);
diretor.cadastrarSenha(12345);
const gerente = new Gerente(13579975311, "Batman", 250000);
gerente.cadastrarSenha(54321);

const diretorLogou = SistemaAutenticacao.login(diretor, 12345);
const gerenteLogou = SistemaAutenticacao.login(gerente, 54321);
const clienteLogado = SistemaAutenticacao.login(clienteZero, 123);

console.log(
  `Todos estão logados e foram autenticados: ${gerenteLogou}, ${diretorLogou}, ${clienteLogado}`
);
