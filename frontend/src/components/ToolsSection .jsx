import { ToolCard } from "./ToolCard";

const ToolsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestras Herramientas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Todo lo que necesitas para trabajar con PDFs de manera profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ToolCard
            title="Watermark"
            description="Añade marcas de agua personalizadas a tus documentos PDF para proteger tu contenido."
            link="/watermark"
            bgColor="bg-blue-100"
            hoverColor="group-hover:bg-primary"
          />

          <ToolCard
            title="Split PDF"
            description="Divide documentos PDF grandes en archivos más pequeños según tus necesidades."
            link="/split"
            bgColor="bg-green-100"
            hoverColor="group-hover:bg-green-600"
          />

          <ToolCard
            title="Merge PDFs"
            description="Combina múltiples archivos PDF en un solo documento de manera rápida y sencilla."
            link="/merge"
            bgColor="bg-purple-100"
            hoverColor="group-hover:bg-purple-600"
          />

          <ToolCard
            title="Enumerate PDF"
            description="Añade numeración automática a las páginas de tus documentos PDF."
            link="/enumerate"
            bgColor="bg-orange-100"
            hoverColor="group-hover:bg-orange-600"
          />

          <ToolCard
            title="Security PDF"
            description="Protege tus documentos con contraseñas y controla los permisos de acceso."
            link="/security"
            bgColor="bg-red-100"
            hoverColor="group-hover:bg-red-600"
          />

          
        </div>
      </div>
    </section>
  );
};



export default ToolsSection;
