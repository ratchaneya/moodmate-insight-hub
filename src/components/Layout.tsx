
import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  
  // Pages that shouldn't show navigation
  const noNavPages = [
    '/', 
    '/welcome', 
    '/login', 
    '/signup', 
    '/personal-info', 
    '/personal-info-2', 
    '/password-login'
  ];
  
  const showNav = !noNavPages.includes(location.pathname);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {showNav && <Navigation />}
      <main className={showNav ? 'pt-16' : ''}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
