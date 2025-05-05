
import { Link } from "react-router-dom";
import { Home, Package, BarChart3, Settings, RefreshCw, UserCheck, X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Desktop sidebar - always visible */}
      <aside 
        className={`fixed md:static left-0 top-0 h-full z-30 transition-transform duration-300 transform
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:w-64 flex-col bg-[#0A2463] text-white`}
      >
        <div className="p-4 border-b border-blue-800 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">GAMMA3</h1>
            <p className="text-sm text-blue-300">Gestion de stock</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-blue-300 hover:text-white md:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            <li>
              <Link 
                to="/" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
                onClick={() => onClose()}
              >
                <Home className="mr-3 h-4 w-4" />
                Tableau de bord
              </Link>
            </li>
            <li>
              <Link 
                to="/items" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
                onClick={() => onClose()}
              >
                <Package className="mr-3 h-4 w-4" />
                Articles
              </Link>
            </li>
            <li>
              <Link 
                to="/movements" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
                onClick={() => onClose()}
              >
                <RefreshCw className="mr-3 h-4 w-4" />
                Mouvements
              </Link>
            </li>
            <li>
              <Link 
                to="/reports" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
                onClick={() => onClose()}
              >
                <BarChart3 className="mr-3 h-4 w-4" />
                Rapports
              </Link>
            </li>
            <li>
              <Link 
                to="/users" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
                onClick={() => onClose()}
              >
                <UserCheck className="mr-3 h-4 w-4" />
                Utilisateurs
              </Link>
            </li>
            <li>
              <Link 
                to="/settings" 
                className="flex items-center px-4 py-2 text-sm rounded-md hover:bg-blue-800"
                onClick={() => onClose()}
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
    </>
  );
}
