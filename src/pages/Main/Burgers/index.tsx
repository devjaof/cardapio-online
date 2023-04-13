import { useEffect, useState } from 'react'

import { Head } from '../../../components/Head'
import { Product } from '../../../components/Product'
import { PageTitle } from '../../../components/PageTitle'

import { getBurgers } from '../../../services/api'
import { ItemData } from '../../../interfaces/ItemData'

export default function Burgers() {
  const [burgers, setBurgers] = useState<ItemData[]>([]);

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurgers();

      setBurgers(burgerRequest.data);
    })();
  }, [])

  return (
    <>
      <Head title='Hambúrgueres' />
      <PageTitle>Hambúrgueres</PageTitle>
      <Product items={burgers}></Product>
    </>
  )
}
