
import { Bell, Search, Menu } from "lucide-react";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between">
      <div className="flex items-center md:hidden">
        <button className="text-gray-600">
          <Menu className="h-6 w-6" />
        </button>
      </div>
      
      <div className="flex items-center border rounded-md px-3 py-1 bg-gray-50 flex-1 max-w-md mx-4">
        <Search className="h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full border-0 bg-transparent focus:outline-none text-sm ml-2"
        />
      </div>
      
      <div className="flex items-center">
        <button className="relative p-2 text-gray-600">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="ml-4 flex items-center">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
            CS
          </div>
          <span className="ml-2 text-sm font-medium hidden md:block">Captain Silva</span>
        </div>
      </div>
    </header>
  );
}
