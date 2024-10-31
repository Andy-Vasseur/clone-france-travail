// Assets
import MarianneLogo from "/svg/marianne.svg";
import FranceTravailLogo from "/svg/france-travail.svg";

function Navigation() {
  return (
    <nav>
      <div>
        <span>
          <img src={MarianneLogo} alt="Logo de la Marianne" />
        </span>
        <span>
          <img src={FranceTravailLogo} alt="Logo de France travail" />
        </span>
        <div>Menu</div>
      </div>

      <div>{/* ad */}</div>

      <div>
        <div>Connexion</div>
        <div>Rechercher</div>
      </div>
    </nav>
  );
}

// Exports
export default Navigation;
