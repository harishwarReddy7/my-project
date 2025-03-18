import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Settings,
  Building2
} from 'lucide-react';

const navItems = [
  { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/' },
  { icon: <Users size={20} />, label: 'My Team', path: '/team' },
  { icon: <Calendar size={20} />, label: 'Schedule', path: '/schedule' },
  { icon: <FileText size={20} />, label: 'Projects', path: '/projects' },
  { icon: <MessageSquare size={20} />, label: 'Messages', path: '/messages' },
  { icon: <Settings size={20} />, label: 'Settings', path: '/settings' }
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b">
        <h1 className="text-2xl font-bold text-indigo-600 flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          InnovateCorp
        </h1>
      </div>
      <nav className="mt-6 px-4">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 my-1 rounded-lg transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};