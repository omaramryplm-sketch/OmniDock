import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login for now
    localStorage.setItem('token', 'fake-jwt-token');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-200">
        <div className="flex justify-center mb-6 text-brand-700">
          <Lock size={48} />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6 text-brand-900">Acceso OmniDock</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
            <input 
              type="email" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-brand-500 focus:ring-brand-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input 
              type="password" 
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 border focus:border-brand-500 focus:ring-brand-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-brand-700 text-white p-2 rounded-md hover:bg-brand-800 transition-colors"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
