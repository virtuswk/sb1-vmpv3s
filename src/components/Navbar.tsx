import { Droplets, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Droplets className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Tekhne</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Início</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600">Projetos</a>
            <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Contato
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Início</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Serviços</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Sobre</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Projetos</a>
            <a href="#contact" className="block px-3 py-2 text-blue-600 font-medium">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
}