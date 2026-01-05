
import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface ClientFormProps {
  onClose: () => void;
  onSave?: (client: any) => void;
}

const ClientForm: React.FC<ClientFormProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    if (!email) return true; // Opcional, mas se preenchido deve ser válido
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError('E-mail inválido');
    } else {
      setEmailError('');
    }
  };

  const handleSave = () => {
    if (name && validateEmail(email) && onSave) {
      onSave({ name, email });
    }
  };

  const isEmailValid = validateEmail(email);
  const canSave = name.trim() !== '' && isEmailValid;

  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 sticky top-0 z-10 bg-white">
        <button onClick={onClose} className="text-[#4a3f9e]"><X size={28} /></button>
        <h2 className="text-[#4a3f9e] font-bold text-lg">Cliente</h2>
        <div className="w-10"></div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Nome do cliente</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Qual é o nome do cliente?" 
              className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm outline-none focus:border-[#4a3f9e] transition-colors" 
            />
          </div>
          <div className="border border-gray-200 rounded-lg px-4 py-4 flex items-center justify-between text-gray-400 text-sm">
            Como vc conseguiu esse cliente?
            <ChevronDown size={18} />
          </div>
        </div>

        <div className="space-y-4">
           <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-800">Tipo de cliente</span>
              <ChevronUp size={16} className="text-gray-300" />
           </div>
           <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-[#4a3f9e] flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-[#4a3f9e]"></div></div>
                <span className="text-sm font-medium text-gray-700">Pessoa física</span>
              </label>
           </div>
        </div>

        <div className="space-y-4">
           <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-gray-800">Telefone e e-mail</span>
              <ChevronUp size={16} className="text-gray-300" />
           </div>
           <div className="space-y-1">
             <input 
              type="email" 
              value={email}
              onChange={handleEmailChange}
              placeholder="E-mail" 
              className={`w-full border rounded-lg px-4 py-4 text-sm outline-none transition-colors ${emailError ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-[#4a3f9e]'}`}
             />
             {emailError && (
               <p className="text-red-500 text-[10px] font-bold flex items-center gap-1 ml-1">
                 <AlertCircle size={12} /> {emailError}
               </p>
             )}
           </div>
           <input 
            type="tel" 
            placeholder="Telefone com DDD" 
            className="w-full border border-gray-200 rounded-lg px-4 py-4 text-sm outline-none" 
           />
        </div>
      </div>

      <div className="p-4 border-t border-gray-100 sticky bottom-0 bg-white">
        <button 
          onClick={handleSave}
          disabled={!canSave}
          className={`w-full bg-[#4a3f9e] text-white py-4 rounded-xl font-bold uppercase transition-all shadow-lg ${!canSave ? 'opacity-50 cursor-not-allowed' : 'active:scale-95'}`}
        >
          salvar cliente
        </button>
      </div>
    </div>
  );
};

export default ClientForm;
