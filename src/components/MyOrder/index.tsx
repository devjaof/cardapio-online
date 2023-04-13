import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function MyOrder() {
  const { cart } = useCart();
  
  return <Container to={'cart'}>
    <FontAwesomeIcon icon={faCartShopping} size="2xl"/>
    {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
  </Container>
}