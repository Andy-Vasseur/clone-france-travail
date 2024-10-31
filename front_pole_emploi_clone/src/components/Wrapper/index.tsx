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
    {
      icon: "/icons/sync.svg",
      text: "Allocations et aides",
    },
    {
      icon: "",
      text: "Allocations et aides",
    },
    {
      icon: "",
      text: "Allocations et aides",
    },
    {
      icon: "",
      text: "Allocations et aides",
    },
    {
      icon: "",
      text: "Allocations et aides",
    },
    {
      icon: "",
      text: "Allocations et aides",
    },
    {
      icon: "",
      text: "Allocations et aides",
    },
  ];

  return (
    <div className="relative h-[447px] bg-red-800">
      {/* Background picture */}
      <div className="absolute w-full h-full">
        <img src={Banner} alt="banner" className="w-full h-full object-cover" />
      </div>
      <div className="absolute text-center z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Number of offers available */}
        <h1 className="text-4xl font-semibold text-white drop-shadow-md">
          1 156 252 offres d&apos;emploi disponibles
        </h1>
        {/* Search inputs */}
        <form
          method="POST"
          className="flex justify-between items-center mt-8 mb-4 w-full h-14 rounded-[4px] bg-white"
        >
          <div className="flex items-center py-2 px-3 w-[280px] h-12 text-[.8rem]">
            <span>
              <img src={WorkIcon} alt="work" className="w-6 h-6" />
            </span>
            <input
              type="text"
              placeholder="Métier, compétence, mot-clé, n° d'offre"
              className="p-2 w-80 h-12 focus:outline-none"
            />
          </div>
          <div className="flex items-center py-2 px-3 w-[280px] h-12 text-[.8rem] border-l-[1px]">
            <span>
              <img src={LocationIcon} alt="location" className="w-6 h-6" />
            </span>
            <input
              type="text"
              placeholder="Lieu de travail"
              className="p-2 w-80 h-12 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="p-2 w-|55px] h-[56px] text-sm rounded-tr-[4px] rounded-br-[4px] shadow-lg bg-[#FF5950] transition-colors duration-300 ease-in-out hover:bg-[#FF291D]"
          >
            <span>
              <img src={SearchIcon} alt="search" className="w-full h-full" />
            </span>
          </button>
        </form>
        {/* Redirection Link */}
        <Link
          to="#"
          className="text-white text-[.8rem] font-medium  hover:underline"
        >
          Rechercher des offres par région ou par secteur d&apos;activité
        </Link>

        {/* Bottom buttons */}
        <div className="flex justify-center items-center mt-8">
          {bottomLinks.map((link, index) => (
            <Link
              to="#"
              key={index}
              className="p-3 w-[84px] h-[84px] rounded-full bg-[#FF5950] hover:animate-spin-slow"
            >
              <span>
                <img
                  src={link.icon}
                  alt="sync"
                  className="w-full h-full rotate-90 scale-x-[-1]"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Exports
export default Wrapper;
