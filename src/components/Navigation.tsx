
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Calendar, BarChart3, MessageCircle, Heart, FileText, Headphones } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/home', icon: Home, label: 'หน้าหลัก' },
    { path: '/life-diary', icon: Heart, label: 'ไดอารี่' },
    { path: '/evaluation-form', icon: FileText, label: 'ประเมิน' },
    { path: '/chat-bot', icon: MessageCircle, label: 'ปรึกษา' },
    { path: '/podcast', icon: Headphones, label: 'พอดแคสต์' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-yellow-100 border-t border-yellow-200">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-orange-400 text-white shadow-lg'
                    : 'text-gray-600 hover:text-orange-600 hover:bg-orange-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Bottom safe area for mobile */}
      <div className="w-full h-1 bg-black"></div>
    </nav>
  );
};

export default Navigation;
