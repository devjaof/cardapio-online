import { Head } from "../../components/Head";
import { OrderHeader } from "../../components/OrderHeader";
import { Table } from "./Table";
import { Container } from "./styles";

export default function Main() {
  return (
    <Container>
      <Head title="Carrinho" description="Seu carrinho de pedidos :)"/>
      <OrderHeader/>
      <Table />
    </Container>
  )
}