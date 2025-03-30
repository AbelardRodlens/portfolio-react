import { Card_github_icone } from "./Icones.tsx";
import gameverse_background from "../public/assets/gameverse.png";
import edupilot_visualizer from "../public/assets/edupilot.webp";
import performvision_login from "../public/assets/performvision_login.webp";
import avimonitoring from "../public/assets/avimonitoring.webp";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <div id="work-page" className="pages">
      <div id="inprogress-work" className="work-container">
        <p className="work-container-title">IN PROGRESS</p>
        <Link to="/gameverse" style={{ textDecoration: "none" }}>
          <Card
            card_type="PROJET D'ETUDES"
            card_title="GameVerse"
            card_description="Platforme communautaire ayant pour sujet les jeux vidéo."
            card_background={gameverse_background}
            card_visualizer=""
            card_github_link="https://github.com/AbelardRodlens/BUT_INFO/tree/master/Sae%20BUT3/rebirth"
          />
        </Link>
      </div>

      <div id="other-works" className="work-container">
        <p className="work-container-title">THE OTHERS</p>
        <Link to="/edupilot" style={{ textDecoration: "none" }}>
          <Card
            card_type="PROJET D'ETUDES"
            card_title="EduPilot"
            card_description="Application de gestion des heures d'enseignement."
            card_background=""
            card_visualizer={edupilot_visualizer}
            card_github_link="https://github.com/AbelardRodlens/BUT_INFO/tree/master/Sae%20BUT2/Developpement%20d'une%20application/Site"
          />
        </Link>

        <Link to="/perform-vision" style={{ textDecoration: "none" }}>
          <Card
            card_type="PROJET D'ETUDES"
            card_title="PerformVision"
            card_description="Audit d'un extranet de gestion et de suivi des prestations en régie."
            card_background=""
            card_visualizer={performvision_login}
            card_github_link="https://github.com/AbelardRodlens/BUT_INFO/tree/master/Sae%20BUT2/Maintenance%20d%E2%80%99un%20site%20web"
          />
        </Link>

        <Link to="/avimonitoring" style={{ textDecoration: "none" }}>
          <Card
            card_type="PROJET D'ETUDES"
            card_title="AviMonitoring"
            card_description="Application de monotoring offrant une vue d'ensemble des performances des sites clients."
            card_background=""
            card_visualizer={avimonitoring}
            card_github_link="https://github.com/AbelardRodlens/BUT_INFO/tree/master/Stage"
          />
        </Link>
      </div>
    </div>
  );
}

type Cardtype = {
  card_type: string;
  card_title: string;
  card_description: string;
  card_background: string;
  card_visualizer: string;
  card_github_link: string;
};

function Card(props: Cardtype) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Fonction pour observer la visibilité des cartes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentCard = entry.target as HTMLElement;
          const ratio = entry.intersectionRatio as number;
          const angle = (20 - ratio * 20) as number; // Angle calculé selon le ratio de visibilité

          const bottomOfWindow = window.scrollY + window.innerHeight; // Position de la partie inférieur de la fenêtre selon le document

          // Position de la partie inférieur et supérieur de la carte selon le document
          const topOfCard = entry.boundingClientRect.top + window.scrollY;
          const bottomOfCard = entry.boundingClientRect.bottom + window.scrollY;

          if (bottomOfWindow <= topOfCard) {
            currentCard.style.transform = `scale(0.2) perspective(1200px) rotateX(${20}deg)`;
            currentCard.style.opacity = "0";
          } else if (bottomOfWindow >= bottomOfCard) {
            currentCard.style.transform = `scale(1) perspective(1200px) rotateX(${0}deg)`;
            currentCard.style.opacity = "1";
          } else if (
            bottomOfWindow <= bottomOfCard &&
            bottomOfWindow >= topOfCard
          ) {
            currentCard.style.transform = `scale(${
              1 * ratio
            }) perspective(1200px) rotateX(${angle}deg)`;
            currentCard.style.opacity = `${0.5 + Number(0.5) * ratio}`;
            console.log("rotate");
          }

          console.log(window.scrollY);
        });
      },
      { threshold: [0.2, 0.5, 0.8, 1] }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // Nettoyage
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="Card"
      style={
        props.card_background
          ? {
              backgroundImage: `url(${props.card_background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : { backgroundColor: "#4D5363" }
      }
    >
      <div className="card-header">
        <p className="card-type">{props.card_type}</p>
        <Card_github_icone
          width="20px"
          height="20px"
          onClick={(e) => {
            e.stopPropagation(); // Empêche la propagation du clic
            e.preventDefault(); // Empêche le comportement par défaut du lien
            window.open(props.card_github_link);
          }}
        />
      </div>

      <div className="card-content">
        {props.card_background === "" && (
          <img className="visualizer" src={props.card_visualizer} alt="" />
        )}

        <div className="card-title-and-description-container">
          <p className="card-title">{props.card_title}</p>
          <p className="card-description">{props.card_description}</p>
        </div>
      </div>
    </div>
  );
}
