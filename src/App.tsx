import { About } from "./About.tsx";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Work from "./Work.tsx";
import edupilot_visualizer from "../public/assets/edupilot_home.webp";
import gameverse_visualizer from "../public/assets/gameverse2.webp";
import perform_vision_visualizer from "../public/assets/performvision.webp";
import avistel_visualizer from "../public/assets/avimonitoring_focus.webp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.tsx";
import WorkPresentation from "./WorkPresentation.tsx";

const dataGameVerse = {
  title: "GameVerse",
  subtitle: "Platforme communautaire ayant pour sujet les jeux vidéo.",
  visualizer_src: gameverse_visualizer,
  description: (
    <p className="summary-text">
      Dans le cadre d'un projet scolaire, nous avons été chargés de{" "}
      <span className="highlight-text">concevoir et de développer</span> un site
      web répondant à une exigence :{" "}
      <span className="highlight-text">intégrer un sélecteur multimodal</span>.
      Pour ce projet, nous avons choisi de créer{" "}
      <span className="highlight-text">une plateforme communautaire</span>{" "}
      dédiée aux passionnés de jeux vidéo. L'objectif était de permettre aux
      utilisateurs de créer leur propre{" "}
      <span className="highlight-text">liste de jeux</span>, de{" "}
      <span className="highlight-text">partager des avis et d'interagir</span>{" "}
      avec d'autres membres de la communauté. Cette plateforme offre une
      expérience enrichissante en combinant des{" "}
      <span className="highlight-text">
        fonctionnalités de recommandation et d'échange
      </span>{" "}
      autour des jeux vidéo.
    </p>
  ),

  timeline: "Sept - January 2025",
  organization: "IUT Villetaneuse",
  role: "Back-End Developer",
  responsibilities: [
    "API Development",
    "Database Design",
    "User Session Security",
  ],
  tools: ["Express JS", "Jest", "MongoDB"],
  teamate: {
    Michael: {
      full_name: "Atici Michael",
      link: "https://www.linkedin.com/in/michael-atici/?originalSubdomain=fr",
      role: "Front-End Developer & UI Designer",
    },

    Nassim: {
      full_name: "Manseur Nassim",
      link: "https://www.linkedin.com/in/nassim-manseur/",
      role: "Back-End Developer",
    },

    Pham: {
      full_name: "Pham Xuan",
      link: "",
      role: "Front-End Developer",
    },
  },
};

const dataEduPilot = {
  title: "EduPilot",
  subtitle:
    "Application de gestion des heures d'enseignement et des affectations pédagogiques.",
  visualizer_src: edupilot_visualizer,
  description: (
    <p className="summary-text">
      Dans le cadre d'un projet scolaire, nous avons été chargés de{" "}
      <span className="highlight-text">
        concevoir et de développer un site web intranet destiné à la gestion des
        heures d'enseignement
      </span>{" "}
      à l'IUT de Villetaneuse. L'objectif était de{" "}
      <span className="highlight-text">
        permettre une gestion dynamique des heures d'enseignement des
        enseignants
      </span>
      , en prenant en compte les différents départements, formations, et
      disciplines. Le site propose{" "}
      <span className="highlight-text">une interface sécurisée</span> où les
      utilisateurs, selon leur rôle, peuvent consulter et modifier les données
      relatives aux besoins en heures d'enseignement et aux affectations des
      enseignants. Il inclut également des{" "}
      <span className="highlight-text">
        visualisations des données et des indicateurs clés
      </span>{" "}
      comme le taux d'encadrement, permettant de suivre la répartition des
      heures d'enseignement au sein de l'IUT.
    </p>
  ),

  timeline: "Nov 2023 - January 2024",
  organization: "IUT Villetaneuse",
  role: "Full Stack Developer",
  responsibilities: [
    "Interface Design / Development",
    "Database Design",
    "User Session Security",
  ],
  tools: ["PHP", "PostgreSQL", "JS", "HTML/CSS"],
  teamate: {
    Anis: {
      full_name: "Laddada Anis",
      link: "https://www.linkedin.com/in/anis-laddada-b46163263/edit/forms/next-action/after-connect-update-profile/?trk=public_profile_browsemap",
      role: "Back-End Developer",
    },

    Nassim: {
      full_name: "Manseur Nassim",
      link: "https://www.linkedin.com/in/nassim-manseur/",
      role: "Full Stack Developer",
    },

    Michael: {
      full_name: "Atici Michael",
      link: "https://www.linkedin.com/in/michael-atici/?originalSubdomain=fr",
      role: "Front-End Developer & UI Designer",
    },

    Imran: {
      full_name: "Belmessaoud Imran",
      link: "https://www.linkedin.com/in/imran-belmessaoud/",
      role: "Front-End Developer & UI Designer",
    },
  },
};

