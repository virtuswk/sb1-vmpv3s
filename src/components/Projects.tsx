export default function Projects() {
  const projects = [
    {
      title: "Tratamento de Água Municipal",
      location: "São Paulo",
      description: "Sistema de purificação de água em larga escala atendendo mais de 500.000 residentes",
      image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=crop&q=80"
    },
    {
      title: "Efluentes Industriais",
      location: "Rio de Janeiro",
      description: "Tratamento avançado de efluentes industriais para instalações fabris",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&q=80"
    },
    {
      title: "Planta de Reciclagem de Água",
      location: "Belo Horizonte",
      description: "Instalação inovadora de reciclagem de água para gestão sustentável",
      image: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div id="projects" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Projetos em Destaque
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Conheça nossas implementações bem-sucedidas em todo o Brasil
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    {project.location}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}