// Importa a classe Cliente de outro arquivo, para que você possa criar instâncias de clientes.
import { Cliente } from "./Cliente.js";

// Importa a classe ContaCorrente de outro arquivo, para criar instâncias de contas correntes.
import { ContaCorrente } from "./ContaCorrente.js";

// Cria duas instâncias da classe Cliente, representando dois clientes com nome e CPF.
const cliente1 = new Cliente("Lucas", 11122233309);
const cliente2 = new Cliente("Maria", 88822233321);

// Inicializa uma variável para contar o número total de contas, mas não está sendo usada no código.
let numeroDeContas = 0;

// Cria uma instância de ContaCorrente para o cliente1, passando a agência e o cliente como parâmetros.
const ContaCorrenteLucas = new ContaCorrente(1001, cliente1);

// Realiza um depósito de 500 reais na conta do cliente1.
ContaCorrenteLucas.depositar(500);

// Cria uma segunda instância de ContaCorrente para o cliente2, mas ainda sem depósito ou transferência.
const conta2 = new ContaCorrente(102, cliente2);

// Define um valor de 200 reais para transferir.
let valor = 200;

// Realiza a transferência de 200 reais da conta do cliente1 para a conta do cliente2.
ContaCorrenteLucas.transferir(valor, conta2);

// Exibe os detalhes dos clientes no console (informações sobre nome e CPF).
console.log(cliente1, cliente2);
