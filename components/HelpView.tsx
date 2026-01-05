
import React from 'react';
import { Search, Send, X, MessageSquare, HelpCircle, ChevronRight } from 'lucide-react';

interface HelpViewProps {
  onClose: () => void;
}

const HelpView: React.FC<HelpViewProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#4a3f9e] z-50 flex flex-col animate-in fade-in zoom-in-95 duration-300">
      
      {/* Header */}
      <div className="p-6 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
            <div className="text-[#c3e600] text-4xl font-black italic select-none">B</div>
            <span className="text-2xl font-bold italic tracking-tighter text-[#c3e600]">agendaboa</span>
        </div>
        <div className="flex items-center gap-3">
            <img src="https://picsum.photos/40/40?random=1" alt="Profile" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
            <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full">
                <X size={28} />
            </button>
        </div>
      </div>

      {/* Hero */}
      <div className="px-6 py-8 text-white space-y-2">
        <h2 className="text-3xl font-bold flex items-center gap-2">
            Olá 👋
        </h2>
        <p className="text-4xl font-extrabold leading-tight">Como a gente pode te ajudar?</p>
      </div>

      {/* Help Options Container */}
      <div className="flex-1 bg-gray-50/10 backdrop-blur-sm rounded-t-[2.5rem] p-6 space-y-4">
        
        {/* Main Actions */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden divide-y divide-gray-100">
          <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
            <span className="font-bold text-gray-800">Mensagens</span>
            <MessageSquare size={20} className="text-gray-800" />
          </button>
          <button className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
            <span className="font-bold text-gray-800">Ajuda</span>
            <HelpCircle size={20} className="text-gray-800" />
          </button>
        </div>

        {/* Messaging Box */}
        <div className="bg-white rounded-2xl shadow-xl p-5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
          <span className="font-bold text-gray-800">Envie uma mensagem</span>
          <Send size={20} className="text-gray-800 group-hover:translate-x-1 transition-transform" />
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl p-5 flex items-center justify-between focus-within:ring-2 focus-within:ring-purple-400 transition-all">
          <input 
            type="text" 
            placeholder="Qual é a sua dúvida?" 
            className="flex-1 outline-none font-bold text-gray-800 placeholder-gray-400"
          />
          <Search size={20} className="text-gray-800" />
        </div>

        {/* Common Topics (Mocked extra space) */}
        <div className="pt-8 space-y-4">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest px-2">Tópicos populares</p>
            <div className="grid grid-cols-2 gap-3">
                {['Pagamentos', 'Como agendar', 'Relatórios', 'Meu Perfil'].map(topic => (
                    <div key={topic} className="bg-white/10 border border-white/20 p-4 rounded-xl text-white font-medium hover:bg-white/20 transition-colors">
                        {topic}
                    </div>
                ))}
            </div>
        </div>

      </div>

    </div>
  );
};

export default HelpView;
