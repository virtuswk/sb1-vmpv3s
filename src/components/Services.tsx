import { Droplets, Factory, Recycle, FlaskConical } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Purificação de Água",
      description: "Sistemas de purificação de última geração para água potável limpa e segura",
      icon: Droplets,
    },
    {
      title: "Tratamento Industrial",
      description: "Soluções personalizadas de tratamento de efluentes para aplicações industriais",
      icon: Factory,
    },
    {
      title: "Reciclagem de Água",
      description: "Sistemas sustentáveis de reciclagem de água para conservação ambiental",
      icon: Recycle,
    },
    {
      title: "Análise de Qualidade",
      description: "Testes laboratoriais avançados e monitoramento da qualidade da água",
      icon: FlaskConical,
    },
  ];

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Soluções completas de tratamento de água para todas as necessidades
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-50 text-blue-600 ring-4 ring-white">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}