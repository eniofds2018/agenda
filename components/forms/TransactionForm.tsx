
import React, { useState } from 'react';
import { X, ChevronDown, Plus, ChevronRight, Calendar, User, DollarSign } from 'lucide-react';

interface TransactionFormProps {
  type: 'receipt' | 'cost';
  onClose: () => void;
  onSave?: (transaction: any) => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ type, onClose, onSave }) => {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (onSave) {
      onSave({
        type,
        value,
        description: description || (type === 'receipt' ? 'Novo Recebimento' : 'Novo Custo'),
        date: new Date().toLocaleDateString('pt-BR')
      });
    }
  };

  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 sticky top-0 z-10 bg-white">
        <button onClick={onClose} className="text-[#4a3f9e]"><X size={28} /></button>
        <h2 className="text-[#4a3f9e] font-bold text-lg">{type === 'receipt' ? 'Recebimento' : 'Custo'}</h2>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="border border-gray-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
           <div className="flex items-center gap-2">
             <div className={`w-3 h-3 rounded-full ${type === 'receipt' ? 'bg-green-500' : 'bg-purple-500'}`}></div>
             <span className="font-bold text-gray-800">{type === 'receipt' ? 'Recebido' : 'Pago'}</span>
           </div>
           <ChevronDown size={18} className="text-gray-400" />
        </div>

        <div className="space-y-4 pt-4">
           <input 
            type="number" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Valor (R$)" 
            className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm font-bold outline-none" 
           />
           <input 
            type="text" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={type === 'receipt' ? "Este valor refere-se a..." : "Descrição de custo"} 
            className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm outline-none" 
           />
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 bg-white">
        <button 
          onClick={handleSave}
          disabled={!value}
          className={`w-full bg-[#4a3f9e] text-white py-4 rounded-xl font-bold uppercase transition-all shadow-lg ${!value ? 'opacity-50' : 'active:scale-95'}`}
        >
          salvar {type === 'receipt' ? 'recebimento' : 'custo'}
        </button>
      </div>
    </div>
  );
};

export default TransactionForm;
