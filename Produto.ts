import Component from "./Component";

export default class Produto extends Component{

  exibir(): void {
      console.log(this)
  }

  mudarPreco(novoPreco : number) : void{
    const precoAntigo = this.preco;
    this.preco = novoPreco;
    console.log(`O preço do produto ${this.getNome} mudou de R$ ${this.preco} para R$ ${this.getPreco}`)
  }
}