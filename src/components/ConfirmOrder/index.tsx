import { formatCurrency } from "../../helpers/formatCurrency";
import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";

export function ConfirmOrder() {
  const { cart } = useCart();

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0);

  return <Container>
    <button type="button">
      Finalizar Pedido
    </button>
    <span>
      Total <strong>{formatCurrency(totalAmount)}</strong>
    </span>
  </Container>
}