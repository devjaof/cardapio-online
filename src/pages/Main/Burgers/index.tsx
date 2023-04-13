import { Head } from '../../../components/Head'
import { Product } from '../../../components/Product'
import { PageTitle } from '../../../components/PageTitle'
import { useItem } from '../../../hooks/useItem';

export default function Burgers() {
  const { burgers } = useItem();

  return (
    <>
      <Head title='Hambúrgueres' />
      <PageTitle>Hambúrgueres</PageTitle>
      <Product items={burgers}></Product>
    </>
  )
}
