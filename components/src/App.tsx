import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Error404 from './pages/Error404';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/*' element={<Error404 />} />
          </Routes>
        </Layout>
      </BrowserRouter>

      // <div className='App'>
      //   <header className='App-header'>
      //     <img src={logo} className='App-logo' alt='logo' />
      //     <p>
      //       Edit <code>src/App.tsx</code> and save to reload.
      //     </p>
      //     <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
