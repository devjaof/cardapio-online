import { Head } from '../../../components/Head';
import { PageTitle } from '../../../components/PageTitle';
import { Product } from '../../../components/Product';
import { useItem } from '../../../hooks/useItem';

export default function Pizzas() {
const { pizzas } = useItem();

  return (
    <>
      <Head title='Pizzas' />
      <PageTitle>Pizzas</PageTitle>
      <Product items={pizzas}></Product>
    </>
  )
}
