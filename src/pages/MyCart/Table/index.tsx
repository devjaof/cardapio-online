import { useCart } from "../../../hooks/useCart"
import { TableDesktop } from "./Desktop";

export function Table() {
  const { cart } = useCart();

  if (!cart.length) {
    return <h1>zero itens aqui fióte. pede aí</h1>
  }

  return <TableDesktop/>
}