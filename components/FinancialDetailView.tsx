
import React from 'react';
import { ChevronLeft, MessageSquare, ChevronDown, ChevronRight, Info, Plus, Receipt, ArrowRightLeft, MessageCircle } from 'lucide-react';

interface FinancialDetailViewProps {
  onBack: () => void;
  onAddReceipt: () => void;
  onAddCost: () => void;
  transactions?: any[];
}

const FinancialDetailView: React.FC<FinancialDetailViewProps> = ({ onBack, onAddReceipt, onAddCost, transactions = [] }) => {
  const receipts = transactions.filter(t => t.type === 'receipt');
  const costs = transactions.filter(t => t.type === 'cost');

  const totalReceipts = receipts.reduce((acc, curr) => acc + parseFloat(curr.value || 0), 0);
  const totalCosts = costs.reduce((acc, curr) => acc + parseFloat(curr.value || 0), 0);
  const result = totalReceipts - totalCosts;

  return (
    <div className="flex flex-col h-full bg-gray-50 animate-in slide-in-from-right duration-300">
      <div className="bg-white flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <button onClick={onBack} className="text-[#4a3f9e]"><ChevronLeft size={28} /></button>
        <h2 className="text-[#4a3f9e] font-bold text-lg">Financeiro</h2>
        <button className="text-[#4a3f9e]"><MessageSquare size={24} /></button>
      </div>

      <div className="p-4 space-y-4">
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm">
          <span className="text-sm text-gray-500">Você tá vendo: <span className="font-bold text-[#4a3f9e]">Mês atual</span></span>
          <ChevronDown size={18} className="text-[#4a3f9e]" />
        </div>

        {/* Receita Card */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-6">
          <h3 className="text-gray-800 font-bold text-lg">Receita</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-500"></div><span className="text-sm font-medium text-gray-700">Recebido</span></div>
              <div className="flex items-center gap-2 font-bold text-gray-800">
                R$ {totalReceipts.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} <ChevronRight size={16} className="text-gray-300" />
              </div>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-green-300"></div><span className="text-sm font-medium text-gray-700">A receber</span></div>
              <div className="flex items-center gap-2 font-bold text-gray-800">R$ 0,00 <ChevronRight size={16} className="text-gray-300" /></div>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-orange-400"></div><span className="text-sm font-medium text-gray-700">Em atraso</span></div>
              <div className="flex items-center gap-2 font-bold text-gray-800">R$ 0,00 <ChevronRight size={16} className="text-gray-300" /></div>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-50 flex justify-between items-center font-bold">
            <span className="text-gray-800 text-sm">Receita total</span>
            <span className="text-gray-800">R$ {totalReceipts.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        {/* Custos Card */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-6">
          <h3 className="text-gray-800 font-bold text-lg">Custos</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-500"></div><span className="text-sm font-medium text-gray-700">Pago</span></div>
              <div className="flex items-center gap-2 font-bold text-gray-800">
                R$ {totalCosts.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} <ChevronRight size={16} className="text-gray-300" />
              </div>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-300"></div><span className="text-sm font-medium text-gray-700">Previsto</span></div>
              <div className="flex items-center gap-2 font-bold text-gray-800">R$ 0,00 <ChevronRight size={16} className="text-gray-300" /></div>
            </div>
            <div className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-red-500"></div><span className="text-sm font-medium text-gray-700">Em atraso</span></div>
              <div className="flex items-center gap-2 font-bold text-gray-800">R$ 0,00 <ChevronRight size={16} className="text-gray-300" /></div>
            </div>
          </div>
          <div className="pt-4 border-t border-gray-50 flex justify-between items-center font-bold">
            <span className="text-gray-800 text-sm">Custo total</span>
            <span className="text-gray-800">R$ {totalCosts.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>

        <section className="space-y-3">
          <h3 className="text-gray-900 font-bold text-base">Atalhos financeiros</h3>
          <div className="grid grid-cols-2 gap-3 pb-8">
             <button onClick={onAddReceipt} className="bg-white border border-gray-100 rounded-lg p-4 text-left space-y-4 shadow-sm active:scale-95 transition-all">
                <div className="w-8 h-8 bg-green-50 text-green-600 rounded-lg flex items-center justify-center"><Receipt size={18} /></div>
                <span className="text-[11px] font-bold text-gray-700 block leading-tight">Salvar recebimento</span>
             </button>
             <button onClick={onAddCost} className="bg-white border border-gray-100 rounded-lg p-4 text-left space-y-4 shadow-sm active:scale-95 transition-all">
                <div className="w-8 h-8 bg-teal-50 text-teal-600 rounded-lg flex items-center justify-center"><ArrowRightLeft size={18} /></div>
                <span className="text-[11px] font-bold text-gray-700 block leading-tight">Salvar custo</span>
             </button>
          </div>
        </section>
      </div>

      <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4 text-center font-bold text-[#4a3f9e] shadow-inner z-10">
        Resultado: R$ {result.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      </div>
    </div>
  );
};

export default FinancialDetailView;
