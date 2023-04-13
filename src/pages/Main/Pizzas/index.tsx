import { useEffect, useState } from 'react';

import { Head } from '../../../components/Head'
import { Product } from '../../../components/Product'
import { PageTitle } from '../../../components/PageTitle'

import { getPizzas } from '../../../services/api'
import { ItemData } from '../../../interfaces/ItemData';

export default function Pizzas() {
  const [pizzas, setPizzas] = useState<ItemData[]>([]);

  useEffect(() => {
    (async () => {
      const pizzaRequest = await getPizzas();

      setPizzas(pizzaRequest.data);
    })()
  }, [])

  return (
    <>
      <Head title='Pizzas' />
      <PageTitle>Pizzas</PageTitle>
      <Product items={pizzas}></Product>
    </>
  )
}
