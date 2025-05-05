
import { Link } from "react-router-dom";
import { Home, Package, BarChart3, Settings, RefreshCw, UserCheck } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 flex-col bg-[#0A2463] text-white">
      <div className="p-4 border-b border-blue-800">
        <h1 className="text-xl font-bold">GAMMA3</h1>
        <p className="text-sm text-blue-300">Gestion de stock</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          <li>
            <Link 
              to="/" 
              className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
            >
              <Home className="mr-3 h-4 w-4" />
              Tableau de bord
            </Link>
          </li>
          <li>
            <Link 
              to="/items" 
              className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
            >
              <Package className="mr-3 h-4 w-4" />
              Articles
            </Link>
          </li>
          <li>
            <Link 
              to="/movements" 
              className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
            >
              <RefreshCw className="mr-3 h-4 w-4" />
              Mouvements
            </Link>
          </li>
          <li>
            <Link 
              to="/reports" 
              className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
            >
              <BarChart3 className="mr-3 h-4 w-4" />
              Rapports
            </Link>
          </li>
          <li>
            <Link 
              to="/users" 
              className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
            >
              <UserCheck className="mr-3 h-4 w-4" />
              Utilisateurs
            </Link>
          </li>
          <li>
            <Link 
              to="/settings" 
              className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
            >
              <Settings className="mr-3 h-4 w-4" />
              Paramètres
            </Link>
          </li>
        </ul>
      </nav>
      
      <div className="p-4 border-t border-blue-800">
        <p className="text-xs text-blue-300">Version 1.0.0</p>
      </div>
    </aside>
  );
}
