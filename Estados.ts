import Produto from "./Produto";
import ProdutoEstado from "./ProdutoEstado";

export class Disponivel extends ProdutoEstado{
  constructor(p : Produto){
    super()
    this.produto = p;
  }

  vender(x : number): void {
    const estoqueAtual = this.produto ? this.produto.getEstoque() : 0;
    this.produto?.setEstoque(estoqueAtual - x)
    console.log(`Estoque atual ${this.produto?.getEstoque()}`)
    const novoEstoque = this.produto ? this.produto.getEstoque() : 0;
    if(novoEstoque  <= 0){
      this.produto?.setEstado(new AguardandoReposicao(this.produto))

    }
  }

  reabastecer(x : number): void {
    console.log(`Reabastecido ${x} quantidade(s)`)
    const calcEstoque = (this.produto ? this.produto.getEstoque() : 0) + x;
    this.produto?.setEstoque(calcEstoque)
  }
  
}

export class AguardandoReposicao extends ProdutoEstado{
  constructor(p : Produto){
    super()
    this.produto = p;
  }  
  vender(x: number): void {
      console.log('Esse produto está aguardando reposicao')
  }

  reabastecer(x: number): void {
    console.log(`Reabastecido ${x} quantidade(s)`)
    console.log(`Liberado para venda!`) 
    const calcEstoque = (this.produto ? this.produto.getEstoque() : 0) + x;
    this.produto?.setEstoque(calcEstoque)    
    this.produto?.setEstado(new Disponivel(this.produto))
  }

}