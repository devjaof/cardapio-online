import { faMinus, faMinusCircle, faPlus, faPlusCircle, faTrash } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../../../../helpers/formatCurrency";
import { useCart } from "../../../../hooks/useCart";
import { Container } from "./styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TableDesktop() {
  const { cart, removeItem, incrementItem, decrementItem } = useCart();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Itens</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={`${item.id}-${item.type}`}>
                <td>
                  <img src={item.image} alt='Imagem do produto' />
                </td>
                <td>
                  <h4>{item.name}</h4>
                  <span>{formatCurrency(item.price)}</span>
                </td>
                <td>
                  <div>
                    <button type="button" onClick={() => decrementItem(item)}>
                      <FontAwesomeIcon icon={faMinusCircle} size="xl" />
                    </button>

                    <span>{`${item.quantity}`.padStart(2, '0')}</span>

                    <button type="button" onClick={() => incrementItem(item)}>
                      <FontAwesomeIcon icon={faPlusCircle} size="xl" />
                    </button>
                  </div>
                </td>
                <td>
                  <h5>{formatCurrency(item.subtotal)}</h5>
                </td>
                <td>
                  <button type="button" onClick={() => removeItem(item)}>
                    <FontAwesomeIcon icon={faTrash} size="xl" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  )
}