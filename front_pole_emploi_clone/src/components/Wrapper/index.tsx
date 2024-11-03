// Imports
import { Link } from "react-router-dom";

// Images
import Banner from "/img/banner.jpg";

// Icons
import WorkIcon from "/icons/work.svg";
import LocationIcon from "/icons/location.svg";
import SearchIcon from "/icons/search-white.svg";

function Wrapper() {
  const bottomLinks = [
    { icon: "/icons/sync.svg", text: "M'actualiser" },
    {
      icon: "/icons/espace-personnel.svg",
      text: "Gérer mon dossier, Publier mon CV",
    },
    {
      icon: "/icons/inscription.svg",
      text: "M'inscrire, me réinscrire (demandeur d'emploi)",
    },
    { icon: "/icons/documents.svg", text: "Allocations et aides" },
    { icon: "/icons/stack.svg", text: "Trouver ma formation" },
    {
      icon: "/icons/emploi-store.svg",
      text: "Explorer les services en ligne de l'emploi",
    },
    { icon: "/icons/dots.svg", text: "Plus de services" },
  ];

  return (
    <div className="relative h-[447px]">
      {/* Background picture */}
      <div className="absolute w-full h-full">
        <img src={Banner} alt="banner" className="w-full h-full object-cover" />
      </div>

      {/* Main content */}
      <div className="absolute text-center z-10 top-[15%] left-1/2 transform -translate-x-1/2 w-full max-w-[850px] px-4">
        {/* Number of offers available */}
        <h1 className="text-4xl font-medium text-white drop-shadow-md">
          1 156 252 offres d'emploi disponibles
        </h1>

        {/* Search inputs */}
        <form
          method="POST"
          className="flex justify-center items-center mt-8 mb-4 max-w-[800px] mx-auto h-14 rounded-md bg-white shadow-lg overflow-hidden"
        >
          <div className="flex items-center w-1/2 h-full px-3 border-r border-gray-200">
            <img src={WorkIcon} alt="work" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Métier, compétence, mot-clé, n° d'offre"
              className="flex-grow text-sm focus:outline-none"
            />
          </div>
          <div className="flex items-center w-1/2 h-full px-3">
            <img src={LocationIcon} alt="location" className="w-5 h-5 mr-2" />
            <input
              type="text"
              placeholder="Lieu de travail"
              className="flex-grow text-sm focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center w-14 h-full bg-[#FF5950] hover:bg-[#FF291D] transition duration-300"
          >
            <img src={SearchIcon} alt="search" className="w-10 h-10" />
          </button>
        </form>

        {/* Redirection Link */}
        <Link to="#" className="text-white text-sm font-medium hover:underline">
          Rechercher des offres par région ou par secteur d'activité
        </Link>
      </div>

      {/* Bottom buttons */}
      <div className="absolute bottom-0 w-full py-4 bg-fade-to-top">
        <div className="flex justify-center space-x-6 max-w-5xl mx-auto">
          {bottomLinks.map((link, index) => (
            <Link
              to="#"
              key={index}
              className="flex flex-col items-center text-center text-white group rounded-full"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#FF5950] transition transform duration-300 group-hover:scale-105">
                <img src={link.icon} alt={link.text} className="w-12 h-12" />
              </div>
              <span className="mt-2 text-xs w-32 text-center">{link.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Exports
export default Wrapper;
