// Define a classe Cliente.
export class Cliente {
    
    // Atributos públicos da classe Cliente: nome e _cpf.
    nome;  // Nome do cliente.
    _cpf;  // CPF do cliente (privado por convenção, com o uso de _).

    // Método getter para acessar o CPF do cliente.
    // Garante que o CPF será acessado de maneira controlada.
    get cpf() {
        return this._cpf;
    }

    // Construtor da classe Cliente.
    // Inicializa a instância com nome e CPF.
    constructor(nome, cpf) {
        this.nome = nome;  // Atribui o nome passado como argumento.
        this._cpf = cpf;   // Atribui o CPF passado como argumento.
    }
}
