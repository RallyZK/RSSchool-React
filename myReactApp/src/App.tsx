import './App.css';
import React from 'react';
import AboutUs from './pages/AboutUs/AboutUs';
import Error404 from './pages/Error404/Error404';
import HomePage from './pages/HomePage/HomePage';
import Layout from './components/Layout/Layout';
import FormsPage from './pages/FormsPage/FormsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/forms' element={<FormsPage />} />
          <Route path='/*' element={<Error404 />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
