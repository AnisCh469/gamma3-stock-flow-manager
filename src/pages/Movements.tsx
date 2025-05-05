
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { RefreshCw, Plus, FileDown, TrendingDown, TrendingUp } from "lucide-react";
import { mockMovements, mockItems, mockUsers } from "../mockData";
import { StockMovement } from "../types";

export default function Movements() {
  // Sort movements by date (newest first)
  const sortedMovements = [...mockMovements].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Get item name from ID
  const getItemName = (itemId: string) => {
    const item = mockItems.find(item => item.id === itemId);
    return item ? item.name : "Article inconnu";
  };

  // Get item code from ID
  const getItemCode = (itemId: string) => {
    const item = mockItems.find(item => item.id === itemId);
    return item ? item.code : "---";
  };

  // Get user name from ID
  const getUserName = (userId: string) => {
    const user = mockUsers.find(user => user.id === userId);
    return user ? user.name : "Utilisateur inconnu";
  };

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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <RefreshCw className="h-6 w-6" /> Mouvements de Stock
          </h1>
          <p className="text-gray-500">Suivi des entrées, sorties et transferts</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" /> Exporter
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Nouveau Mouvement
          </Button>
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableCaption>Historique des mouvements de stock</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Article</TableHead>
              <TableHead className="text-right">Quantité</TableHead>
              <TableHead>Référence</TableHead>
              <TableHead>Effectué par</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedMovements.map((movement) => (
              <TableRow key={movement.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {movement.type === 'entry' || movement.type === 'return' ? (
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-blue-600" />
                    )}
                    <span className={
                      movement.type === 'entry' || movement.type === 'return' 
                        ? 'text-green-600'
                        : 'text-blue-600'
                    }>
                      {getMovementType(movement.type)}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{formatDate(movement.date)}</TableCell>
                <TableCell>
                  <div>
                    <span className="font-medium">{getItemName(movement.itemId)}</span>
                    <p className="text-xs text-gray-500">{getItemCode(movement.itemId)}</p>
                  </div>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {movement.quantity}
                </TableCell>
                <TableCell>{movement.documentRef}</TableCell>
                <TableCell>{getUserName(movement.userId)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
