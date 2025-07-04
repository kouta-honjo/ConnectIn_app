import React from 'react';
import Link from 'next/link';
import { Home, Search, PlusCircle, Users, Bell, User } from 'lucide-react';

interface BottomNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { name: 'ホーム', icon: Home, path: '/' },
    { name: '検索', icon: Search, path: '/search' },
    { name: '作成', icon: PlusCircle, path: '/create' },
    { name: '交流', icon: Users, path: '/circles' },
    { name: '通知', icon: Bell, path: '/notifications' },
    { name: 'プロフィール', icon: User, path: '/profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-10">
      <ul className="flex justify-around h-16 items-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.path} onClick={() => onTabChange(item.name)} className={`flex flex-col items-center text-xs ${activeTab === item.name ? 'text-blue-600' : 'text-gray-600'}`}>
              <item.icon size={20} />
              <span className="mt-1">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNavigation;
