// Imports
import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

// Components
import Footer from "../../components/Footer";

// Icons
import InfoIcon from "/icons/info.svg";
import CheckListIcon from "/icons/checklist.svg";
import CalculatorIcon from "/icons/calculator.svg";
import WalletIcon from "/icons/wallet.svg";
import LightbulbIcon from "/icons/lightbulb.svg";

function Homepage() {
  const news = [
    {
      name: "France Travail Pro : notre offre entreprises renforcée",
      description:
        "Les employeurs ont désormais leur marque dédiée : France Travail Pro ! Conseillers joignables le samedi, immersions… voici toutes nos offres sur mesure pour recruter et former des candidats de manière durable et inclusive.",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/employeur/2024/logo-FT-Pro-308.gif",
    },
    {
      name: "Semaine des métiers de l'agroalimentaire",
      description:
        "Du 04 au 08 novembre, venez découvrir la grande variété de métiers qui s'offrent à vous et les événements prévus dans votre région !",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/affiche/semaine-agroalimentaire/2024/Agro-24-V3-308x188.jpg",
    },
    {
      name: "Arrêter de fumer, prêt à relever le défi ?",
      description:
        "N'importe quel fumeur le dira : arrêter de fumer peut ressembler à un parcours du combattant. Mais une fois les premières difficultés passées, un vrai sentiment de bien-être, physique et mental, peut en découler.",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/affiche/bien-dans-mon-quotidien/arret-tabac-308.jpg",
    },
    {
      name: "Prenez les commandes de votre avenir professionnel, devenez conducteur de ligne",
      description:
        "Connaissez-vous le point commun entre des vêtements, un paquet de pâtes, une crème hydratante et les ailes d'un avion ?",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/secteurs-metiers/agroalimentaire/conducteur-ligne-308.jpg",
    },
    {
      name: "Fabrication d'éoliennes : 11 métiers qui recrutent",
      description:
        "Chaudronniers, soudeurs, ingénieurs… Vous possédez une expérience ou des compétences issues du secteur industriel ? Et si vous vous lanciez dans le domaine des énergies renouvelables ?",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/secteurs-metiers/Environnement/Fabrication-eoliennes-308",
    },
    {
      name: "4 conseils pour votre premier entretien avec votre conseiller France Travail",
      description:
        "Vous êtes inscrit à France Travail, vous allez donc rencontrer votre conseiller. Voici comment préparer cette étape.",
      link: "#",
    },
    {
      name: "Métiers de la voirie : tracez votre route !",
      description:
        "Prêt pour un job de terrain ? Dans la grande famille des métiers de la voirie et réseaux divers (VRD), découvrez les missions 100% essentielles du maçon, de l'agent d'entretien, du conducteur de travaux VRD…",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/secteurs-metiers/batiment-travaux-publics/metier-voirie-850.jpg",
    },
    {
      name: "L'agent de bionettoyage, ce champion de l'hygiène",
      description:
        "Un métier accessible dès le Bac et qui recrute ? Agent de bionettoyage ! Gardien de la santé des plus vulnérables dans les hôpitaux, les maisons de retraite, il nettoie et désinfecte les locaux. Un emploi essentiel.",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/secteurs-metiers/Sant%c3%a9/agent-bionettoyage-308.jpg",
    },
    {
      name: "Les pros des labos, discrets héros de l'industrie pharmaceutique",
      description:
        "Placés sous le signe du soin et du progrès scientifique, les métiers de laboratoire sont recherchés et accessibles avec des formations. Autant d'opportunités d'emploi passées au microscope.",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/secteurs-metiers/Industrie/pharmaceutique/pros-des-labos-308.jpg",
    },
    {
      name: "Soyez au cœur de la Justice, devenez surveillant pénitentiaire",
      description:
        "30 000 surveillants pénitentiaires assurent une mission de sécurité publique, essentielle au bon fonctionnement de la Justice et à la protection de la société. Rejoignez-les ! Inscrivez-vous au concours !",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/affiche/concours/Surveillantes-penitentiaires-308x188.jpg",
    },
    {
      name: "France services vous accompagne dans vos démarches !",
      description:
        "A moins de 20 minutes de chez vous, les conseillers France services vous accompagnent dans toutes vos démarches administratives.",
      link: "#",
    },
    {
      name: "Pôle emploi devient France Travail",
      description:
        "Au 1er janvier 2024, en application de la loi pour le plein emploi, Pôle emploi évolue et devient France Travail.",
      link: "#",
      image:
        "https://www.francetravail.fr/files/live/sites/PE/files/affiche/Logos/Bloc_Marque_RF_France_Travail_marque-308.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[#E5E9EC]">
      <Wrapper />
      {/* Wrapper Buttons */}
      <div className="py-5 px-4 text-center bg-white">
        <h2 className="text-4xl font-normal text-center">Entreprise</h2>
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

      {/* Actualités de l'emploi */}
      <div className="grid grid-cols-1 mx-auto w-11/12">
        <Link
          to="#"
          className="mt-6 mb-1 py-5 px-4 mx-auto w-fit text-[33px] text-center font-normal hover:underline after:block after:w-[50px] after:pt-[25px] after:m-auto after:border-b-2 after:border-[#d1d3d4]"
        >
          Actualités de l'emploi
        </Link>

        {/* news */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 mb-12 py-[30px] px-[10px] shadow-custom bg-white">
          <div>
            <div className="px-5">
              <h2 className="mb-[15px] text-[#e8a53d] text-[23px]">
                <strong>Tous vigilants !</strong>
              </h2>
              <p className="mb-2 text-sm text-gray-500">
                Consultez les arnaques et tentatives de fraude en cours.
              </p>
              <Link
                to="#"
                className="pt-2 pb-[7px] px-4 min-h-[34px] text-[#737679] text-[11px] font-normal uppercase border border-[#737679] rounded-full transition-colors duration-200 ease-in-out hover:text-white hover:bg-[#737679]"
              >
                En savoir plus
              </Link>
            </div>
          </div>
          <div className="pl-[10px] border-l-[1px] border-[#e6e7e8]">
            <div className="px-5">
              <h2 className="mb-[15px] text-[#1c3f55] text-[23px]">
                <strong>En direct des régions !</strong>
              </h2>
              <p className="mb-2 text-sm text-gray-500">
                Des actualités, des événements, des opportunités d&apos;emploi
                et de formation près de chez vous.
              </p>
              <Link
                to="#"
                className="pt-2 pb-[7px] px-4 min-h-[34px] text-[#737679] text-[11px] font-normal uppercase border border-[#737679] rounded-full transition-colors duration-200 ease-in-out hover:text-white hover:bg-[#737679]"
              >
                L&apos;actu en région
              </Link>
            </div>
          </div>
        </div>

        {/* news grid */}
        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {news.map((item, index) => (
              <li
                key={index}
                className="grid grid-cols-1 shadow-custom transition-all duration-200 ease-in-out hover:scale-95"
              >
                <Link
                  to={item.link}
                  className="flex flex-col justify-between w-full h-[400px] max-h-[400px] bg-white"
                >
                  <div className="py-4 px-6 text-inherit">
                    <h3 className="text-[22px] leading-[1.1] font-normal">
                      {item.name}
                    </h3>
                    <p className="my-[9px] text-sm">{item.description}</p>
                  </div>
                  <div
                    className="w-full h-[180px] bg-[#e5e9ec]"
                    title={item.name}
                  >
                    <img
                      src={item.image || "https://via.placeholder.com/308x188"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
              </li>
            ))}
            {/* three more cards */}
            <li className="grid grid-cols-1 shadow-custom">
              <div className="cursor-default flex flex-col justify-between w-full h-[400px] max-h-[400px] bg-[#934C94]">
                <div className="p-6 text-white text-center">
                  <h3 className="text-3xl leading-[1.1] font-medium">
                    Mode d&apos;emploi
                  </h3>
                  <p className="my-[9px] text-md">Votre newsletter mensuelle</p>
                </div>

                {/* card links buttons */}
                <div>
                  <Link
                    to="#"
                    className="cursor-pointer flex justify-center items-center px-7 w-full h-[83px] bg-[#582E59] hover:bg-[#492649] hover:underline hover:underline-offset-4 decoration-white"
                  >
                    <p className="flex justify-between items-center w-full text-[17px] text-white ">
                      Mode d&apos;emploi - Octobre #141
                      <span>
                        <img src={CheckListIcon} alt="" />
                      </span>
                    </p>
                  </Link>
                  <Link
                    to="#"
                    className="cursor-pointer flex justify-center items-center px-7 w-full h-[83px] bg-[#492649] hover:underline hover:underline-offset-4 decoration-white"
                  >
                    <p className="flex justify-between items-center w-full text-[17px] text-white ">
                      Abonnement et anciens numéros
                      <span>
                        <img src={InfoIcon} alt="" />
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </li>

            <li className="grid grid-cols-1 shadow-custom">
              <div className="cursor-default flex flex-col justify-between w-full h-[400px] max-h-[400px] bg-[#223D5B]">
                <div className="p-6 text-white text-center">
                  <h3 className="text-3xl leading-[1.1] font-medium">
                    Guide des simulateurs d&apos;allocations et aides
                  </h3>
                  <p className="my-[9px] text-md">Votre newsletter mensuelle</p>
                </div>

                {/* card links buttons */}
                <div>
                  <Link
                    to="#"
                    className="cursor-pointer flex justify-center items-center px-7 w-full h-[83px] bg-[#142537] hover:bg-[#111E2D] hover:underline hover:underline-offset-4 decoration-white"
                  >
                    <p className="flex justify-between items-center w-full text-[17px] text-white ">
                      Guide et simulateurs
                      <span>
                        <img src={CalculatorIcon} alt="" />
                      </span>
                    </p>
                  </Link>
                  <Link
                    to="#"
                    className="cursor-pointer flex justify-center items-center px-7 w-full h-[83px] bg-[#111E2D] hover:underline hover:underline-offset-4 decoration-white"
                  >
                    <p className="flex justify-between items-center w-full text-[17px] text-white ">
                      Comprendre le calcul
                      <span>
                        <img src={WalletIcon} alt="" />
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </li>

            <li className="grid grid-cols-1 shadow-custom">
              <div className="cursor-default flex flex-col justify-between w-full h-[400px] max-h-[400px] bg-[#223D5B]">
                <div className="p-6 text-white text-center">
                  <h3 className="text-3xl leading-[1.1] font-medium">
                    Je donne mon avis
                  </h3>
                  <p className="my-[9px] text-md">
                    Pour des services publics plus proches, plus simples et plus
                    efficaces.
                  </p>
                </div>

                {/* card links buttons */}
                <div>
                  <Link
                    to="#"
                    className="cursor-pointer flex justify-center items-center px-7 w-full h-[83px] bg-[#111E2D] hover:underline hover:underline-offset-4 decoration-white"
                  >
                    <p className="flex justify-between items-center w-full text-[17px] text-white ">
                      Partager votre expérience
                      <span>
                        <img src={LightbulbIcon} alt="" />
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* more news button */}
        <div className="flex justify-center my-8">
          <Link
            to="#"
            className="pt-2 pb-[7px] px-4 min-h-[34px] text-[#737679] text-[11px] font-normal uppercase border border-[#737679] rounded-full bg-white transition-colors duration-200 ease-in-out hover:text-white hover:bg-[#737679]"
          >
            Plus d&apos;actualités
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Exports
export default Homepage;
