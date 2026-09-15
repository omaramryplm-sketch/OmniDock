import { useState, useEffect } from 'react';
import api from '../api';
import { X } from 'lucide-react';

const Viajes = () => {
  const [viajes, setViajes] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [unidadTransporte, setUnidadTransporte] = useState('');
  const [operador, setOperador] = useState('');

  const fetchViajes = async () => {
    try {
      const res = await api.get('/viajes');
      setViajes(res.data);
    } catch (error) {
      console.error('Error fetching viajes:', error);
    }
  };

  useEffect(() => {
    fetchViajes();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/viajes', {
        unidad_transporte: unidadTransporte,
        operador: operador
      });
      setIsModalOpen(false);
      setUnidadTransporte('');
      setOperador('');
      fetchViajes();
    } catch (error) {
      console.error('Error creando viaje:', error);
      alert('Error al guardar el viaje');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">Control de Viajes y Carga</h2>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-brand-700 text-white px-4 py-2 rounded shadow text-sm hover:bg-brand-800"
        >
          Nuevo Viaje
        </button>
      </div>
      
      <table className="min-w-full divide-y divide-gray-200 mt-4 border">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Folio</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transportista</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operador</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estado</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {viajes.length === 0 ? (
            <tr><td colSpan={4} className="px-6 py-4 text-center text-gray-500">No hay viajes registrados</td></tr>
          ) : (
            viajes.map((viaje) => (
              <tr key={viaje.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">V-{viaje.id.toString().padStart(4, '0')}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{viaje.unidad_transporte}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{viaje.operador}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    viaje.estado === 'Planeando' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {viaje.estado}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Registrar Viaje</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Unidad de Transporte</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm p-2 focus:border-brand-500 focus:ring-brand-500"
                  value={unidadTransporte}
                  onChange={(e) => setUnidadTransporte(e.target.value)}
                  placeholder="Ej. Tráiler Placas 123-ABC"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre del Operador</label>
                <input 
                  type="text" 
                  className="mt-1 block w-full rounded-md border-gray-300 border shadow-sm p-2 focus:border-brand-500 focus:ring-brand-500"
                  value={operador}
                  onChange={(e) => setOperador(e.target.value)}
                  placeholder="Ej. Juan Pérez"
                  required
                />
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-brand-700 text-white rounded-md hover:bg-brand-800 shadow-sm"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Viajes;
