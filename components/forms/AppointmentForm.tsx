
import React from 'react';
import { X, ChevronDown, Plus, ChevronRight, Calendar, Clock, Bell, User } from 'lucide-react';

interface AppointmentFormProps {
  onClose: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 sticky top-0 z-10 bg-white">
        <button onClick={onClose} className="text-[#4a3f9e]"><X size={28} /></button>
        <h2 className="text-[#4a3f9e] font-bold text-lg">Compromisso</h2>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
           <div className="flex items-center gap-2">
             <div className="w-1 h-5 bg-blue-500 rounded"></div>
             <span className="font-bold text-gray-400">Selecione um status</span>
           </div>
           <ChevronDown size={18} className="text-gray-400" />
        </div>

        <input type="text" placeholder="Descrição do compromisso" className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm outline-none" />

        <div className="space-y-6">
           <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <Calendar className="text-[#4a3f9e]" size={22} />
                 <span className="text-sm font-bold text-gray-800">Data</span>
              </div>
              <span className="text-xs text-gray-400 flex items-center gap-1 font-bold">03/01/2026 <ChevronRight size={14} /></span>
           </div>

           <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <Clock className="text-[#4a3f9e]" size={22} />
                 <span className="text-sm font-bold text-gray-800">Dia inteiro</span>
              </div>
              <div className="w-10 h-6 bg-gray-200 rounded-full relative"><div className="absolute right-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-sm"></div></div>
           </div>

           <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <Clock className="text-[#4a3f9e]" size={22} />
                 <span className="text-sm font-bold text-gray-800">Horário</span>
              </div>
              <Plus size={24} className="text-white bg-[#4a3f9e] rounded-full p-1" />
           </div>

           <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <Bell className="text-[#4a3f9e]" size={22} />
                 <span className="text-sm font-bold text-gray-800">Lembrete</span>
              </div>
              <div className="bg-cyan-400 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1">★ Pop</div>
           </div>

           <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <Calendar className="text-[#4a3f9e]" size={22} />
                 <span className="text-sm font-bold text-gray-800">Pedido</span>
              </div>
              <Plus size={24} className="text-white bg-[#4a3f9e] rounded-full p-1" />
           </div>

           <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <User className="text-[#4a3f9e]" size={22} />
                 <span className="text-sm font-bold text-gray-800">Cliente</span>
              </div>
              <Plus size={24} className="text-white bg-[#4a3f9e] rounded-full p-1" />
           </div>
        </div>

        <div className="space-y-4 pt-4">
           <h3 className="font-bold text-gray-800 text-lg">Endereço</h3>
           <div className="flex items-center justify-between group cursor-pointer border-b border-gray-50 pb-4">
              <div className="flex flex-col">
                 <span className="text-sm font-bold text-gray-800">Endereço do compromisso</span>
                 <span className="text-xs text-gray-400">Nenhum endereço inserido ainda.</span>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
           </div>
        </div>

        <div className="space-y-4 pt-4 pb-12">
           <h3 className="font-bold text-gray-800 text-lg">Detalhes</h3>
           <div className="flex items-center justify-between text-gray-300">
             <span className="text-sm font-bold">Repetir</span>
             <ChevronRight size={18} />
           </div>
           <div className="flex items-center justify-between text-gray-300">
             <span className="text-sm font-bold">Membro da equipe</span>
             <ChevronRight size={18} />
           </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 bg-white">
        <button className="w-full bg-[#4a3f9e] text-white py-4 rounded-xl font-bold uppercase active:scale-95 transition-all shadow-lg opacity-40">
          salvar compromisso
        </button>
      </div>
    </div>
  );
};

export default AppointmentForm;
