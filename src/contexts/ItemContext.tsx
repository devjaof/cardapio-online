import { useState, useEffect, ReactNode, createContext } from "react";
import { ItemData } from "../interfaces/ItemData";
import { getBurgers, getPizzas, getDrinks } from "../services/api";

interface ItemContextProps {
  burgers: ItemData[];
  pizzas: ItemData[];
  drinks: ItemData[];
}

interface ItemProviderProps {
  children: ReactNode
}

export const itemContext = createContext({} as ItemContextProps);

export function ItemProvider({ children }: ItemProviderProps) {
  const [burgers, setBurgers] = useState<ItemData[]>([]);
  const [pizzas, setPizzas] = useState<ItemData[]>([]);
  const [drinks, setDrinks] = useState<ItemData[]>([]);
  
  useEffect(() => {
    (async () => {
      try {
        const burgerReq = await getBurgers();
        const pizzaReq = await getPizzas();
        const drinkReq = await getDrinks();
  
        const requests = [burgerReq, pizzaReq, drinkReq];
  
        const [
          { data: burgerRes },
          { data: pizzaRes },
          { data: drinkRes },
        ] = await Promise.all(requests);
  
        setBurgers(burgerRes);
        setPizzas(pizzaRes);
        setDrinks(drinkRes);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [])

  return (
    <itemContext.Provider value={{ burgers, pizzas, drinks }}>
      { children }
    </itemContext.Provider>
  )
}


