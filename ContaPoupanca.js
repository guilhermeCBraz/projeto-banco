export class ContaPoupanca {
  #saldo;
  #cliente;
  #agencia;

  constructor(saldoInicial, cliente, agencia) {
    this.#saldo = saldoInicial;
    this.#cliente = cliente;
    this.#agencia = agencia;
  }

  get saldo(){
    return this.#saldo;
  }

}