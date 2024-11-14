import Observer from "./Observer";
import Produto from "./Produto";

export default class VerificarPromocaoObserver implements Observer {
  private produto: Produto;
  private precoOriginal: number;

  constructor(produto: Produto, precoOriginal: number){
    this.produto = produto;
    this.precoOriginal = precoOriginal;
  }

  atualizar(): void {
    if (this.produto.getValorPromocao() < this.precoOriginal) {
      console.log(`O produto ${this.produto.getNome()} esta em promoção. Preço promocional: ${this.produto.getValorPromocao()}`)
    } else {
      console.log(`O produto ${this.produto.getNome()} não esta em promoção.`)
    }
  }
}