import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container, Nav, List, Item, Button } from "./styles"
import { faBars, faBurger, faPizzaSlice, faWineBottle } from "@fortawesome/free-solid-svg-icons"

import { NavLink } from "react-router-dom";
import { useState } from 'react';

export function Sidebar() {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Container isOpen={ isOpen }>
      <Button type="button" onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faBars} size="2xl"/>
      </Button>
      <Nav>
        <List>
          <Item>
            {/*  TODO: BOUNCE FEAT ON HOVER */}
            <NavLink to="burgers" title="Hambúrgueres">
              <FontAwesomeIcon icon={faBurger} size="2xl" />
              <span>Hambúrgueres</span>
            </NavLink>
          </Item>
          <Item>
            <NavLink to="pizzas" title="Pizzas">
              <FontAwesomeIcon icon={faPizzaSlice} size="2xl" />
              <span>Pizzas</span>
            </NavLink>
          </Item>
          <Item>
            <NavLink to="drinks" title="Bebidas">
              <FontAwesomeIcon icon={faWineBottle} size="2xl" />
              <span>Bebidas</span>
            </NavLink>
          </Item>
        </List>
      </Nav>
      <footer>
        {isOpen ? "redes sociais" : ""}
      </footer>
    </Container>
  )
}