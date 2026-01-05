
import React from 'react';
import { 
  ClipboardList, Calendar, Users, Box, FileText, ChevronLeft, MessageSquare, Plus, ChevronRight, UserPlus, Phone
} from 'lucide-react';

interface ListViewProps {
  title: string;
  type: 'orders' | 'agenda' | 'clients' | 'parts' | 'services';
  items?: any[];
  onBack: () => void;
  onAdd: () => void;
}

const ListView: React.FC<ListViewProps> = ({ title, type, items = [], onBack, onAdd }) => {
  const [showClientMenu, setShowClientMenu] = React.useState(false);

  const config = {
    orders: { icon: <ClipboardList size={64} />, label: 'Comece salvando um pedido', sub: 'Organize seu negócio aqui!', btn: 'novo pedido' },
    agenda: { icon: <Calendar size={64} />, label: 'Agendar um compromisso', sub: 'É super fácil organizar sua rotina de trabalho!', btn: 'novo compromisso' },
    clients: { icon: <Users size={64} />, label: 'Salve os contatos dos seus clientes', sub: 'Eles serão salvos na nuvem, então você não vai perdê-los', btn: 'novo cliente' },
    parts: { icon: <Box size={64} />, label: 'Crie seu próprio catálogo de peça!', sub: 'Isso vai te economizar muito tempo!', btn: 'cadastrar peça' },
    services: { icon: <FileText size={64} />, label: 'Crie seu próprio catálogo de serviços', sub: 'Isso vai te economizar muito tempo!', btn: 'cadastrar serviço' },
  };

  const { icon, label, sub, btn } = config[type];

  const handleAddClick = () => {
    if (type === 'clients') {
      setShowClientMenu(true);
    } else {
      onAdd();
    }
  };

  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-right duration-300 relative">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <button onClick={onBack} className="text-[#4a3f9e]"><ChevronLeft size={28} /></button>
        <h2 className="text-[#4a3f9e] font-bold text-lg">{title}</h2>
        <button className="text-[#4a3f9e]"><MessageSquare size={24} /></button>
      </div>

      {type === 'orders' && (
        <div className="flex border-b border-gray-100 text-sm font-bold text-[#4a3f9e]">
           <button className="flex-1 py-4 border-b-2 border-[#4a3f9e]">Todos os pedidos</button>
           <button className="flex-1 py-4 text-gray-400 relative">
             Pedidos por status
             <div className="absolute top-1 right-2 bg-green-500 text-white text-[8px] px-2 py-0.5 rounded leading-tight">NOVIDADE</div>
           </button>
        </div>
      )}

      {items.length > 0 ? (
        <div className="flex-1 overflow-y-auto">
          {items.map((item, idx) => (
            <div key={idx} className="p-4 border-b border-gray-50 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#4a3f9e]">
                    {type === 'clients' ? <Users size={20} /> : <ClipboardList size={20} />}
                 </div>
                 <div>
                    <p className="font-bold text-gray-800">{item.name || item.reference || `Item #${idx + 1}`}</p>
                    <p className="text-xs text-gray-400">{item.date || item.email || 'Detalhes'}</p>
                 </div>
              </div>
              <ChevronRight size={18} className="text-gray-300" />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center space-y-6">
          <div className="w-48 h-48 bg-gray-50 rounded-full flex items-center justify-center text-gray-300">
            {icon}
          </div>
          <div className="space-y-2">
            <h3 className="font-bold text-gray-800 text-lg">{label}</h3>
            <p className="text-gray-400 text-sm">{sub}</p>
          </div>
        </div>
      )}

      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={handleAddClick}
          className="w-full bg-[#4a3f9e] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 active:scale-95 transition-all shadow-lg"
        >
          {React.cloneElement(icon as React.ReactElement, { size: 18 })}
          {btn}
        </button>
      </div>

      {/* Client Selection Menu (Bottom Sheet) */}
      {showClientMenu && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowClientMenu(false)}></div>
          <div className="relative bg-white rounded-t-3xl p-6 space-y-2 animate-in slide-in-from-bottom duration-300">
            <button 
              onClick={() => { setShowClientMenu(false); onAdd(); }}
              className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors border-b border-gray-50"
            >
              <div className="text-[#4a3f9e]"><UserPlus size={24} /></div>
              <span className="font-bold text-gray-700">adicionar um novo cliente</span>
            </button>
            <button 
              onClick={() => setShowClientMenu(false)}
              className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
            >
              <div className="text-[#4a3f9e]"><Phone size={24} /></div>
              <span className="font-bold text-gray-700">importar da agenda do telefone</span>
            </button>
            <button 
               onClick={() => setShowClientMenu(false)}
               className="w-full py-4 text-gray-400 font-bold"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListView;
