
import React from 'react';
import { 
  X, 
  ChevronRight, 
  ClipboardList, 
  FileText, 
  DollarSign, 
  Calendar, 
  Box, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut,
  AlertTriangle,
  Award,
  Plus,
  RefreshCw,
  User
} from 'lucide-react';
import { ViewState } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewState) => void;
}

const MENU_ITEMS = [
  { label: 'Pedidos', icon: <ClipboardList />, color: 'text-purple-600', view: 'orders_list' as ViewState },
  { label: 'Documentos', icon: <FileText />, color: 'text-blue-600', view: 'main' as ViewState }, // Placeholder or documents view
  { label: 'Finanças & pagamentos', icon: <DollarSign />, color: 'text-green-600', view: 'financial_detail' as ViewState },
  { label: 'Agenda', icon: <Calendar />, color: 'text-teal-600', view: 'agenda_list' as ViewState },
  { label: 'Peças & serviços', icon: <Box />, color: 'text-indigo-600', view: 'parts_catalog' as ViewState },
  { label: 'Clientes', icon: <Users />, color: 'text-orange-600', view: 'clients_list' as ViewState },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onNavigate }) => {
  const handleNavigate = (view: ViewState) => {
    onNavigate(view);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <aside className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white z-[101] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} overflow-y-auto`}>
        <div className="p-6 space-y-8">
          
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* User Profile Header */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-[#4a3f9e] border-2 border-white shadow-sm">
                    <User size={32} />
                </div>
                <button className="absolute -bottom-1 -right-1 bg-[#4a3f9e] text-white p-1 rounded-full border-2 border-white">
                    <Plus size={14} strokeWidth={3} />
                </button>
            </div>
            <div className="flex-1">
              <p className="text-[#4a3f9e] font-semibold text-sm leading-tight">Adicione informações pessoais e do negócio</p>
            </div>
          </div>

          {/* Account Validation */}
          <button className="w-full flex items-center gap-3 text-orange-500 hover:bg-orange-50 p-2 rounded-lg transition-colors">
            <AlertTriangle size={20} />
            <span className="font-semibold text-sm">Validar minha conta</span>
          </button>

          {/* Preferences Section */}
          <div className="space-y-4">
             <h3 className="text-gray-900 font-bold text-base">Preferências</h3>
             <nav className="space-y-1">
                {MENU_ITEMS.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleNavigate(item.view)}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={item.color}>{item.icon}</div>
                      <span className="text-gray-700 font-medium">{item.label}</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
                  </button>
                ))}
             </nav>
          </div>

          {/* Plans Banner */}
          <button className="w-full bg-[#4a3f9e] text-white p-4 rounded-xl flex items-center justify-between shadow-lg shadow-purple-100 active:scale-[0.98] transition-all">
            <div className="text-left space-y-1">
                <p className="font-bold text-sm">Planos e preços</p>
                <p className="text-[10px] text-purple-100 opacity-80">Desbloqueie funcionalidades exclusivas agora</p>
            </div>
            <Award className="w-8 h-8 opacity-80" />
          </button>

          {/* Secondary Options */}
          <nav className="space-y-1">
             <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                <div className="flex items-center gap-4">
                  <Settings className="text-gray-500" size={20} />
                  <span className="text-gray-700 font-medium">Outras configurações</span>
                </div>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500" />
             </button>
             <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors group">
                <div className="flex items-center gap-4">
                  <HelpCircle className="text-gray-500" size={20} />
                  <span className="text-gray-700 font-medium">Preciso de ajuda</span>
                </div>
                <ChevronRight size={18} className="text-gray-300 group-hover:text-gray-500" />
             </button>
             <button className="w-full flex items-center justify-between p-3 hover:bg-red-50 rounded-xl transition-colors group">
                <div className="flex items-center gap-4">
                  <LogOut className="text-red-500" size={20} />
                  <span className="text-red-600 font-medium">Sair da conta</span>
                </div>
                <ChevronRight size={18} className="text-red-300 group-hover:text-red-500" />
             </button>
          </nav>

          {/* Version / Sync */}
          <div className="flex justify-end pt-4">
             <button className="text-gray-300 hover:text-gray-500 transition-colors">
                <RefreshCw size={20} />
             </button>
          </div>

        </div>
      </aside>
    </>
  );
};

export default Sidebar;
