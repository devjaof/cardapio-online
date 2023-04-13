import { Link } from 'react-router-dom';
import logoExample from '../../assets/logoExample.png'
import { Container, Logo } from './styles';
import { useCart } from '../../hooks/useCart';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function OrderHeader() {
  const { cart } = useCart();
  
  return <Container>
    <Link to="/">
      <Logo src={logoExample} alt='Logotipo da empresa' />
    </Link>

    <div>
      <div>
        <h3>Meus pedidos</h3>
        <span>
          <strong>
            {`${cart.length}`.padStart(2, '0')} itens
          </strong>
        </span>
      </div>
      <FontAwesomeIcon icon={faCartShopping} size="2xl"/>
    </div>
  </Container>
}