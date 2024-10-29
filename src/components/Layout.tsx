import React from 'react';
import { Menu, Home, Bot, History, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center justify-between px-4">
          <h1 className="text-xl font-bold text-gray-800">SaaS Auto AI</h1>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <nav className="mt-8 space-y-2 px-4">
          <NavItem icon={<Home />} label="Dashboard" href="/" />
          <NavItem icon={<Bot />} label="AI Models" href="/models" />
          <NavItem icon={<History />} label="History" href="/history" />
          <NavItem icon={<Settings />} label="Settings" href="/settings" />
          
          <button
            onClick={logout}
            className="flex w-full items-center space-x-3 rounded-lg px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`min-h-screen transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-4 shadow-sm">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </header>
        
        <div className="container mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

function NavItem({ icon, label, href }: NavItemProps) {
  const isActive = window.location.pathname === href;
  
  return (
    <a
      href={href}
      className={`flex items-center space-x-3 rounded-lg px-4 py-2 ${
        isActive
          ? 'bg-blue-50 text-blue-600'
          : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}