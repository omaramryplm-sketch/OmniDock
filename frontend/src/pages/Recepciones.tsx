import React from 'react';

const Recepciones = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">Control de Recepciones</h2>
        <button className="bg-brand-700 text-white px-4 py-2 rounded shadow text-sm hover:bg-brand-800">
          Nueva Recepción
        </button>
      </div>
      
      <table className="min-w-full divide-y divide-gray-200 mt-4 border">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Documento</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Cliente Ejemplo SA</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">DOC-2023-001</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                En Patio
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Recepciones;
