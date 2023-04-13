import { useContext } from "react";
import { itemContext } from "../contexts/ItemContext";

export function useItem() {
  return useContext(itemContext);
}