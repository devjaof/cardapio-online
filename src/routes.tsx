import { Routes, Route } from 'react-router-dom';

import MainPage from './pages/Main';
import BurgersPage from './pages/Main/Burgers';
import PizzasPage from './pages/Main/Pizzas';
import DrinksPage from './pages/Main/Drinks';

import CartPage from './pages/MyCart';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        <Route path='/burgers' element={<BurgersPage />}/>
        <Route path='/pizzas' element={<PizzasPage />}/>
        <Route path='/drinks' element={<DrinksPage />}/>
      </Route>
      <Route path='/cart' element={<CartPage />}>
      </Route>
    </Routes>
  )
}
