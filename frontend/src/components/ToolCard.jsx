import { Link } from "react-router-dom";

export const ToolCard = ({ title, description, link, bgColor, hoverColor }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition duration-300 group">
      <div
        className={`w-16 h-16 ${bgColor} rounded-lg flex items-center justify-center mb-6 ${hoverColor} group-hover:text-white transition duration-300`}
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        to={link}
        className="text-primary font-medium hover:text-secondary transition duration-300"
      >
        Usar herramienta →
      </Link>
    </div>
  );
};
