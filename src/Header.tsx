import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  useEffect(() => {
    const header = document.querySelector("header") as HTMLHeadElement;
    const mainPage = document.getElementById("Portfolio") as HTMLDivElement;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          header.style.transform = "translateY(0)";
        }
      });
    });

    observer.observe(mainPage);
  }, []);

  return (
    <header>
      <Link to="/" id="name">
        AbelardRodlens
      </Link>

      <div id="sections">
        <Link to="/">
          <p id="about-section">About</p>
        </Link>
        <Link to="/work">
          <p id="work-section">Work</p>
        </Link>
        <Link to="/assets/CV/Abelard Rodlens CV.pdf" target="_blank" rel="noopener noreferrer">
          <p id="resume-section">Resume</p>
        </Link>
      </div>
    </header>
  );
}
