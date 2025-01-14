// Importa a classe Cliente de outro arquivo, para criar a relação entre ContaCorrente e Cliente.
import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    // Atributo estático para rastrear o número total de contas correntes criadas.
    static numeroDeContas = 0;

    // Atributos públicos de instância.
    agencia; // Define a agência da conta.
    _cliente; // Cliente associado à conta (privado por convenção usando _).

    // Saldo inicializado como privado (por convenção) e com valor inicial de 0.
    _saldo = 0;

    // Método setter para atribuir um cliente à conta.
    // Verifica se o valor atribuído é uma instância válida da classe Cliente antes de atribuir.
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    // Método getter para obter o cliente associado à conta.
    get cliente() {
        return this._cliente;
    }

    // Método getter para acessar o saldo da conta.
    get saldo() {
        return this._saldo;
    }
    
    // Construtor da classe. Recebe a agência e o cliente como parâmetros.
    // Incrementa o número total de contas a cada nova instância criada.
    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; // Atualiza o contador estático.
    }

    // Método para realizar saques. Reduz o saldo caso o valor solicitado seja menor ou igual ao saldo atual.
    // Retorna o valor sacado, caso a operação seja bem-sucedida.
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor; // Retorna o valor sacado.
        }
    }

    // Método para realizar depósitos. Apenas valores maiores que 0 podem ser depositados.
    depositar(valor) {
        if (valor <= 0) {
            return; // Impede depósitos inválidos (ex: valores negativos ou zero).
        }
        this._saldo += valor; // Adiciona o valor ao saldo.
    }

    // Método para transferir dinheiro de uma conta para outra.
    // Saca o valor da conta atual e o deposita na conta de destino.
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor); // Realiza o saque.
        conta.depositar(valorSacado); // Deposita o valor sacado na conta de destino.
    }
}
