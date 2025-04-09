'use client';

import React from 'react';

interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
  logo?: React.ReactNode;
  userInfo?: React.ReactNode;
}

export const Navbar: React.FC<NavbarProps> = ({
  children,
  className = '',
  logo,
  userInfo,
}) => {
  return (
    <nav className={`bg-white border-b border-gray-200 px-4 py-2.5 ${className}`}>
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          {logo}
        </div>
        <div className="flex items-center">
          {children}
        </div>
        <div className="flex items-center">
          {userInfo}
        </div>
      </div>
    </nav>
  );
};

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className = '',
}) => {
  return (
    <aside className={`w-64 h-screen bg-white border-r border-gray-200 ${className}`}>
      <div className="h-full px-3 py-4 overflow-y-auto">
        {children}
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  children,
  active = false,
  className = '',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 cursor-pointer ${
        active ? 'bg-blue-50 text-blue-600' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
