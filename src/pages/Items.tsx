
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Package, Search, Plus, Filter } from "lucide-react";
import { mockItems } from "../mockData";
import { Badge } from "@/components/ui/badge";

export default function Items() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredItems = mockItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Package className="h-6 w-6" /> Articles
          </h1>
          <p className="text-gray-500">Gestion des articles et fiches signalétiques</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nouvel Article
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
        <div className="relative w-full md:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Rechercher un article..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" /> Filtres
        </Button>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableCaption>Liste des articles - Total: {filteredItems.length}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Code</TableHead>
              <TableHead>Désignation</TableHead>
              <TableHead>Classification</TableHead>
              <TableHead className="text-right">Stock</TableHead>
              <TableHead>Emplacement</TableHead>
              <TableHead>Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.code}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.classCode}-{item.subclassCode}</TableCell>
                <TableCell className="text-right">
                  <span className={`${
                    item.currentStock <= item.minimumStock 
                      ? 'text-red-600' 
                      : item.currentStock <= item.securityStock 
                        ? 'text-amber-600' 
                        : 'text-green-600'
                  }`}>
                    {item.currentStock}
                  </span>
                  <span className="text-gray-400 text-xs ml-1">
                    /{item.minimumStock}
                  </span>
                </TableCell>
                <TableCell>{item.locationCode}</TableCell>
                <TableCell>
                  {item.status === 'active' && (
                    <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200">Actif</Badge>
                  )}
                  {item.status === 'blocked' && (
                    <Badge variant="default" className="bg-red-100 text-red-800 hover:bg-red-200">Bloqué</Badge>
                  )}
                  {item.status === 'discontinued' && (
                    <Badge variant="default" className="bg-gray-100 text-gray-800 hover:bg-gray-200">Discontinué</Badge>
                  )}
                </TableCell>
              </TableRow>
            ))}
            {filteredItems.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                  Aucun article trouvé
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
