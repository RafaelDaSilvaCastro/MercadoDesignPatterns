export default class Component{
  protected nome : string;
  protected preco : number;

  constructor(xnome : string, xpreco : number){
    this.nome = xnome;
    this.preco = xpreco;
  }

  getNome() :string {
    return this.nome 
  }

  getPreco() : number{
    return this.preco
  }

  mudarNome(novoNome : string) : string{
    const nomeAntigo = this.nome;
    this.nome = novoNome;
    return `${nomeAntigo} alterado para: ${novoNome}`
  }

  exibir() : void{
    throw new Error('Função não implementada!')
  }
}