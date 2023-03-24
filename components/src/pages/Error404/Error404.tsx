import './Error404.css';
import React, { Component } from 'react';

class Error404 extends Component {
  render() {
    return (
      <div className='error-page'>
        <h1>Error 404</h1>
        <h3>The page you are looking for can`t be found</h3>
      </div>
    );
  }
}

export default Error404;
