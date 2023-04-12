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
      <div className='stars'>
        <div className='twinkling'>
          <Header />
          <main id='main'>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
