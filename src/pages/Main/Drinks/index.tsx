import { useEffect, useState } from 'react';

import { Head } from "../../../components/Head";
import { PageTitle } from "../../../components/PageTitle";
import { Product } from "../../../components/Product";

import { getDrinks } from '../../../services/api';
import { ItemData } from '../../../interfaces/ItemData';

export default function Drinks() {
  const [drinks, setDrinks] = useState<ItemData[]>([]);

  useEffect(() => {
    (async () => {
      const drinkRequest = await getDrinks();

      setDrinks(drinkRequest.data);
    })()
  }, [])

  return (
    <>
      <Head title='Bebidas' />
      <PageTitle>Bebidas</PageTitle>

      <Product items={drinks}></Product>
    </>
  )
}