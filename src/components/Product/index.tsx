import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../../helpers/formatCurrency";
import { ProductSkeleton } from "./ProductSkeleton";
import { ItemData } from "../../interfaces/ItemData";
import { useCart } from "../../hooks/useCart";

interface ProductProps {
  items: ItemData[];
}

export function Product({ items }:ProductProps) {
  const { addItem, cart } = useCart();
  
  return (
    <Container>
      {!items.length  
        ? [1, 2, 3, 4].map((n) => <ProductSkeleton key={n}/>) // utilizar mui
        : items.map(item => {
            const isItemOnCart = cart.find(i => i.id === item.id && i.type === item.type);

            return (
              <div key={item.id} className="item">
                {/* se o item não está no carrinho, nao exibe o span */}
                {isItemOnCart && <span>{isItemOnCart.quantity}</span>}

                <h2>{item.name}</h2>
                <img src={item.image} alt={item.name} />
                <p>{item.description}</p>
                <div>
                  <strong>{formatCurrency(item.price)}</strong>
                  <button type="button" onClick={() => addItem(item)}>
                    <FontAwesomeIcon icon={faPlus} size="2xl"/>
                  </button>
                </div>
              </div>
            )
          }
        )
      }
    </Container>
  );
}