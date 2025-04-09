'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Gráficos', path: '/graficos' },
    { name: 'Tendências', path: '/tendencias' },
    { name: 'Chat IA', path: '/chat' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
          <div className="flex items-center flex-shrink-0 px-4">
            <img
              className="h-8 w-auto"
              src="/logo.svg"
              alt="Investimentos App"
            />
            <h1 className="ml-2 text-xl font-semibold text-gray-800">InvestPro</h1>
          </div>
          <div className="mt-8 flex flex-col flex-1">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`${
                    pathname === item.path
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
            <div className="flex items-center">
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700">Usuário Demo</p>
                <p className="text-xs font-medium text-gray-500">Conta Premium</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden flex items-center justify-between h-16 bg-white border-b px-4">
        <div className="flex items-center">
          <img
            className="h-8 w-auto"
            src="/logo.svg"
            alt="Investimentos App"
          />
          <h1 className="ml-2 text-xl font-semibold text-gray-800">InvestPro</h1>
        </div>
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="sr-only">Abrir menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <main className="flex-1 relative overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
