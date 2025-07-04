import React from 'react';
import Link from 'next/link';
import { Home, Search, PlusCircle, Users, Bell, User } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { name: 'ホーム', icon: Home, path: '/' },
    { name: '検索', icon: Search, path: '/search' },
    { name: '作成', icon: PlusCircle, path: '/create' },
    { name: '交流', icon: Users, path: '/circles' },
    { name: '通知', icon: Bell, path: '/notifications' },
    { name: 'プロフィール', icon: User, path: '/profile' },
  ];

  return (
    <aside className="hidden md:block w-64 bg-white border-r p-4 fixed h-full">
      <nav>
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link href={item.path} onClick={() => onTabChange(item.name)} className={`flex items-center p-2 rounded-lg hover:bg-gray-100 ${activeTab === item.name ? 'bg-blue-100 text-blue-600' : 'text-gray-700'}`}>
                <item.icon className="mr-3" size={20} />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
