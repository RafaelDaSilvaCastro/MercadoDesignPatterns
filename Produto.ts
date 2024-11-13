import Component from "./Component";

export default class Produto extends Component{
  private estoque : number;

  constructor(xnome : string, xpreco : number, xestoque : number){
    super(xnome, xpreco);
    this.estoque = xestoque;
  }

  getEstoque():number{
    return this.estoque
  }

  setEstoque(est : number) : void{
    this.estoque = est;
  }

  exibir(): void {
      console.log(this)
  }

  mudarPreco(novoPreco : number) : void{
    const precoAntigo = this.preco;
    this.preco = novoPreco;
    console.log(`O preço do produto ${this.getNome} mudou de R$ ${this.preco} para R$ ${this.getPreco}`)
  }
}