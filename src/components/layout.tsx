import React, { ReactNode } from 'react'
import NavBar from './nav-bar';

import ReactModal from 'react-modal';
import { useEffect } from 'react';


interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  
  useEffect(() => ReactModal.setAppElement('#main'), [])
  
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <main id="main" className="py-20 w-full h-full p-20">
        {children}
      </main>
    </div>
  );
}

export default Layout;
