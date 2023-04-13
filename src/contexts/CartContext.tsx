import { toast } from "react-toastify";
import { ItemData } from "../interfaces/ItemData";
import { ReactNode, useState, createContext } from "react";
import { itemEmoji } from "../helpers/itemEmoji";

interface Item extends ItemData {
  quantity: number;
  subtotal: number;
}

interface CartContextProps {
  cart: Item[];

  addItem: (item: ItemData) => void;
  removeItem: (item: Item) => void;
  incrementItem: (item: Item) => void;
  decrementItem: (item: Item) => void;
  updateItemQuantity: (item: Item, newQuantity: number) => void;
  confirmOrder: () => void;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Item[]>([]);

  function addItem(item: ItemData): void {
    const itemFound = cart.find((i) => i.type === item.type && i.id === item.id);

    if (itemFound) {
      const newCart = cart.map((mapItem) => {
        if (mapItem.id === item.id) {
          const quantity = mapItem.quantity + 1;
          const subtotal = mapItem.price * quantity;

          return { ...mapItem, quantity, subtotal};
        }
        return mapItem;
      })

      setCart(newCart);
      toast.success(`Outro(a) ${item.type} foi adicionado(a) ao carrinho ${itemEmoji(item.type)}`);
      return;
    }

    const newItem = {...item, quantity: 1, subtotal: item.price};
    const newCart = [...cart, newItem];

    toast.success(`Um(a) ${item.type} foi adicionado(a) ao carrinho ${itemEmoji(item.type)}`);
    setCart(newCart);
  }

  function updateItemQuantity(item: Item, newQuantity: number): void {
    if (newQuantity <= 0) return;

    const itemFound = cart.find((i) => i.type === item.type && i.id === item.id);
    if (!itemFound) return;

    const newCart = cart.map((mapItem) => {
      if (mapItem.id === itemFound.id && mapItem.type === itemFound.type) {
        const quantity = newQuantity;
        const subtotal = mapItem.price * newQuantity;

        return { ...mapItem, quantity, subtotal};
      }
      return mapItem;
    })

    setCart(newCart);
  }

  function removeItem(item: Item): void {
    const newCart = cart.filter((i) => !(i.id === item.id && i.type === item.type));

    setCart(newCart);
  }

  function incrementItem(item: Item): void {
    updateItemQuantity(item, item.quantity + 1);
  }

  function decrementItem(item: Item): void {
    updateItemQuantity(item, item.quantity - 1);
  }

  function confirmOrder() {
    return;
  }

  return <CartContext.Provider value={{ 
    cart, 
    addItem, 
    removeItem,
    updateItemQuantity,
    incrementItem,
    decrementItem,
    confirmOrder
  }}>
    {children}
  </CartContext.Provider>

}