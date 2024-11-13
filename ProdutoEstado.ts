import Produto from "./Produto"

export default abstract class ProdutoEstado{
  
  protected produto? : Produto

  abstract vender(x : number) : void
  abstract reabastecer(x : number) : void
}