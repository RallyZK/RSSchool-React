import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css';

type Props = {
  children: React.ReactNode;
};

class Layout extends Component<Props> {
  render() {
    return (
      <div className='layout'>
        <Header />
        <main id='main'>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
