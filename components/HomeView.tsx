
import React from 'react';
import { 
  ClipboardList, Calendar, DollarSign, Users, Box, FileText, 
  Rocket, ChevronRight, Info, Plus, UserPlus
} from 'lucide-react';
import { ViewState } from '../types';

interface HomeViewProps {
  onNavigate: (view: ViewState) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  const CATEGORIES = [
    { id: 'orders_list', label: 'Pedidos', icon: <ClipboardList />, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { id: 'agenda_list', label: 'Agenda', icon: <Calendar />, color: 'text-teal-500', bgColor: 'bg-teal-50' },
    { id: 'financial_detail', label: 'Financeiro', icon: <DollarSign />, color: 'text-green-500', bgColor: 'bg-green-50' },
    { id: 'clients_list', label: 'Clientes', icon: <Users />, color: 'text-orange-500', bgColor: 'bg-orange-50' },
    { id: 'parts_catalog', label: 'Peças & estoque', icon: <Box />, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { id: 'services_catalog', label: 'Serviços', icon: <FileText />, color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
  ];

  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.map((cat) => (
          <button 
            key={cat.id} 
            onClick={() => onNavigate(cat.id as ViewState)}
            className="flex flex-col p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 text-left space-y-3"
          >
            <div className={`w-10 h-10 ${cat.bgColor} ${cat.color} rounded-lg flex items-center justify-center`}>
              {React.cloneElement(cat.icon as React.ReactElement, { size: 20 })}
            </div>
            <span className="font-semibold text-gray-700 text-sm">{cat.label}</span>
          </button>
        ))}
      </div>

      <section className="space-y-3">
        <h3 className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">ATALHOS</h3>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar -mx-4 px-4 pb-2">
           <button onClick={() => onNavigate('form_client')} className="flex-shrink-0 w-28 h-28 bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center"><UserPlus size={18} /></div>
              <span className="text-[11px] font-bold text-gray-700 leading-tight">Novo cliente</span>
           </button>
           <button className="flex-shrink-0 w-28 h-28 bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="w-8 h-8 bg-purple-50 text-purple-600 rounded-lg flex items-center justify-center"><Rocket size={18} /></div>
              <span className="text-[11px] font-bold text-gray-700 leading-tight">Ver planos & preços</span>
           </button>
           <button className="flex-shrink-0 w-28 h-28 bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between">
              <div className="w-8 h-8 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center"><Users size={18} /></div>
              <span className="text-[11px] font-bold text-gray-700 leading-tight">Convidar amigos</span>
           </button>
        </div>
      </section>

      <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-gray-800 font-bold text-sm">RESUMO</h3>
            <Info size={14} className="text-gray-400" />
          </div>
          <button className="bg-[#c3e600] text-[#4a3f9e] p-1 rounded-full shadow-sm"><Plus size={16} strokeWidth={3} /></button>
        </div>
        <p className="text-gray-400 text-xs italic">Adicione informações diárias importantes aqui</p>
      </div>
    </div>
  );
};

export default HomeView;
