// Imports
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

function Homepage() {
  return (
    <div className="min-h-screen bg-[#E5E9EC]">
      <Wrapper />
      <div className="py-5 px-6 text-center bg-white">
        <h2 className="text-4xl font-medium text-center">Entreprise</h2>
        <p className="my-5 text-sm">
          Vous êtes une entreprise ou un particulier employeur ? France Travail
          vous propose un espace dédié !
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="#"
            className="py-2 px-4 min-h-6 text-white text-xs uppercase rounded-full bg-[#599d78] transition-colors duration-300 ease-in-out hover:bg-[#4D8869]"
          >
            Entreprise
          </Link>
          <Link
            to="#"
            className="py-2 px-4 min-h-6 text-white text-xs uppercase rounded-full bg-[#4eb6af] transition-colors duration-300 ease-in-out hover:bg-[#24A29A]"
          >
            Particulier Employeur
          </Link>
        </div>
      </div>
    </div>
  );
}

// Exports
export default Homepage;
