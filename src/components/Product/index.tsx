import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "./styles";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "../../helpers/formatCurrency";
import { ProductSkeleton } from "./ProductSkeleton";
import { ItemData } from "../../interfaces/ItemData";

interface ProductProps {
  items: ItemData[];
}

export function Product({ items }:ProductProps) {
  return (
    <Container>
      {!items.length  
        ? [1, 2, 3, 4].map((n) => <ProductSkeleton key={n}/>) // utilizar mui
        : items.map(item => (
            <div key={item.id} className="item">
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />
              <p>{item.description}</p>
              <div>
                <strong>{formatCurrency(item.price)}</strong>
                <button type="button">
                  <FontAwesomeIcon icon={faPlus} size="2xl"/>
                </button>
              </div>
            </div>
          ))
      }
    </Container>
  );
}