import './App.css'
import MainPage from './containers/MainPage/MainPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import * as React from 'react';
import DishesPage from './containers/DishesPage/DishesPage.tsx';
import OrderForm from './components/OrderForm/OrderForm.tsx';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/admin/dishes" element={<DishesPage/>} />
        <Route path="/admin/dishes/add-new-dish" element={<OrderForm/>} />
        <Route path="*" element={<p className="text-center mt-5">Page is not found :(</p>} />
      </Routes>
    </>
  )
};

export default App
