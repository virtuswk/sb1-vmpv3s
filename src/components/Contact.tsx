import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Fale com nossos especialistas para suas necessidades de tratamento de água
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
              <Phone className="h-6 w-6" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Telefone</h3>
              <p className="mt-2 text-base text-gray-500">
                +55 (11) 1234-5678
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
              <Mail className="h-6 w-6" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">E-mail</h3>
              <p className="mt-2 text-base text-gray-500">
                contato@tekhne.com.br
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
              <MapPin className="h-6 w-6" />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
              <p className="mt-2 text-base text-gray-500">
                Av. Paulista, 1000<br />
                São Paulo, SP
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md"
                ></textarea>
              </div>
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}