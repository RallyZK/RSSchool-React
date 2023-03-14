import React, { Component } from 'react';
import Footer from '../Footer';
import Header from '../Header';

type Props = {
  children: React.ReactNode;
};

class Layout extends Component<Props> {
  render() {
    return (
      <div className='flex flex-col justify-between min-h-screen'>
        <Header />
        <main id='main' className='flex justify-center'>
          {this.props.children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;
