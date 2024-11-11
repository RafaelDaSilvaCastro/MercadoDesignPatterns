import Component from "./Component";

export default class Categoria extends Component{
  private componentes : Component[];

  constructor(xnome : string, xpreco : number){
    super(xnome, xpreco)
    this.componentes = []
  }

  add(x : Component) : void{
    this.componentes.push(x)
    this.preco = this.getPreco() + x.getPreco()
  }

  remove(x : Component) : void{
    const i = this.componentes.findIndex((item) => item.getNome() === x.getNome());
    if (i >= 0) {
      this.componentes.splice(i, 1);
    }
    this.preco = 0;
    for(x of this.componentes){
      this.preco += x.getPreco()
    }
  }

  exibir(): void {
      console.log(this)
  }
}