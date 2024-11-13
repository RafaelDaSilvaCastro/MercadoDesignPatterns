import Component from "./Component";
import { Disponivel, AguardandoReposicao } from "./Estados"
import ProdutoEstado from "./ProdutoEstado";

export default class Produto extends Component{
  private estoque : number;
  private estado : ProdutoEstado;

  constructor(xnome : string, xpreco : number, xestoque : number){
    super(xnome, xpreco);
    this.estoque = xestoque;
    this.estado = new Disponivel(this);
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

  setEstado(est : ProdutoEstado) : void{
    this.estado = est;
  }



  vender(x : number){
     this.estado.vender(x);
  }

  reabastecer(x : number) : void{
    this.estado.reabastecer(x);
    console.log('___________________________')
    console.log(`Novo saldo do item: ${this.getEstoque()}`)
    console.log('___________________________')
  }
}