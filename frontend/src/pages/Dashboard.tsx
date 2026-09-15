import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Recepciones Hoy</h3>
          <p className="text-3xl font-semibold text-brand-900 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 uppercase">En Patio</h3>
          <p className="text-3xl font-semibold text-brand-900 mt-2">45</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Viajes Activos</h3>
          <p className="text-3xl font-semibold text-brand-900 mt-2">3</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Actividad Reciente</h3>
        <p className="text-sm text-gray-600">No hay actividad reciente registrada en el sistema.</p>
      </div>
    </div>
  );
};

export default Dashboard;
