import { useState, useEffect } from 'react';
import api from '../api';

const Recepciones = () => {
  const [recepciones, setRecepciones] = useState<any[]>([]);

  useEffect(() => {
    const fetchRecepciones = async () => {
      try {
        const res = await api.get('/recepciones');
        setRecepciones(res.data);
      } catch (error) {
        console.error('Error fetching recepciones:', error);
      }
    };
    fetchRecepciones();
  }, []);

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
          {recepciones.length === 0 ? (
            <tr><td colSpan={4} className="px-6 py-4 text-center text-gray-500">No hay recepciones registradas</td></tr>
          ) : (
            recepciones.map((rec) => (
              <tr key={rec.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rec.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{rec.cliente?.nombre_comercial || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{rec.documento_origen}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    rec.estado === 'En Patio' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {rec.estado}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Recepciones;
