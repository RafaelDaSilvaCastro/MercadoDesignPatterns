import Produto from './Produto'
import Categoria from './Categoria'
import { Disponivel, AguardandoReposicao } from "./Estados"

const cat1 = new Categoria('Higiene', 0)
const cat2 = new Categoria('Banho', 0)
const cat3 = new Categoria('Perfumaria', 0)
const sabonete = new Produto('Sabonete', 7 , 10)
const shampoo = new Produto('shampoo', 40, 0)
const toalha = new Produto('Toalha', 75, 40)

cat1.add(sabonete)
cat1.add(shampoo)

shampoo.mudarNome('Shampoo + Comdicionador')
cat1.add(cat2)
cat1.add(cat3)
cat2.add(toalha)
cat1.remove(sabonete)


sabonete.vender(21)
sabonete.vender(3)