const dataPerformVision = {
  title: "PerformVision",
  subtitle:
    "Audit d'un extranet de gestion et de suivi des prestations en régie.",
  visualizer_src: perform_vision_visualizer,
  description: (
    <div className="summary-text">
      Dans le cadre d'un projet scolaire, nous avons été chargés{" "}
      <span className="highlight-text">d'auditer un site extranet</span>{" "}
      développé par des camarades de promotion, tout en réalisant des{" "}
      <span className="highlight-text">
        améliorations et des développements complémentaires en réponse aux
        besoins identifiés
      </span>
      . L'audit comprenait{" "}
      <span className="highlight-text">
        une analyse approfondie de la structure et de l'optimisation de la base
        de données
      </span>
      , la vérification de la{" "}
      <span className="highlight-text">
        conformité aux normes d'accessibilité WCAG
      </span>
      , ainsi que l'évaluation des mesures de sécurité mises en place.
      Parallèlement, nous avons développé de nouvelles fonctionnalités,{" "}
      <span className="highlight-text">
        corrigé certaines lacunes techniques et amélioré l'expérience
        utilisateur
      </span>
      . Ce projet nous a permis de combiner nos compétences en audit
      technologique et en développement, tout en renforçant notre capacité à
      analyser de manière critique et à collaborer pour apporter des solutions
      concrètes et efficaces.
    </div>
  ),

  timeline: "May 2024 - June 2024",
  organization: "IUT Villetaneuse",
  role: "Back-End Developer",
  responsibilities: [
    "Code Analysis and Debugging",
    "Feature Development",
    "Documentation",
  ],
  tools: ["PHP", "PostgreSQL", "JS"],
  teamate: {
    Jelain: {
      full_name: "Jelain John Jesuratnam",
      link: "https://fr.linkedin.com/in/jelain-john-jesuratnam-64b702270",
      role: "Front-End Developer & UI Designer",
    },

    Johann: {
      full_name: "Johann Zidee",
      link: "https://fr.linkedin.com/in/johannzidee",
      role: "Back-End Developer",
    },

    Pauline: {
      full_name: "Vu Pauline",
      link: "https://www.linkedin.com/in/vu-pauline?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADxBxzUBv1kJph09ajp99ckamjNxMoa4q_Q&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3Bf0bdehoqQNKQxZHBLdLe5g%3D%3D",
      role: "Full Stack Developer",
    },
  },
};

const dataAviMonitoring = {
  title: "AviMonitoring",
  subtitle:
    "Application de monotoring offrant une vue d'ensemble des performances des sites clients.",
  visualizer_src: avistel_visualizer,
  description: (
    <p className="summary-text">
      Lors de mon stage chez Avistel, j’ai{" "}
      <span className="highlight-text">
        développé un outil de monitoring consolidant les données des bases de la
        solution Avitax
      </span>
      . L’objectif était de fournir aux clients une{" "}
      <span className="highlight-text">vue centralisée</span> sur leur chiffre
      d’affaires par site ou exploitant, ainsi que des indicateurs clés comme le
      nombre de chambres non louées, le tout sur des périodes données. Le projet
      comprenait{" "}
      <span className="highlight-text">
        l’étude des bases de données existantes
      </span>
      ,{" "}
      <span className="highlight-text">
        la définition des besoins utilisateurs
      </span>{" "}
      via un diagramme UML, et la{" "}
      <span className="highlight-text">conception d’un tableau de bord</span>{" "}
      intuitif. L’outil intègre un système de gestion des rôles pour sécuriser
      l’accès, et des fonctionnalités de gestion utilisateur.
    </p>
  ),

  timeline: "January 2024 - March 2024",
  organization: "Avistel",
  role: "Full Stack Developer",
  responsibilities: [
    "Backend Development",
    "Testing & Debugging",
    "Analysis & Requirements Gathering",
    "Maintenance",
    " UI/UX Design",
    "Documentation",
  ],
  tools: ["PHP, MySQL, JS, HTML & CSS, Figma, Docker"],
  teamate: {},
};

function App() {
  return (
    <Router basename="/portfolio-react">
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <div id="Portfolio">
              <Header />
              <About />
              <Footer />
            </div>
          }
        />

        <Route
          path="/work"
          element={
            <div id="Portfolio">
              <Header />
              <Work />
              <Footer />
            </div>
          }
        />

        <Route
          path="/gameverse"
          element={
            <div id="Portfolio">
              <Header />
              <WorkPresentation {...dataGameVerse} />
              <Footer />
            </div>
          }
        />

        <Route
          path="/edupilot"
          element={
            <div id="Portfolio">
              <Header />
              <WorkPresentation {...dataEduPilot} />
              <Footer />
            </div>
          }
        />

        <Route
          path="/perform-vision"
          element={
            <div id="Portfolio">
              <Header />
              <WorkPresentation {...dataPerformVision} />
              <Footer />
            </div>
          }
        />

        <Route
          path="/avimonitoring"
          element={
            <div id="Portfolio">
              <Header />
              <WorkPresentation {...dataAviMonitoring} />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
