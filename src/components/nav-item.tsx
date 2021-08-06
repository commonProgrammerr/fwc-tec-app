import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  children: ReactNode
  destination: string
}

function NavItem({ children, destination }: NavItemProps) {
  const { pathname } = useLocation()
  return (
    <Link to={destination} className="cursor-default">
      <li className={
        `flex 
        flex-1
        text-lg 
        items-center
        ${pathname.includes(destination) 
            ? 'underline' 
            : 'hover:underline cursor-pointer'
        }`
      } >
        {children}
      </li>
    </Link>
  );
}

export default NavItem;
