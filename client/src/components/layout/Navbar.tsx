import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Logo';

interface NavbarProps {
  toggleSidebar?: () => void;
  toggleMobileMenu: () => void;
  isMobileMenuOpen?: boolean;
}

const Navbar = ({ toggleSidebar, toggleMobileMenu, isMobileMenuOpen }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/60 py-4 px-4 md:px-6 flex items-center justify-between gap-4 shadow-sm">
      {/* Logo & Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleMobileMenu}
          className="md:hidden w-11 h-11 rounded-xl hover:bg-slate-100 transition-all duration-200 flex items-center justify-center group"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {toggleSidebar && (
          <button
            onClick={toggleSidebar}
            className="hidden md:flex w-11 h-11 rounded-xl hover:bg-slate-100 transition-all duration-200 items-center justify-center group"
            aria-label="Toggle sidebar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-700 group-hover:text-slate-900 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        )}

        <Link to="/" className="flex items-center hover:scale-105 transition-transform duration-200">
          <Logo variant="default" size="md" />
        </Link>
      </div>

      {/* Enhanced Search Bar */}
      <div className="flex-1 max-w-2xl relative hidden md:block">
        <div className="relative group" onClick={() => navigate('/search')}>
          <input
            type="text"
            placeholder="Search properties, locations, or neighborhoods..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 pl-12 pr-16 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-slate-700 placeholder:text-slate-400"
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-slate-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="px-2 py-1 bg-slate-200 text-slate-500 text-xs font-medium rounded-md">
              ⌘K
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Navigation & User */}
      <div className="flex items-center gap-2">
        {/* Quick Actions */}
        <div className="hidden lg:flex items-center gap-1 mr-2">
          <Link
            to="/post-property"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md"
          >
            List Property
          </Link>
        </div>

        {/* Messages */}
        <Link to="/messages" className="relative p-2.5 rounded-xl hover:bg-slate-100 transition-all duration-200 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium shadow-sm">2</span>
        </Link>

        {/* Notifications */}
        <Link to="/notifications" className="relative p-2.5 rounded-xl hover:bg-slate-100 transition-all duration-200 group">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-slate-600 group-hover:text-slate-800 transition-colors">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium shadow-sm">3</span>
        </Link>

        {/* User Profile */}
        <Link to="/profile" className="flex items-center gap-3 ml-2 p-1 rounded-xl hover:bg-slate-100 transition-all duration-200 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-slate-200 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center shadow-sm group-hover:border-slate-300 transition-colors">
              <span className="text-slate-700 font-bold text-sm">JD</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="hidden xl:block">
            <div className="text-sm font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">John Doe</div>
            <div className="text-xs text-slate-500">Premium Member</div>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar; 