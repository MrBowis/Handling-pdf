const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Acerca de PDF Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos un equipo dedicado a crear herramientas simples, seguras y eficientes para el manejo de archivos PDF. Nuestra misión es ayudarte a trabajar con documentos de manera más profesional y rápida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nuestra misión</h3>
            <p>
              Queremos democratizar el acceso a herramientas de edición y gestión de PDFs que antes solo estaban disponibles en software costoso o complicado. Lo hacemos fácil, rápido y gratuito.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nuestro compromiso</h3>
            <p>
              Nos enfocamos en la seguridad y privacidad de tus documentos. Nada se guarda en nuestros servidores. Tus archivos son procesados directamente en tu navegador para mantener la confidencialidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
