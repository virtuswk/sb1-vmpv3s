import { Droplets } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Droplets className="h-8 w-8 text-blue-400" />
        </div>
        <div className="mt-8 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Tekhne. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}