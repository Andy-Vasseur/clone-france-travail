// Icons
import UpArrow from "/icons/uparrow.svg";

function Footer() {
  const otherSitesLinks = [
    { name: "En région", link: "#" },
    { name: "Institutionnel", link: "#" },
    { name: "Mes événements emploi", link: "#" },
    { name: "France Travail TV", link: "#" },
    { name: "France Travail spectacle", link: "#" },
    { name: "Mobilité internationale", link: "#" },
    { name: "Les métiers porteurs", link: "#" },
    { name: "Data Emploi", link: "#" },
    { name: "Emploi Store", link: "#" },
    { name: "France Travail Salons en ligne", link: "#" },
    { name: "Services Publics +", link: "#" },
  ];

  const franceTravailLinks = [
    { name: "Votre agence France Travail", link: "#" },
    { name: "Info trafic", link: "#" },
    { name: "Sites utiles", link: "#" },
    { name: "Plan du site", link: "#" },
    { name: "Informations légales", link: "#" },
    { name: "Conditions générales d'utilisation", link: "#" },
    { name: "Protections des données personnelles", link: "#" },
    { name: "Cookies", link: "#" },
    { name: "Accessibilité partiellement conforme", link: "#" },
    { name: "Algorithmes", link: "#" },
    { name: "Nos partenaires", link: "#" },
    { name: "Annuaire des pages entreprises", link: "#" },
  ];

  const candidateLinks = [
    { name: "Mode d'emploi, le mag qui vous simplifie le travail", link: "#" },
    { name: "Questions et Contacts - candidat", link: "#" },
    { name: "Où envoyer mes bulletins de salaire", link: "#" },
    { name: "Le calendrier des paiements", link: "#" },
    {
      name: "Guide des simulateurs d’allocations et aides en ligne",
      link: "#",
    },
    { name: "Soyez vigilants !", link: "#" },
    { name: "Votre projet professionnel", link: "#" },
    { name: "Vos recherches", link: "#" },
    { name: "France Travail et vous", link: "#" },
    { name: "En formation", link: "#" },
    { name: "Découvrir le marché du travail", link: "#" },
    { name: "MétierScope", link: "#" },
  ];

  const employerLinks = [
    {
      name: "Solution recrutement, le webzine du recrutement pour les entreprises",
      link: "#",
    },
    { name: "Questions et Contacts - employeur", link: "#" },
    { name: "Conseils pour recruter", link: "#" },
    { name: "Conseils pour vos déclarations et cotisations", link: "#" },
    { name: "Rechercher des candidats en toute autonomie", link: "#" },
    { name: "Remettre une attestation employeur", link: "#" },
    { name: "Publier une offre", link: "#" },
    { name: "Particulier employeur", link: "#" },
    { name: "Information sur le marché du travail", link: "#" },
  ];

  const returnToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <div className="grid grid-cols-4 place-items-center py-10 px-6 bg-[#2B2E30]">
        {/* first column */}
        <div className="flex flex-col items-center h-full w-64">
          <div className="h-[30px] mb-4">
            <h3 className="text-white text-xs uppercase">
              Autres sites France Travail
            </h3>
            <span className="relative left-2/4 inline-block -ml-[30px] w-[60px] h-1 bg-black" />
          </div>
          <ul className="flex flex-col w-full leading-[1.42857] text-white">
            {otherSitesLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="text-[12px] hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* second column */}
        <div className="flex flex-col items-center h-full w-64">
          <div className="h-[30px] mb-4">
            <h3 className="text-white text-xs uppercase">
              Sur FranceTravail.fr
            </h3>
            <span className="relative left-2/4 inline-block -ml-[30px] w-[60px] h-1 bg-[#003d7c]" />
          </div>
          <ul className="flex flex-col w-full leading-[1.42857] text-[#CCCCCC] list-disc">
            {franceTravailLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="text-[12px] hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* third column */}
        <div className="flex flex-col items-center h-full w-64">
          <div className="h-[30px] mb-4">
            <h3 className="text-white text-xs uppercase">Candidat</h3>
            <span className="relative left-2/4 inline-block -ml-[30px] w-[60px] h-1 bg-[#ff5950]" />
          </div>
          <ul className="flex flex-col w-full leading-[1.42857] text-[#CCCCCC] list-disc">
            {candidateLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="text-[12px] hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* fourth column */}
        <div className="flex flex-col items-center h-full w-64">
          <div className="h-[30px] mb-4">
            <h3 className="text-white text-xs uppercase">Employeur</h3>
            <span className="relative left-2/4 inline-block -ml-[30px] w-[60px] h-1 bg-[#599d78]" />
          </div>
          <ul className="flex flex-col w-full leading-[1.42857] text-[#CCCCCC] list-disc">
            {employerLinks.map((link) => (
              <li key={link.name}>
                <a href={link.link} className="text-[12px] hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-[190px] bg-[#3E4249]">
        <button
          onClick={returnToTop}
          className="flex justify-center items-center py-2 px-4 w-fit min-h-[34px] text-white text-xs font-normal uppercase border border-[#737679] rounded-full bg-[#4c4f56]transition-colors duration-200 ease-in-out hover:text-white hover:bg-[#2f3135]"
        >
          <span className="flex justify-center items-center mr-1 w-6 h-6">
            <img src={UpArrow} alt="up arrow" className="w-full h-full" />
          </span>
          Retour en haut
        </button>

        <span className="after:block after:w-[80px] after:pt-[25px] after:m-auto after:border-b-[1px] after:border-[#d1d3d4]" />

        <p className="mt-6 text-[#C2C3C4] text-sm">
          Copyright 2024 © France Travail
        </p>
      </div>
    </footer>
  );
}

// Exports
export default Footer;
