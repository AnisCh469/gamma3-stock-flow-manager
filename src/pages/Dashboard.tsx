import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Package, 
  AlertTriangle, 
  TrendingDown, 
  TrendingUp,
  Clock,
  ChartPie,
  ChartBar 
} from "lucide-react";
import { mockItems, mockMovements } from "../mockData";
import { StockMovement } from "../types";
import { StockStatusChart } from "@/components/charts/StockStatusChart";
import { MovementTypeChart } from "@/components/charts/MovementTypeChart";
import { ItemCategoryChart } from "@/components/charts/ItemCategoryChart";

export default function Dashboard() {
  // Calculate stats
  const totalItems = mockItems.length;
  const lowStockItems = mockItems.filter(item => item.currentStock <= item.minimumStock).length;
  const blockedItems = mockItems.filter(item => item.status === 'blocked').length;

  // Get recent movements
  const recentMovements = [...mockMovements].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 5);

  // Display type in French
  const getMovementType = (type: StockMovement['type']) => {
    switch(type) {
      case 'entry': return 'Entrée';
      case 'exit': return 'Sortie';
      case 'transfer': return 'Transfert';
      case 'return': return 'Retour';
      default: return type;
    }
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Tableau de Bord</h1>
        <p className="text-gray-500">Aperçu du système de gestion de stock GAMMA3</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Articles Total</CardTitle>
            <Package className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalItems}</div>
            <p className="text-xs text-gray-500">Articles en stock</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Stock Faible</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{lowStockItems}</div>
            <p className="text-xs text-gray-500">Articles sous le seuil minimum</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Articles Bloqués</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{blockedItems}</div>
            <p className="text-xs text-gray-500">Articles non disponibles</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Mouvements Récents</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockMovements.length}</div>
            <p className="text-xs text-gray-500">Entrées et sorties</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 md:grid-cols-3">
        <StockStatusChart />
        <ItemCategoryChart />
        <MovementTypeChart />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Alertes de Stock</CardTitle>
            <CardDescription>Articles nécessitant attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockItems.filter(item => item.currentStock <= item.minimumStock).map(item => (
                <div key={item.id} className="flex items-center justify-between bg-amber-50 p-3 rounded-md">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Code: {item.code}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-amber-600">{item.currentStock} / {item.minimumStock}</p>
                    <p className="text-xs text-gray-500">Stock actuel / minimum</p>
                  </div>
                </div>
              ))}
              {mockItems.filter(item => item.currentStock <= item.minimumStock).length === 0 && (
                <div className="text-center py-4 text-gray-500">
                  Aucune alerte de stock
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Derniers Mouvements</CardTitle>
            <CardDescription>Activités récentes dans le stock</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMovements.map(movement => {
                const item = mockItems.find(i => i.id === movement.itemId);
                return (
                  <div key={movement.id} className="flex items-start gap-3">
                    <div className={`p-2 rounded-full ${
                      movement.type === 'entry' || movement.type === 'return' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      {movement.type === 'entry' || movement.type === 'return' ? (
                        <TrendingUp className="h-4 w-4 text-green-600" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">
                          {item?.name || 'Article inconnu'}
                        </p>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${
                          movement.type === 'entry' || movement.type === 'return' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {getMovementType(movement.type)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        {movement.quantity} unités • Ref: {movement.documentRef}
                      </p>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {formatDate(movement.date)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
