import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Truck, Package, LogOut } from 'lucide-react';

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-900 text-white flex flex-col">
        <div className="p-4 bg-brand-800 text-center font-bold text-xl tracking-wider">
          OMNIDOCK
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-brand-800 rounded">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </Link>
          <Link to="/recepciones" className="flex items-center space-x-2 p-2 hover:bg-brand-800 rounded">
            <Package size={20} />
            <span>Recepciones</span>
          </Link>
          <Link to="/viajes" className="flex items-center space-x-2 p-2 hover:bg-brand-800 rounded">
            <Truck size={20} />
            <span>Viajes y Carga</span>
          </Link>
        </nav>
        <div className="p-4">
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 p-2 w-full hover:bg-brand-800 rounded text-left"
          >
            <LogOut size={20} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Panel de Control</h1>
          <div className="text-sm text-gray-500">
            Usuario Admin
          </div>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
