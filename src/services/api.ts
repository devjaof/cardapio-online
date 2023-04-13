import axios from 'axios';
import { ItemData } from '../interfaces/ItemData';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<ItemData[]>('/burgers');
export const getPizzas = () => api.get<ItemData[]>('/pizzas');
export const getDrinks = () => api.get<ItemData[]>('/drinks');

export default api;
