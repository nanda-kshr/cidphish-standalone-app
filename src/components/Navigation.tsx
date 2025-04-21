import React, { useState, useEffect } from 'react';
import { Home, Shield, Layout, Users, CloudLightning, LogOut, InfoIcon, Menu, X, Coffee } from 'lucide-react';
import { User } from 'firebase/auth';

interface NavigationProps {
  setCurrentPage: (page: string) => void;
  user: User | null;
  onSignOut: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ setCurrentPage, user, onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const navItems = [
    { name: 'Home', icon: <Home />, page: 'home' },
    { name: 'Device Info', icon: <InfoIcon />, page: 'deviceInfo' },
    ...(user ? [] : [
      { name: 'Sign In', icon: <Shield />, page: 'signin' },
      { name: 'Sign Up', icon: <Users />, page: 'signup' }
    ]),
    ...(user ? [
      { name: 'Website Creator', icon: <CloudLightning />, page: 'websitecreator' },
      { name: 'Dashboard', icon: <Layout />, page: 'formdata' }
    ] : [])
  ];

  // Close menu when screen size changes (prevents menu staying open)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-400">CidPhish</div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Items */}
        <div className={`md:flex md:space-x-6 md:items-center ${isOpen ? 'block' : 'hidden'} absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-black/70 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-4 md:p-0`}>
          {navItems.map((item) => (
            <button 
              key={item.page}
              onClick={() => { setCurrentPage(item.page); setIsOpen(false); }}
              className="flex items-center space-x-2 text-white hover:text-green-400 transition p-2"
            >
              {item.icon}
              <span>{item.name}</span>
            </button>
          ))}

            <a
              href="https://www.buymeacoffee.com/nanda_kshr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white hover:text-green-400 transition p-2"
            >
              <Coffee/>  <span>Buy me a coffee</span>
            </a>

          {user && (
            <button 
              onClick={onSignOut}
              className="flex items-center space-x-2 text-red-400 hover:text-red-600 transition p-2"
            >
              <LogOut />
              <span>Logout</span>
            </button>
          )}



        </div>
      </div>
    </nav>
  );
}

export default Navigation;