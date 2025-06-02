const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Herramientas Profesionales para PDFs
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Manipula, edita y protege tus documentos PDF con nuestras
            herramientas avanzadas. Rápido, seguro y fácil de usar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
