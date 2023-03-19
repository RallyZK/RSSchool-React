import './App.css';
import Forms from './pages/Forms';
import AboutUs from './pages/AboutUs';
import Error404 from './pages/Error404';
import HomePage from './pages/HomePage';
import React, { Component } from 'react';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/forms' element={<Forms />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
