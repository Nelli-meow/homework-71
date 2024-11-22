import './App.css'
import MainPage from './containers/MainPage/MainPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import * as React from 'react';
import DishesPage from './containers/DishesPage/DishesPage.tsx';
import EditDish from './components/EditDish/EditDish.tsx';
import NewDish from './containers/NewDish/NewDish.tsx';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/admin" element={<MainPage/>}/>
        <Route path="/admin/dishes" element={<DishesPage/>} />
        <Route path="/admin/dishes/add-new-dish" element={<NewDish/>}/>
        <Route path="/admin/dishes/:id/edit" element={<EditDish/>} />
        <Route path="*" element={<p className="text-center mt-5">Page is not found :(</p>} />
      </Routes>
    </>
  )
};

export default App
