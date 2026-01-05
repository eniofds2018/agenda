
import React from 'react';

export type Tab = 'home' | 'management' | 'help';

export type ViewState = 
  | 'main' 
  | 'orders_list' 
  | 'agenda_list' 
  | 'financial_detail' 
  | 'clients_list' 
  | 'parts_catalog' 
  | 'services_catalog'
  | 'form_order'
  | 'form_client'
  | 'form_receipt'
  | 'form_cost'
  | 'form_appointment';

export interface CategoryItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}
