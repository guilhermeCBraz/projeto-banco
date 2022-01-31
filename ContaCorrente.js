import { Cliente } from "./Cliente.js";

export class ContaCorrente{
  static numeroContas = 0;
  #cliente;
  #saldo;

  set cliente(novoValor) {
    if(novoValor instanceof Cliente)
    {
      this.#cliente = novoValor;
    }
  }

  get cliente() {
    return this.#cliente;
  }

  get saldo() {
    return this.#saldo;
  }


  constructor(cliente, agencia) {
    this.cliente = cliente;
    this.agencia = agencia;
    this.#saldo = 0;
    ContaCorrente.numeroContas++;
  }


  sacar(valor){
      if(this.#saldo >= valor){
          this.#saldo -= valor;
          return valor;
      }
  }

  depositar(valor){
      if(valor <= 0)
      {
          return;
      } 
      this.#saldo += valor;   
  }

	transferir(valor, conta){
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}