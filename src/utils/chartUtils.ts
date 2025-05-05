
import { Item, StockMovement } from "../types";
import { mockItems, mockMovements } from "../mockData";

// Prepare stock status data for pie chart
export const prepareStockStatusData = () => {
  const stockStatuses = mockItems.reduce((acc, item) => {
    let status = "Normal";
    
    if (item.currentStock <= item.minimumStock) {
      status = "Low";
    } else if (item.currentStock >= item.maximumStock) {
      status = "Excess";
    }
    
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(stockStatuses).map(([name, value]) => ({
    name,
    value,
  }));
};

// Prepare stock movement data for bar chart
export const prepareMovementTypeData = () => {
  const lastSixMonths = getLast6Months();
  
  const movementsByMonth = lastSixMonths.map(month => {
    const movementsInMonth = mockMovements.filter(m => 
      new Date(m.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }) === month
    );
    
    const entries = movementsInMonth.filter(m => m.type === 'entry').length;
    const exits = movementsInMonth.filter(m => m.type === 'exit').length;
    const transfers = movementsInMonth.filter(m => m.type === 'transfer').length;
    const returns = movementsInMonth.filter(m => m.type === 'return').length;
    
    return {
      month,
      'Entrées': entries,
      'Sorties': exits,
      'Transferts': transfers,
      'Retours': returns
    };
  });
  
  return movementsByMonth;
};

// Prepare item category distribution for pie chart
export const prepareItemCategoryData = () => {
  const categoryCounts = mockItems.reduce((acc, item) => {
    const category = item.classCode;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  return Object.entries(categoryCounts).map(([name, value]) => ({
    name,
    value,
  }));
};

// Helper function to get the last 6 months as strings
const getLast6Months = () => {
  const months = [];
  const today = new Date();
  
  for (let i = 5; i >= 0; i--) {
    const d = new Date();
    d.setMonth(today.getMonth() - i);
    months.push(d.toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' }));
  }
  
  return months;
};

// Prepare current stock value data
export const prepareCurrentStockData = () => {
  // For demonstration, we'll use class codes as categories
  const stockByClass = mockItems.reduce((acc, item) => {
    const classCode = item.classCode;
    if (!acc[classCode]) {
      acc[classCode] = {
        name: classCode,
        value: 0
      };
    }
    acc[classCode].value += item.currentStock;
    return acc;
  }, {} as Record<string, {name: string, value: number}>);
  
  return Object.values(stockByClass);
};
