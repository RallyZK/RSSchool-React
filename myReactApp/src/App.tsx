import './App.css';
import './index.css';
import '../src/components/Layout/Layout.css';
import React from 'react';
import AboutUs from './pages/AboutUs/AboutUs';
import Layout from './components/Layout/Layout';
import Error404 from './pages/Error404/Error404';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import FormsPage from './pages/FormsPage/FormsPage';

const App = () => {
  console.log('app');
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/forms' element={<FormsPage />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </Layout>
  );
};

export default App;
