import './FormsPage.css';
import React, { Component } from 'react';
import Forms from '../../components/Forms';

class FormsPage extends Component {
  render() {
    return (
      <div className='page'>
        <h1>Forms</h1>
        <h3 className='page-title'>Forms</h3>
        <h3>Plan your visit to Dubai:</h3>
        <Forms />
      </div>
    );
  }
}

export default FormsPage;
