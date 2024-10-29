export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Sobre a Tekhne
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Com mais de duas décadas de experiência, a Tekhne lidera o setor em soluções inovadoras de tratamento de água e efluentes. Nosso compromisso com a sustentabilidade e o avanço tecnológico nos impulsiona a entregar resultados excepcionais para nossos clientes.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Nossa Missão</h3>
                <p className="mt-2 text-base text-gray-500">
                  Fornecer soluções sustentáveis de tratamento de água que protejam nosso meio ambiente e melhorem a qualidade de vida.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Nossa Visão</h3>
                <p className="mt-2 text-base text-gray-500">
                  Ser líder global em tecnologia inovadora de tratamento de água e preservação ambiental.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <img
              className="rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&q=80"
              alt="Estação de tratamento de água"
            />
          </div>
        </div>
      </div>
    </div>
  );
}