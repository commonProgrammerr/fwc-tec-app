import React, { ReactNode } from 'react'
import NavBar from './nav-bar';


interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen">
      <NavBar />
      <main className="py-20 w-full h-full p-20">
        {children}
      </main>
    </div>
  );
}

export default Layout;
