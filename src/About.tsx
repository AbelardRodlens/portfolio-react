import { useEffect, useState } from "react";
import SkillsPart from "./SkillsPart";
import { LongCard } from "./Cards";

export function About() {
  const [aboutIsVisible, setAboutIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const SocialMediaDiv = document.getElementById(
      "social-media"
    ) as HTMLDivElement;
    const SocialMediaSvgNodeList = SocialMediaDiv.querySelectorAll(
      "svg"
    ) as NodeListOf<SVGElement>;

    const ChangeCircleFillColor = (event: MouseEvent) => {
      const CircleElementInSvgElement = (
        event.currentTarget as SVGElement
      ).querySelector("circle") as SVGCircleElement;
      if (event.type == "mouseover") {
        CircleElementInSvgElement.style.fill = "#AFBBC8";
      } else if (event.type == "mouseout") {
        CircleElementInSvgElement.style.fill = "#C2D0DE";
      }
    };

    SocialMediaSvgNodeList.forEach((SvgElement: SVGElement) => {
      SvgElement.onmouseover = SvgElement.onmouseout = ChangeCircleFillColor;
    });

    // Nettoyage des événements quand le composant est démonté
    return () => {
      SocialMediaSvgNodeList.forEach((SvgElement: SVGElement) => {
        SvgElement.onmouseover = null;
      });
    };
  }, []);

  useEffect(() => {
    const profilPartDiv = document.getElementById(
      "profil-part"
    ) as HTMLDivElement;

    profilPartDiv.classList.add("show");
  }, []);


  useEffect (() => {
    const aboutMePartDiv = document.getElementById("about-me-part") as HTMLDivElement;
    const Observer: IntersectionObserver = new IntersectionObserver((entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setAboutIsVisible(true);
        }
      })

    }));

    Observer.observe(aboutMePartDiv);

    return () => Observer.unobserve(aboutMePartDiv)
  }, []);

  const avistelTextUL = (
    <ul>
      <li>
        Conception d’un outil de monitoring : création d’une application
        modulaire et maintenable en architecture MVC, garantissant évolutivité
        et clarté du code.
      </li>
      <li>
        Déploiement conteneurisé : intégration de Docker pour automatiser le
        déploiement, améliorer la portabilité et standardiser l’environnement.
      </li>
      <li>
        Sécurité et authentification : mise en place de solutions
        d’authentification sécurisées pour protéger les données et restreindre
        l’accès utilisateur.
      </li>
    </ul>
  );

  return (
    <div className="pages" id="AboutMe-Page">
      <div id="profil-part">
        <img
          id="pp"
          src="https://pbs.twimg.com/media/EyGKcN3WYAAP2FX.jpg"
          alt=""
        />

        <div id="infos">
          <p id="job">WEB DEVELOPPER | ETUDIANT</p>
          <p id="presentation-text">
            Je suis Rodlens <span className="highlighted-text">étudiant</span> à
            Sorbonne Paris Nord en{" "}
            <span className="highlighted-text">
              3ème année de BUT Informatique
            </span>
            . Depuis mon plus jeune âge, je suis passionné par la technologie et
            l'informatique. J'ai toujours été curieux de comprendre comment les
            logiciels et applications se crées, ce qui m'a poussé à faire les
            études que je fais actuellement.
          </p>
        </div>
        <div id="social-media">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="78"
            viewBox="0 0 79 78"
            fill="none"
            onClick={() => {
              window.open("https://www.linkedin.com/in/rodlens-abelard/");
            }}
          >
            <circle cx="39.5" cy="39" r="39" fill="#C2D0DE" />
            <path
              d="M28.4546 59H20.1615V32.2943H28.4546V59ZM24.303 28.6514C21.6515 28.6514 19.5 26.4543 19.5 23.8029C19.5 21.1514 21.6501 19 24.303 19C26.956 19 29.1061 21.15 29.1061 23.8029C29.1061 26.4543 26.9546 28.6514 24.303 28.6514ZM59.4929 59H51.2183V46C51.2183 42.9014 51.1554 38.9286 46.9067 38.9286C42.5951 38.9286 41.9337 42.2943 41.9337 45.7771V59H33.6491V32.2943H41.6022V35.9371H41.7179C42.8251 33.8386 45.5295 31.6243 49.5639 31.6243C57.9571 31.6243 59.5 37.1514 59.5 44.33V59H59.4929Z"
              fill="#2B3A5E"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="78"
            viewBox="0 0 79 78"
            fill="none"
            onClick={() => {
              window.open("https://github.com/AbelardRodlens");
            }}
          >
            <circle cx="39.5" cy="39" r="39" fill="#C2D0DE" />
            <path
              d="M39.5013 19.0013C28.4518 19.0013 19.5 28.1863 19.5 39.5064C19.5 48.5709 25.2304 56.2539 33.1721 58.9645C34.1759 59.158 34.5384 58.5236 34.5384 57.9751C34.5384 57.4881 34.5272 56.2001 34.5197 54.4905C28.9531 55.7259 27.7805 51.7338 27.7805 51.7338C26.8692 49.3706 25.5541 48.7362 25.5541 48.7362C23.744 47.4688 25.6979 47.4957 25.6979 47.4957C27.703 47.6354 28.7581 49.6039 28.7581 49.6039C30.5419 52.7412 33.4384 51.8338 34.5847 51.3058C34.7597 49.9845 35.281 49.0759 35.8485 48.5696C31.4082 48.0557 26.7392 46.2936 26.7392 38.4363C26.7392 36.1923 27.5143 34.3647 28.7956 32.9294C28.5743 32.4155 27.8968 30.3265 28.9718 27.5019C28.9718 27.5019 30.6457 26.9547 34.4722 29.605C36.0735 29.15 37.7736 28.9232 39.4725 28.9117C41.1726 28.9232 42.8715 29.1513 44.4728 29.605C48.2768 26.9547 49.9494 27.5019 49.9494 27.5019C51.0232 30.3265 50.3457 32.4142 50.1507 32.9294C51.4195 34.3647 52.1945 36.1935 52.1945 38.4363C52.1945 46.3115 47.5193 48.048 43.074 48.5491C43.769 49.163 44.4203 50.4254 44.4203 52.3413C44.4203 55.0839 44.3953 57.2933 44.3953 57.961C44.3953 58.4941 44.7453 59.1349 45.7754 58.9286C53.7759 56.2462 59.5 48.5568 59.5 39.5051C59.5 28.185 50.5482 19 39.4988 19L39.5013 19.0013Z"
              fill="#394B76"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="78"
            viewBox="0 0 79 78"
            fill="none"
            onClick={() => {
              window.open("");
            }}
          >
            <circle cx="39.5" cy="39" r="39" fill="#C2D0DE" />
            <path
              d="M48.66 42.9713C48.1587 42.7175 45.7175 41.5263 45.2612 41.3563C44.805 41.1938 44.4737 41.1087 44.1412 41.61C43.8162 42.0987 42.8587 43.2175 42.5662 43.5438C42.2737 43.87 41.9862 43.895 41.4925 43.6737C40.9912 43.42 39.39 42.8987 37.4888 41.1937C36.0037 39.8725 35.015 38.245 34.7213 37.7437C34.4288 37.2488 34.6888 36.9688 34.9362 36.7213C35.1637 36.4937 35.4375 36.1488 35.6912 35.8488C35.9325 35.5487 36.01 35.3475 36.1863 35.0225C36.3487 34.6712 36.265 34.3975 36.1413 34.15C36.0175 33.9025 35.0212 31.4488 34.605 30.4713C34.2075 29.5013 33.7912 29.625 33.485 29.625C33.1987 29.5988 32.8663 29.5988 32.535 29.5988C32.2038 29.5988 31.6625 29.7225 31.2062 30.1975C30.75 30.6988 29.4613 31.8962 29.4613 34.3188C29.4613 36.7475 31.245 39.0975 31.4925 39.4487C31.7463 39.7737 35.0013 44.7737 39.995 46.9225C41.1863 47.4237 42.1112 47.7237 42.8337 47.9713C44.025 48.3487 45.1125 48.2962 45.9713 48.1725C46.9212 48.0162 48.9137 46.9675 49.3312 45.7962C49.755 44.6175 49.755 43.6412 49.6312 43.42C49.5075 43.1925 49.1825 43.0687 48.6812 42.8475L48.66 42.9713ZM39.6038 55.25H39.5775C36.6213 55.25 33.6988 54.4487 31.1463 52.9512L30.5475 52.5938L24.2975 54.2212L25.9775 48.14L25.5738 47.515C23.9263 44.8913 23.0475 41.8638 23.0475 38.7525C23.0475 29.6775 30.4763 22.275 39.6163 22.275C44.0438 22.275 48.1975 24 51.3225 27.125C54.4475 30.2238 56.1725 34.3775 56.1725 38.7787C56.16 47.8475 48.7375 55.25 39.61 55.25H39.6038ZM53.6987 24.7487C49.8962 21.0763 44.8962 19 39.5775 19C28.6075 19 19.675 27.8937 19.6688 38.8237C19.6688 42.3138 20.58 45.7188 22.325 48.7325L19.5 59L30.06 56.2463C32.97 57.815 36.245 58.655 39.5788 58.6613H39.585C50.5613 58.6613 59.4938 49.7675 59.5 38.83C59.5 33.5375 57.4363 28.5562 53.6738 24.8125L53.6987 24.7487Z"
              fill="#2B3A5E"
            />
          </svg>
        </div>
      </div>

      <div id="about-me-part">
        <h3 className={ aboutIsVisible ? "container-title show" : "container-title hidden" } >ABOUT ME</h3>

        <div id="about-me-text" className={ aboutIsVisible ? "show" : "hidden" }>
          <div className="about-me-text-container" >
            <h4> 🖥️ From passion to profession</h4>
            <p>
              Passionné par l’informatique depuis mon enfance, j’ai intégré un
              BUT Informatique à Sorbonne Paris Nord, où j’ai acquis des
              compétences en conception logicielle et en modélisation UML
              (diagrammes de classes et de séquence). J’ai appris à rédiger des
              User Stories pour définir les exigences fonctionnelles et
              structurer les interactions du système. J’ai également étudié des
              design patterns comme Singleton, Decorator et Observer afin
              d’écrire un code plus robuste et évolutif. La formation m’a aussi
              permis d’adopter les bonnes pratiques de développement, notamment
              l’écriture de tests (unitaires, d’intégration, end-to-end) et
              l’approche TDD. J’ai mis en pratique ces compétences à travers des
              projets concrets : développement d’API REST, création de
              mini-logiciels (calculatrice, réseaux sociaux) et conception de
              sites Intranet/Extranet.
            </p>
          </div>

          <div className="about-me-text-container">
            <h4> 🔮 Future goals</h4>
            <p>
              À l’heure actuelle, je souhaite intégrer un Master en
              développement d’applications ou en cybersécurité, deux domaines
              qui m’attirent particulièrement. J’estime avoir acquis toutes les
              notions essentielles pour approfondir le développement web par
              moi-même et préfère me tourner vers un parcours me permettant
              d’élargir mes compétences. Mon objectif est donc de poursuivre en
              alternance afin de consolider mon expertise tout en gagnant en
              expérience professionnelle.
            </p>
          </div>

          <div className="about-me-text-container">
            <h4> 🎨 Other interests</h4>
            <p>
              En dehors de l’informatique, je suis un grand amateur d’animation
              japonaise et de mangas. Bien que souvent perçus comme de la
              sous-culture, je les considère comme des œuvres riches et
              inspirantes. À travers ces médiums, les auteurs transmettent leur
              vision du monde et partagent leur imaginaire avec une profondeur
              qui me fascine. Je suis également passionné par les jeux vidéo, en
              particulier les MMORPG fantasy comme Wakfu, ainsi que par les MOBA
              et les FPS.
            </p>
          </div>

          <div className="about-me-text-container">
            <h4></h4>
            <p></p>
          </div>
        </div>
      </div>

      <SkillsPart />

      <div id="education-and-experience-part">
        <div id="education-container">
          <h3 className="container-title">EDUCATION</h3>
          <LongCard
            img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5o9ZBKvhTN2VhfwqIGJxeRPEwa0DP_64jzB9lk5inig65v4f3r-NrVacFTBPMQfDGa54&usqp=CAU"
            title="Université Sorbonne Paris Nord"
            period="2022-2025"
            text="Bachelor Universitaire de Technologie, réalisation d'applications : conception, développement, validation.  "
          />
          <LongCard
            img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2GO7aCJTsnOt_e2n4qiN-9NT4WKjHe7aNsQ&s"
            title="Lycée Polyvalent Jean Perrin"
            period="2021-2022"
            text="Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable."
          />
        </div>

        <div id="experience-container">
          <h3 className="container-title">EXPERIENCE</h3>
          <LongCard
            img_src="https://avistel.fr/wp-content/uploads/2020/06/Logo-AVISTEL.png"
            title="Avistel | Stage de développement d'applications"
            period="Janvier 2024 - Mars 2024"
            text={avistelTextUL}
          />
        </div>
      </div>
    </div>
  );
}
