import { Head } from "../../../components/Head";
import { PageTitle } from "../../../components/PageTitle";
import { Product } from "../../../components/Product";
import { useItem } from '../../../hooks/useItem';

export default function Drinks() {
  const { drinks } = useItem();
  
  return (
    <>
      <Head title='Bebidas' />
      <PageTitle>Bebidas</PageTitle>

      <Product items={drinks}></Product>
    </>
  )
}