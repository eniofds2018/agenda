
import React, { useState } from 'react';
import { X, Edit2, ChevronDown, Plus, ChevronUp, Briefcase, Box, Percent, Truck, DollarSign, Camera } from 'lucide-react';

interface OrderFormProps {
  onClose: () => void;
  onSave?: (order: any) => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ onClose, onSave }) => {
  const [client, setClient] = useState('');
  const [reference, setReference] = useState('');
  const [total, setTotal] = useState(0);

  const Section = ({ title, icon, children, badge }: { title: string, icon: React.ReactNode, children?: React.ReactNode, badge?: string }) => (
    <div className="border-b border-gray-100">
      <div className="flex items-center justify-between p-4 cursor-pointer">
        <div className="flex items-center gap-3 text-gray-700">
          <div className="text-[#4a3f9e]">{icon}</div>
          <span className="font-bold text-sm">{title}</span>
        </div>
        <div className="flex items-center gap-2">
           {badge && <span className={`text-[8px] font-bold text-white px-1.5 py-0.5 rounded uppercase ${badge === 'Pro' ? 'bg-purple-400' : 'bg-purple-600'}`}>{badge}</span>}
           <Plus size={20} className="text-[#4a3f9e] bg-gray-100 rounded-full p-0.5" />
           <ChevronUp size={16} className="text-gray-300" />
        </div>
      </div>
      <div className="px-4 pb-4">{children}</div>
    </div>
  );

  const handleSave = () => {
    if (onSave) {
      onSave({
        name: client || 'Novo Pedido',
        reference,
        date: new Date().toLocaleDateString('pt-BR'),
        total
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white sticky top-0 z-10">
        <button onClick={onClose} className="text-[#4a3f9e]"><X size={28} /></button>
        <h2 className="text-[#4a3f9e] font-bold text-lg">Pedido</h2>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-bold text-lg text-gray-800 leading-none">Pedido n. 001-2026</h3>
              <p className="text-xs text-gray-400 mt-1 font-medium">03/01/2026</p>
            </div>
            <Edit2 size={18} className="text-[#4a3f9e]" />
          </div>

          <div className="space-y-3">
             <input 
              type="text" 
              value={client}
              onChange={(e) => setClient(e.target.value)}
              placeholder="Selecione ou adicione um cliente" 
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-purple-400 outline-none placeholder:text-gray-400" 
             />
             <input 
              type="text" 
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder="Referência" 
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-purple-400 outline-none placeholder:text-gray-400" 
             />
          </div>
        </div>

        <Section title="Compromissos" icon={<Plus size={18} />}>
           <p className="text-xs text-gray-400">Marcar compromisso</p>
        </Section>

        <div className="bg-gray-50/50 p-4">
           <div className="flex items-center justify-between font-bold text-sm text-gray-800">
              <span className="uppercase tracking-widest text-[10px] text-gray-400">PEDIDO</span>
              <ChevronUp size={16} className="text-gray-300" />
           </div>
           <div className="mt-4 space-y-1">
              {[
                { label: 'Serviços', icon: <Briefcase size={16} /> },
                { label: 'Peças', icon: <Box size={16} /> },
                { label: 'Desconto', icon: <Percent size={16} /> },
                { label: 'Taxa de entrega', icon: <Truck size={16} /> },
                { label: 'Outras taxas', icon: <DollarSign size={16} /> },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-2.5">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="text-[#4a3f9e]">{item.icon}</div>
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                  <button onClick={() => setTotal(prev => prev + 100)} className="text-[#4a3f9e] bg-white rounded-full p-0.5 shadow-sm">
                    <Plus size={20} />
                  </button>
                </div>
              ))}
           </div>
        </div>

        <div className="p-4 bg-gray-50 flex justify-between items-center font-bold">
           <span className="text-gray-800">Total</span>
           <span className="text-gray-800">R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
        </div>

        <Section title="Detalhes" icon={<ChevronDown size={18} />}>
           <div className="space-y-4 py-2">
              <div className="flex items-center justify-between"><span className="text-sm text-gray-600">Condições de pagamento</span><Plus size={18} className="text-[#4a3f9e]" /></div>
              <div className="flex items-center justify-between"><span className="text-sm text-gray-600">Garantia</span><Plus size={18} className="text-[#4a3f9e]" /></div>
              <div className="flex items-center justify-between"><span className="text-sm text-gray-600">Cláusulas contratuais</span><span className="bg-purple-600 text-white text-[8px] px-1.5 py-0.5 rounded font-bold">TOP</span></div>
           </div>
        </Section>
      </div>

      <div className="p-4 border-t border-gray-100 sticky bottom-0 bg-white">
        <button 
          onClick={handleSave}
          className="w-full bg-[#4a3f9e] text-white py-4 rounded-xl font-bold uppercase tracking-wider active:scale-95 transition-all shadow-lg"
        >
          salvar pedido
        </button>
      </div>
    </div>
  );
};

export default OrderForm;
