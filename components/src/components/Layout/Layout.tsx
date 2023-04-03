import React, { FC } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Layout.css';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <main id='main'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
