import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './store/store';
import AboutUs from './pages/AboutUs/AboutUs';
import Layout from './components/Layout/Layout';
import Error404 from './pages/Error404/Error404';
import HomePage from './pages/HomePage/HomePage';
import FormsPage from './pages/FormsPage/FormsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
