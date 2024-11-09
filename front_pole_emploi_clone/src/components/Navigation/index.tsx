// Imports
import { useState } from "react";
import { Link } from "react-router-dom";

// Logos
import MarianneLogo from "/svg/marianne.svg";
import FranceTravailLogo from "/svg/france-travail.svg";

// Icons
import MenuIcon from "/icons/menu.svg";
import CloseIcon from "/icons/cross.svg";
import UserIcon from "/icons/user.svg";
import SearchIcon from "/icons/search.svg";

function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle the dropdown state
  };

  return (
    <nav className="flex justify-between items-center px-2 py-4 max-h-20 text-black shadow-lg bg-white relative">
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
        <div className="flex justify-center items-center h-14 border-l-[1px] relative">
          <button
            className="flex items-center ml-2 text-xs uppercase"
            onClick={handleButtonClick}
          >
            <span className="flex justify-center items-center p-1 w-8 h-8">
              <img
                src={isDropdownOpen ? CloseIcon : MenuIcon}
                alt="Menu"
                className="w-8 h-8"
              />
            </span>
            Menu
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-lg border z-50">
              <ul className="flex flex-col p-2">
                <li className="p-2 hover:bg-gray-200">
                  <Link to="/page1">Page 1</Link>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <Link to="/page2">Page 2</Link>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <Link to="/page3">Page 3</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center items-center w-[467px] h-[60px] border-2 border-black">
        <h3>This is an ad, please don&apos;t mind it.</h3>
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
