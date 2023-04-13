import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatCurrency } from "../../../../helpers/formatCurrency";
import { useCart } from "../../../../hooks/useCart";
import { Container } from "./styles";
import { faMinusCircle, faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ConfirmOrder } from "../../../../components/ConfirmOrder";

export function TableMobile() {
  const {cart, removeItem, incrementItem, decrementItem} = useCart();

  return <Container>
    {cart.map((item) => (
      <div key={`${item.id}-${item.type}`} className="order-item">
        <div>
          <button type="button" onClick={() => removeItem(item)}>
            <FontAwesomeIcon icon={faTrash} size="xl" />
          </button>
          <img src={item.image} alt="Imagem do produto" />
        </div>
        <div>
          <div>
            <div>
              <h4>{item.name}</h4>
              <span>{formatCurrency(item.price)}</span>
            </div>
            <div>
              <button type="button" onClick={() => decrementItem(item)}>
                <FontAwesomeIcon icon={faMinusCircle} size="xl" />
              </button>

              <span>{`${item.quantity}`.padStart(2, '0')}</span>

              <button type="button" onClick={() => incrementItem(item)}>
                <FontAwesomeIcon icon={faPlusCircle} size="xl" />
              </button>
            </div>
          </div>
          <h5>
            <span>Subtotal</span>
            <strong>{formatCurrency(item.subtotal)}</strong>
          </h5>
        </div>
      </div>
    ))}
    <ConfirmOrder />
  </Container>
}