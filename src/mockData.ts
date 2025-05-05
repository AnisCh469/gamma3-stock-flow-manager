
import { Item, StockMovement, StorageLocation, User, Supplier } from './types';

// Mock Items
export const mockItems: Item[] = [
  {
    id: '1',
    code: 'A001',
    name: 'Hydraulic Valve Type A',
    description: 'Standard hydraulic valve for maintenance operations',
    unit: 'pc',
    packaging: 'Box of 5',
    classCode: 'HYD',
    subclassCode: 'VAL',
    familyCode: 'MNT',
    subfamilyCode: 'STD',
    minimumStock: 10,
    maximumStock: 50,
    securityStock: 15,
    currentStock: 25,
    locationCode: 'S01-R02-E01-C03',
    status: 'active',
    createdAt: '2023-01-15T10:30:00Z',
    updatedAt: '2024-04-20T14:15:00Z',
  },
  {
    id: '2',
    code: 'E045',
    name: 'Electronic Control Module',
    description: 'Control module for navigation systems',
    unit: 'pc',
    packaging: 'Individual',
    classCode: 'ELE',
    subclassCode: 'CTR',
    familyCode: 'NAV',
    subfamilyCode: 'MOD',
    minimumStock: 2,
    maximumStock: 10,
    securityStock: 4,
    currentStock: 3,
    locationCode: 'S02-R01-E03-C02',
    status: 'active',
    createdAt: '2023-02-10T09:45:00Z',
    updatedAt: '2024-05-01T11:20:00Z',
  },
  {
    id: '3',
    code: 'M107',
    name: 'Mechanical Gasket Set',
    description: 'Complete set of gaskets for engine maintenance',
    unit: 'set',
    packaging: 'Box of 1 set',
    classCode: 'MEC',
    subclassCode: 'GSK',
    familyCode: 'ENG',
    subfamilyCode: 'MNT',
    minimumStock: 5,
    maximumStock: 20,
    securityStock: 8,
    currentStock: 4,
    locationCode: 'S01-R03-E02-C01',
    status: 'blocked',
    createdAt: '2023-03-05T15:20:00Z',
    updatedAt: '2024-05-02T10:30:00Z',
  },
];

// Mock Stock Movements
export const mockMovements: StockMovement[] = [
  {
    id: '1',
    type: 'entry',
    itemId: '1',
    quantity: 15,
    documentRef: 'PO-2024-001',
    date: '2024-05-01T09:30:00Z',
    userId: '1',
    notes: 'Regular scheduled delivery',
  },
  {
    id: '2',
    type: 'exit',
    itemId: '2',
    quantity: 2,
    documentRef: 'REQ-2024-015',
    date: '2024-05-02T11:45:00Z',
    userId: '2',
    notes: 'Urgent maintenance request',
  },
  {
    id: '3',
    type: 'return',
    itemId: '3',
    quantity: 1,
    documentRef: 'RET-2024-007',
    date: '2024-05-03T14:20:00Z',
    userId: '1',
    notes: 'Unused parts from maintenance operation',
  },
];

// Mock Storage Locations
export const mockLocations: StorageLocation[] = [
  {
    id: '1',
    code: 'S01-R02-E01-C03',
    section: 'S01',
    shelf: 'R02',
    rack: 'E01',
    bin: 'C03',
    description: 'Hydraulic components section',
  },
  {
    id: '2',
    code: 'S02-R01-E03-C02',
    section: 'S02',
    shelf: 'R01',
    rack: 'E03',
    bin: 'C02',
    description: 'Electronic components section',
  },
  {
    id: '3',
    code: 'S01-R03-E02-C01',
    section: 'S01',
    shelf: 'R03',
    rack: 'E02',
    bin: 'C01',
    description: 'Mechanical components section',
  },
];

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Captain Silva',
    email: 'silva@gamma3.org',
    role: 'admin',
  },
  {
    id: '2',
    name: 'Lt. Martinez',
    email: 'martinez@gamma3.org',
    role: 'stockManager',
  },
  {
    id: '3',
    name: 'Sgt. Thompson',
    email: 'thompson@gamma3.org',
    role: 'receivingAgent',
  },
];

// Mock Suppliers
export const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'AeroTech Systems',
    contactPerson: 'Jean Dupont',
    email: 'contact@aerotech.com',
    phone: '+33 1 23 45 67 89',
    address: '15 Rue de l\'Aviation, 75015 Paris, France',
  },
  {
    id: '2',
    name: 'MechaNaval Parts',
    contactPerson: 'Maria Rodriguez',
    email: 'supplies@mechanaval.com',
    phone: '+33 1 98 76 54 32',
    address: '42 Avenue Maritime, 13016 Marseille, France',
  },
];
