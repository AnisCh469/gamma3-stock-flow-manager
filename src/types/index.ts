
export interface Item {
  id: string;
  code: string;
  name: string;
  description: string;
  unit: string;
  packaging: string;
  classCode: string;
  subclassCode: string;
  familyCode: string;
  subfamilyCode: string;
  minimumStock: number;
  maximumStock: number;
  securityStock: number;
  currentStock: number;
  locationCode: string;
  status: 'active' | 'blocked' | 'discontinued';
  createdAt: string;
  updatedAt: string;
}

export interface StockMovement {
  id: string;
  type: 'entry' | 'exit' | 'transfer' | 'return';
  itemId: string;
  quantity: number;
  documentRef: string;
  date: string;
  userId: string;
  notes?: string;
}

export interface StorageLocation {
  id: string;
  code: string;
  section: string;
  shelf: string;
  rack: string;
  bin: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'stockManager' | 'receivingAgent' | 'viewer';
}

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  address: string;
}
