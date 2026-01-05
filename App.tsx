
import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Home as HomeIcon, 
  BarChart3, 
  Plus,
  ChevronLeft,
  X
} from 'lucide-react';
import { Tab, ViewState } from './types';
import HomeView from './components/HomeView';
import ManagementView from './components/ManagementView';
import HelpView from './components/HelpView';
import Sidebar from './components/Sidebar';
import ListView from './components/ListView';
import FinancialDetailView from './components/FinancialDetailView';
import OrderForm from './components/forms/OrderForm';
import ClientForm from './components/forms/ClientForm';
import TransactionForm from './components/forms/TransactionForm';
import AppointmentForm from './components/forms/AppointmentForm';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [currentView, setCurrentView] = useState<ViewState>('main');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSplashVisible, setIsSplashVisible] = useState(true);
  
  // App Data State
  const [orders, setOrders] = useState<any[]>(() => JSON.parse(localStorage.getItem('orders') || '[]'));
  const [clients, setClients] = useState<any[]>(() => JSON.parse(localStorage.getItem('clients') || '[]'));
  const [transactions, setTransactions] = useState<any[]>(() => JSON.parse(localStorage.getItem('transactions') || '[]'));
  const [appointments, setAppointments] = useState<any[]>(() => JSON.parse(localStorage.getItem('appointments') || '[]'));

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('clients', JSON.stringify(clients));
    localStorage.setItem('transactions', JSON.stringify(transactions));
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [orders, clients, transactions, appointments]);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSaveOrder = (order: any) => {
    setOrders([order, ...orders]);
    setCurrentView('orders_list');
  };

  const handleSaveClient = (client: any) => {
    setClients([client, ...clients]);
    setCurrentView('clients_list');
  };

  const handleSaveTransaction = (transaction: any) => {
    setTransactions([transaction, ...transactions]);
    setCurrentView('financial_detail');
  };

  const handleSaveAppointment = (appointment: any) => {
    setAppointments([appointment, ...appointments]);
    setCurrentView('agenda_list');
  };

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    setActiveTab('home'); // Ensure we are on home context if navigating from sidebar
  };

  if (isSplashVisible) {
    return (
      <div className="fixed inset-0 bg-[#4a3f9e] flex items-center justify-center z-[100]">
        <div className="text-[#c3e600] text-8xl font-black italic">B</div>
      </div>
    );
  }

  const renderContent = () => {
    if (activeTab === 'help') return <HelpView onClose={() => setActiveTab('home')} />;
    if (activeTab === 'management') return <ManagementView />;

    switch (currentView) {
      case 'orders_list': 
        return <ListView items={orders} title="Pedidos" type="orders" onBack={() => setCurrentView('main')} onAdd={() => setCurrentView('form_order')} />;
      case 'agenda_list': 
        return <ListView items={appointments} title="Agenda" type="agenda" onBack={() => setCurrentView('main')} onAdd={() => setCurrentView('form_appointment')} />;
      case 'financial_detail': 
        return <FinancialDetailView transactions={transactions} onBack={() => setCurrentView('main')} onAddReceipt={() => setCurrentView('form_receipt')} onAddCost={() => setCurrentView('form_cost')} />;
      case 'clients_list': 
        return <ListView items={clients} title="Clientes" type="clients" onBack={() => setCurrentView('main')} onAdd={() => setCurrentView('form_client')} />;
      case 'parts_catalog': 
        return <ListView items={[]} title="Catálogo de Peça" type="parts" onBack={() => setCurrentView('main')} onAdd={() => {}} />;
      case 'services_catalog': 
        return <ListView items={[]} title="Catálogo de serviços" type="services" onBack={() => setCurrentView('main')} onAdd={() => {}} />;
      
      // Forms
      case 'form_order': return <OrderForm onSave={handleSaveOrder} onClose={() => setCurrentView('orders_list')} />;
      case 'form_client': return <ClientForm onSave={handleSaveClient} onClose={() => setCurrentView('clients_list')} />;
      case 'form_receipt': return <TransactionForm type="receipt" onSave={handleSaveTransaction} onClose={() => setCurrentView('financial_detail')} />;
      case 'form_cost': return <TransactionForm type="cost" onSave={handleSaveTransaction} onClose={() => setCurrentView('financial_detail')} />;
      case 'form_appointment': return <AppointmentForm onSave={handleSaveAppointment} onClose={() => setCurrentView('agenda_list')} />;
      
      default: return <HomeView onNavigate={(view) => setCurrentView(view)} />;
    }
  };

  const isForm = currentView.startsWith('form_');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 max-w-md mx-auto relative shadow-2xl overflow-hidden border-x border-gray-200">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onNavigate={handleNavigate} />

      {!isForm && (
        <header className="sticky top-0 z-30 bg-white border-b border-gray-100 flex items-center justify-between px-4 py-3">
          {currentView === 'main' ? (
            <button onClick={() => setIsSidebarOpen(true)} className="p-1">
              <div className="space-y-1.5 w-6">
                <div className="h-0.5 w-6 bg-[#4a3f9e] rounded-full"></div>
                <div className="h-0.5 w-4 bg-orange-400 rounded-full"></div>
                <div className="h-0.5 w-6 bg-[#4a3f9e] rounded-full"></div>
              </div>
            </button>
          ) : (
            <button onClick={() => setCurrentView('main')} className="text-[#4a3f9e]">
              <ChevronLeft size={28} />
            </button>
          )}
          
          <h1 className="text-[#4a3f9e] font-bold text-lg">
            {currentView === 'main' ? (activeTab === 'home' ? 'Início' : 'Gestão') : ''}
          </h1>
          
          <button onClick={() => setActiveTab('help')} className="text-[#4a3f9e]">
            <MessageSquare className="w-6 h-6" />
          </button>
        </header>
      )}

      <main className={`flex-1 overflow-y-auto ${!isForm ? 'pb-32' : ''} bg-white`}>
        {renderContent()}
      </main>

      {!isForm && currentView === 'main' && (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-100 z-40 pb-safe">
          <div className="px-4 py-3">
            <button 
              onClick={() => setCurrentView('form_order')}
              className="w-full bg-[#4a3f9e] text-white py-3.5 rounded-lg font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Criar novo pedido
            </button>
          </div>
          <nav className="flex justify-around items-center py-2 px-4">
            <button 
              onClick={() => {
                setActiveTab('home');
                setCurrentView('main');
              }} 
              className={`flex flex-col items-center gap-1 ${activeTab === 'home' ? 'text-[#4a3f9e]' : 'text-gray-400'}`}
            >
              <HomeIcon className="w-6 h-6" />
              <span className="text-xs font-medium">Início</span>
            </button>
            <button 
              onClick={() => {
                setActiveTab('management');
                setCurrentView('main');
              }} 
              className={`flex flex-col items-center gap-1 ${activeTab === 'management' ? 'text-[#4a3f9e]' : 'text-gray-400'}`}
            >
              <BarChart3 className="w-6 h-6" />
              <span className="text-xs font-medium">Gestão</span>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default App;
