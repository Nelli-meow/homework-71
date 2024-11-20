import './App.css'
import MainPage from './containers/MainPage/MainPage.tsx';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import * as React from 'react';

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="*" element={<p className="text-center mt-5">Page is not found :(</p>} />
      </Routes>
    </>
  )
};

export default App
