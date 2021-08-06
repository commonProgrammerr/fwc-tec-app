import React, { memo } from 'react';

import { RiLogoutBoxRFill } from 'react-icons/ri'
import { IoIosListBox } from 'react-icons/io'

import NavItem from './nav-item';


function NavBar() {
  return (
    <nav className="        
      flex
      flex-col  
      
      p-10
      min-w-56
      
      font-medium
      text-white
      
      bg-indigo-300
      shadow-lg
      "
    >
      <h2 className="text-2xl mb-6">Menu</h2>
      <ul className="flex flex-1 flex-col gap-3">
        <NavItem destination="/pedidos">
          <IoIosListBox className="mr-2" />
          Pedidos
        </NavItem>
        <section className="justify-self-end">
          <NavItem destination="/login">
            <RiLogoutBoxRFill className="mr-2" />
            Logout
          </NavItem>
        </section>

      </ul>
    </nav>
  );
}


export default memo(NavBar);
