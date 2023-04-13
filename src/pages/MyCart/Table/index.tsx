import { useEffect, useState } from "react";
import { useCart } from "../../../hooks/useCart"
import { TableDesktop } from "./Desktop";
import { TableMobile } from "./Mobile";
import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Table() {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth);
  const { cart } = useCart();

  useEffect(() => {
    function updateConditionalTable() {
      const currentWidth = document.documentElement.clientWidth;

      setWindowWidth(currentWidth);
    }
    window.addEventListener('resize', updateConditionalTable);

    // unmount do eventListener caso não esteja nesta tela
    return () => {
      window.removeEventListener('resize', updateConditionalTable);
    }
  }, [])

  if (!cart.length) {
    return (
      <Container>
        <h1>Nenhum pedido ainda por aqui...</h1>
        <Link to='/'>Peça já</Link>
      </Container>
    )
  }

  return windowWidth > 768 ? <TableDesktop/> : <TableMobile />
}