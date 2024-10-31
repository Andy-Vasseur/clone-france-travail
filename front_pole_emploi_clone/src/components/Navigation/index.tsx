// Imports
import { Link } from "react-router-dom";

// Logos
import MarianneLogo from "/svg/marianne.svg";
import FranceTravailLogo from "/svg/france-travail.svg";

// Icons
import MenuIcon from "/icons/menu.svg";
import CloseIcon from "/icons/close.svg";
import UserIcon from "/icons/user.svg";
import SearchIcon from "/icons/search.svg";

function Navigation() {
  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <nav className="flex justify-between items-center p-4 max-h-20 text-black bg-white">
      <div className="flex justify-center items-center w-[300px]">
        <span className="p-1 w-[61px] h-full">
          <img
            src={MarianneLogo}
            alt="Logo de la Marianne"
            className="w-full h-full"
          />
        </span>
        <Link
          to="/"
          className="ml-4 h-11"
          title="Retourner à l'accueil de France Travail"
        >
          <img
            src={FranceTravailLogo}
            alt="Logo de France travail"
            className="w-full h-full"
          />
        </Link>
        <div className="flex justify-center items-center h-14 border-l-[1px]">
          <button
            className="flex items-center ml-2 text-xs uppercase"
            onClick={handleButtonClick}
          >
            <span className="flex justify-center items-center p-1 w-8 h-8">
              <img src={MenuIcon} alt="Menu" className="w-8 h-8" />
            </span>
            Menu
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center w-[467px] border-2 border-black">
        <h3>This is a ad, please don&apos;t mind it.</h3>
      </div>

      <div className="flex justify-center items-center space-x-6 w-[252px]">
        <button className="flex justify-center items-center h-14 text-xs uppercase">
          <span>
            <img src={UserIcon} alt="User" className="w-8 h-8" />
          </span>
          Connexion
        </button>
        <button className="flex justify-center items-center h-14 text-xs uppercase">
          <span>
            <img src={SearchIcon} alt="Search" className="w-8 h-8" />
          </span>
          Rechercher
        </button>
      </div>
    </nav>
  );
}

// Exports
export default Navigation;
