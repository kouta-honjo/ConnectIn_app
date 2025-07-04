import React from 'react';
import { Bell, User, Search } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4">
      <div className="text-xl font-bold text-blue-600">ConnectIn</div>
      <div className="hidden md:flex flex-grow mx-4 max-w-md">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="検索"
            className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="text-gray-600 cursor-pointer" size={24} />
        <User className="text-gray-600 cursor-pointer" size={24} />
      </div>
    </header>
  );
};

export default Header;
