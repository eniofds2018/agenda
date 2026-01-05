
import React, { useState } from 'react';
import { ChevronDown, Filter, Info, Award } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const ManagementView: React.FC = () => {
  const [period, setPeriod] = useState('Mês atual');

  const ChartPlaceholder = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-6 flex flex-col">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <h3 className="text-gray-800 font-bold text-base">{title}</h3>
          {subtitle && <p className="text-gray-400 text-[10px]">{subtitle}</p>}
        </div>
        <Info size={16} className="text-gray-300" />
      </div>

      <div className="h-40 w-full flex flex-col items-center justify-center text-center space-y-4 bg-gray-50/50 rounded-lg border border-dashed border-gray-200">
         {/* Simple Visual Placeholder */}
         <div className="flex items-end gap-2 h-16">
            <div className="w-3 bg-gray-200 rounded-t h-1/2"></div>
            <div className="w-3 bg-gray-200 rounded-t h-3/4"></div>
            <div className="w-3 bg-gray-200 rounded-t h-1/3"></div>
            <div className="w-3 bg-gray-200 rounded-t h-full"></div>
         </div>
         <p className="text-gray-400 text-xs px-8">Nenhuma informação disponível para o período selecionado.</p>
      </div>

      <button className="self-center bg-purple-100 text-[#4a3f9e] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1 active:scale-95 transition-all">
        <Award size={12} className="fill-current" />
        TOP
      </button>
    </div>
  );

  return (
    <div className="p-4 space-y-4 animate-in fade-in slide-in-from-right-2 duration-500">
      
      {/* Filters Header */}
      <div className="flex gap-2">
        <div className="flex-1 bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm">
          <span className="text-sm text-gray-500">Você tá vendo: <span className="font-bold text-[#4a3f9e]">{period}</span></span>
          <ChevronDown size={18} className="text-[#4a3f9e]" />
        </div>
        <button className="p-3 bg-white border border-gray-200 rounded-lg text-[#4a3f9e] shadow-sm">
          <Filter size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <ChartPlaceholder title="Receita x Custo" />
        <ChartPlaceholder title="Recebido x Custos pagos" />
        <ChartPlaceholder title="Recebido x Em atraso" />
        
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-4 text-center">
           <div className="flex justify-between items-center text-left mb-6">
              <h3 className="text-gray-800 font-bold text-base">Custos pagos</h3>
              <Info size={16} className="text-gray-300" />
           </div>
           <div className="h-32 flex items-center justify-center bg-gray-50/50 border border-dashed border-gray-200 rounded-lg">
              <span className="text-gray-200 text-6xl font-black italic">$</span>
           </div>
           <p className="text-gray-400 text-xs">Nenhuma informação disponível</p>
           <button className="mx-auto bg-purple-100 text-[#4a3f9e] text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
            <Award size={12} className="fill-current" />
            TOP
          </button>
        </div>

        <ChartPlaceholder title="Valores a receber X Custos previstos" />
        <ChartPlaceholder title="Top 5 melhores clientes" subtitle="Baseado em pedidos concluídos" />
      </div>
    </div>
  );
};

export default ManagementView;
